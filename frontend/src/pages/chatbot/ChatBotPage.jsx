import Conversation from "./Conversation";
import SendMessage from "./SendMessage";
import ChatSideMenu from "./SideConversationMenu";
import { useState } from "react";

function ChatBotPage() {
  const [currentConversationId, setCurrentConversationId] = useState(null);

  const selectConversation = (id) => {
    setCurrentConversationId(id);
  };

  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col w-full h-full relative">
        <Conversation currentConversationId={currentConversationId} />
        <SendMessage currentConversationId={currentConversationId} />
      </div>
      {/* <div className="flex-shrink w-[min(20rem,40%)] bg-neutral-100">
        <ChatSideMenu selectConversation={selectConversation} />
      </div> */}
    </div>
  );
}

export default ChatBotPage;
