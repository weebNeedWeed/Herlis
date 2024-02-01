import Conversation from "./Conversation";
import SendMessage from "./SendMessage";

function ChatBotPage() {
  return (
    <div className="flex flex-col">
      <div>
        <Conversation />
      </div>
      <div className="sticky bottom-0">
        <SendMessage />
      </div>
    </div>
  );
}

export default ChatBotPage;
