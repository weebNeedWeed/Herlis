import BotchatBox from "./BotChatBox";
import { useState, useEffect, useRef } from "react";
import robotHead from "../assets/chatBot_head.svg";
import { db } from "../../firebase/index";

function Conversation({ currentConversationId }) {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
