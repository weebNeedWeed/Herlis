import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { IoChatbubblesOutline, IoTrash } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import MenuItem from "../../components/ui/SideMenu/MenuItem";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";

const createConversation = async () => {
  const conversationRef = await addDoc(collection(db, "Conversations"), {
    createdAt: serverTimestamp(),
  });

  return conversationRef.id;
};

const handleDeleteConversation = async (conversationId) => {
  try {
    await deleteDoc(doc(db, "Conversations", conversationId));
  } catch (error) {
    console.error("Error deleting conversation: ", error);
  }
};

function ChatSideMenu({ selectConversation }) {
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const q = query(collection(db, "Conversations"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const loadedConversations = [];
      querySnapshot.forEach((doc) => {
        loadedConversations.push({ ...doc.data(), id: doc.id });
      });
      setConversations(loadedConversations);
    });

    return () => unsubscribe;
  }, []);

  const handleAddnewConv = async () => {
    const new_id = await createConversation();
  };

  return (
    <div className="bg-app w-full h-full flex flex-col items-center justify-start text-white ">
      <button
        onClick={handleAddnewConv}
        className="flex w-full justify-end  py-5 px-1 space-x-2"
      >
        <div>
          <IoIosAddCircleOutline className="text-4xl" />
        </div>
      </button>

      <hr className="bg-white w-full" />

      <div className="overflow-y-auto pr-4 max-w-full max-h-[90vh]">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => selectConversation(conversation.id)}
          >
            <NavLink
              to={`/chatbot/${conversation.id}`}
              className={({ isActive }) =>
                clsx(
                  "flex justify-start mt-2 items-center gap-x-2 w-full px-3 py-4 rounded",
                  `hover:bg-[rgba(255,255,255,0.3)] transition-all`,
                  isActive && "bg-[rgba(255,255,255,0.3)]"
                )
              }
            >
              <button
                onClick={() => {
                  handleDeleteConversation(conversation.id);
                }}
                aria-label="Delete conversation"
                className="p-2"
              >
                {<IoTrash className="text-3xl fill-[#FB8585]" />}
              </button>
              <span className="text-sm pt-1">{`New conversation`}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSideMenu;
