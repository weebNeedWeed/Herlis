import BotchatBox from "./BotChatBox";
import { useEffect, useRef, useState } from "react";
import robotHead from "../assets/chatBot_head.svg";

import SendMessage from "./SendMessage";

function Conversation() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how  I help you?",
      role: "bot",
    },
    {
      id: 2,
      text: "I have a question about my ",
      role: "user",
    },
    {
      id: 3,
      text: "I have a question about my ",
      role: "user",
    },
    {
      id: 4,
      text: "I have a question about my ",
      role: "user",
    },
    {
      id: 5,
      text: "I have a question about my ",
      role: "user",
    },
    // Add more messages as needed
  ]);

  return (
    <div className="h-[44.5rem] chat-container flex flex-col overflow-y-auto mx-auto space-y-4 p-4 bg-white shadow-lg rounded-lg">
      <div>
        <div className="image-container flex items-center justify-center ">
          <img src={robotHead} alt="Chat Logo"></img>
        </div>
      </div>
      {messages.map((message) => (
        <BotchatBox key={message.id} messageRole={message.role}>
          {message.text}
        </BotchatBox>
      ))}
    </div>
  );
}

export default Conversation;
