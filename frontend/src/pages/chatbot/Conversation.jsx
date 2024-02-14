import { useEffect, useRef } from "react";
import { useConversationContext } from "../../contexts/ConversationContext";
import Message from "./Message";

function Conversation() {
  const [{ messages },] = useConversationContext();
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col grow gap-y-3 overflow-y-auto px-4">
      <Message message={{
        sender: "model",
        content: "Xin chào, hôm nay cậu thế nào ?",
        createdAt: Date.now()
      }} />
      {messages.map((m, i) => (
        <Message key={m.id ?? i} message={m} />
      ))}
      <div ref={divRef}></div>
    </div>
  );
}

export default Conversation;
