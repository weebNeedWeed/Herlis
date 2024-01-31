import Conversation from "./Conversation";
import SendMessage from "./SendMessage";

function ChatBotPage() {
  return (
    <div className="App flex ">
      <div className="w-full ">
        <Conversation></Conversation>
        <SendMessage></SendMessage>
      </div>
    </div>
  );
}

export default ChatBotPage;
