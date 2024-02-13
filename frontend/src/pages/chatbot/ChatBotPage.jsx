import Conversation from "./Conversation";
import SendMessage from "./SendMessage";
import TopMenu from "./TopMenu";
import ConversationHistories from "./ConversationHistories";

function ChatBotPage() {
  return (
    <div className="h-full w-full flex">
      <div className="flex flex-col w-full h-full relative grow gap-y-2">
        <TopMenu />
        <Conversation />
        <SendMessage />
      </div>
      <ConversationHistories />
    </div>
  );
}

export default ChatBotPage;
