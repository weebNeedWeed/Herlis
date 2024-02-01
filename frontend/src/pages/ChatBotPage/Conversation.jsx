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

function Conversation() {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const q = query(collection(db, "Chat text"), orderBy("time"), limit(50));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const time = data.time.toDate().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        newMessages.push({ ...doc.data(), id: doc.id, time: time });
        console.log(newMessages);
      });
      setMessages(newMessages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="flex flex-col overflow-y-auto mx-auto space-y-4 p-4 bg-white  rounded-lg max-h-[95vh]">
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
