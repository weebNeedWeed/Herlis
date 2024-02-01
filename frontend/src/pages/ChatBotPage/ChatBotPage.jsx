import Conversation from "./Conversation";
import SendMessage from "./SendMessage";

function ChatBotPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <Conversation />
      </div>
      <div className="sticky bottom-0 pl-2 pr-4 pt-5">
        <SendMessage />
      </div>
    </div>
  );
}

export default ChatBotPage;
