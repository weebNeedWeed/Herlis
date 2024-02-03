import BotchatBox from "./BotChatBox";
import { useState, useEffect, useRef } from "react";
import robotHead from "../assets/chatBot_head.svg";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../../firebase";

function Conversation({ currentConversationId }) {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!currentConversationId) return;

    const messagesQuery = query(
      collection(db, `Conversations/${currentConversationId}/Messages`),
      orderBy("time"),
      limit(50)
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const newMessages = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        const time = data.time.toDate().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        return { ...data, id: doc.id, time: time ?? "N/A" };
      });
      setMessages(newMessages);
    });

    return () => unsubscribe;
  }, [currentConversationId]);

  return (
    <div className="flex flex-col overflow-y-auto h-full mx-auto space-y-4 p-4 bg-neutral-100 rounded-lg max-h-[95vh]">
      <div>
        <div className="image-container flex items-center justify-center ">
          <img src={robotHead} alt="Chat Logo"></img>
        </div>
      </div>
      {messages.map((message) => (
        <BotchatBox key={message.id} messageInfo={message}>
          {message.text}
        </BotchatBox>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Conversation;
