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
    <div className="flex">
      <div className="flex flex-col h-screen flex-grow">
        <div className="flex-grow">
          <Conversation currentConversationId={currentConversationId} />
        </div>
        <div className="sticky bottom-0 pl-2 pr-4 pt-5">
          <SendMessage currentConversationId={currentConversationId} />
        </div>
      </div>
      <div className="flex-shrink w-[min(14rem,20%)] ">
        <ChatSideMenu selectConversation={selectConversation} />
      </div>
    </div>
  );
}

export default ChatBotPage;
