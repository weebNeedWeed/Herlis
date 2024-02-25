import { useEffect, useRef } from "react";
import { useConversationContext } from "../../contexts/ConversationContext";
import Message from "./Message";
import { ThreeDots } from "react-loader-spinner";
import clsx from "clsx";

function Conversation() {
  const [{ messages, ableToSubmit },] = useConversationContext();
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex relative flex-col grow overflow-y-auto px-4">
      <Message message={{
        sender: "model",
        content: "Xin chào, hôm nay cậu thế nào ?",
        createdAt: Date.now()
      }} />

      {messages.map((m, i) => (
        <Message key={m.id ?? i} message={m} />
      ))}

      <div className={clsx("mt-auto sticky flex bottom-[-10px] left-2 items-end gap-x-1 transition-all",
        !ableToSubmit ? "opacity-100" : "opacity-0")}>
        Herlis đang nhập
        <ThreeDots
          width="20"
          color="#363636"
          height="20" />
      </div>
      <div ref={divRef}></div>
    </div>
  );
}

export default Conversation;
