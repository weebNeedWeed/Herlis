import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { IoChatbubblesOutline, IoTrash } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  limit,
  doc,
  getDocs,
} from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

const createConversation = async () => {
  const conversationRef = await addDoc(collection(db, "Conversations"), {
    createdAt: serverTimestamp(),
  });

  return conversationRef.id;
};

function ChatSideMenu({ selectConversation }) {
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const q = query(
      collection(db, "Conversations"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const loadedConversations = [];
      querySnapshot.forEach((doc) => {
        loadedConversations.push({ ...doc.data(), id: doc.id });
      });
      setConversations(loadedConversations);
    });

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    if (conversations.length == 0) {
      navigate(`/chatbot`);
      selectConversation(null);
    } else {
      const id = conversations[0].id;
      navigate(`/chatbot/${id}`);
      selectConversation(id);
    }
  }, [conversations]);

  const handleAddnewConv = async () => {
    const new_id = await createConversation();
  };

  async function deleteCollectionAndSubcollections(db, collectionPath) {
    await deleteSubcollections(db, `Conversations/${collectionPath}`);

    await deleteDoc(doc(db, "Conversations", collectionPath));
  }

  async function deleteSubcollections(db, docPath) {
    const subcollections = ["Messages"];

    for (const subcollection of subcollections) {
      const subcollectionRef = collection(db, `${docPath}/${subcollection}`);
      const docsSnapshot = await getDocs(subcollectionRef);

      for (const docSnapshot of docsSnapshot.docs) {
        await deleteDoc(
          doc(db, `${docPath}/${subcollection}/${docSnapshot.id}`)
        );
      }
    }
  }

  return (
    <div className="bg-[#228E8E] w-full h-full rounded-l-[5vh] flex flex-col items-center text-white overflow-hidden">
      <h2 className="text-3xl font-semibold py-5">Lịch sử</h2>
      <div className="flex w-full space-x-5">
        <button
          onClick={handleAddnewConv}
          className="flex w-full justify-center py-5 px-5 rounded-l-full space-x-2 hover:bg-white hover:bg-opacity-25"
        >
          <span className="inline-block  text-xl align-middle">
            <IoIosAddCircleOutline />
          </span>
          <span className="font-medium"> Cuộc trò chuyện mới</span>
        </button>
      </div>

      <div className="overflow-y-auto w-full  max-h-[80vh]">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="w-full px-3 py-2">
            <NavLink
              to={`/chatbot/${conversation.id}`}
              className={({ isActive }) =>
                clsx(
                  "flex items-center gap-x-4 w-full rounded-lg p-3",
                  isActive
                    ? "bg-white bg-opacity-50"
                    : "hover:bg-white hover:bg-opacity-25",
                  "transition-all duration-300 ease-in-out"
                )
              }
              onClick={() => selectConversation(conversation.id)}
            >
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white">
                  {conversation.name}
                </span>
                <span className="text-md text-white opacity-80">
                  {conversation.id}
                </span>
              </div>
              <button
                onClick={() => {
                  deleteCollectionAndSubcollections(db, conversation.id);
                }}
                aria-label="Delete conversation"
                className="ml-auto p-2"
              >
                <IoTrash className="text-xl text-red-400" />
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSideMenu;
