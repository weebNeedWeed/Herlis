import { useState, useEffect, useRef } from "react";
import robotHead from "../assets/chatBot_head.svg";
import Message from "./Message";

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
    <div className="flex flex-col grow gap-y-3 overflow-y-auto p-2">
      <img className="self-center w-28" src={robotHead} alt="ChatBot Logo"></img>


      {/* {messages.map((message) => (
        <BotchatBox key={message.id} messageInfo={message}>
          {message.text}
        </BotchatBox>
      ))}
      <div ref={messagesEndRef} /> */}
      <Message message={{ sender: "model", text: "hello" }} />
      <Message message={{ sender: "user", text: "hello" }} />
      <Message message={{ sender: "user", text: "hello" }} />
    </div>
  );
}

export default Conversation;
