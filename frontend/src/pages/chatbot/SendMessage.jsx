import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";

function SendMessage({ currentConversationId }) {
  const [value, setValue] = useState("");
  const [CurrentConversation, setCurrentConv] = useState(null);

  useEffect(() => {
    setCurrentConv(currentConversationId);
  }, [currentConversationId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!value.trim() || !currentConversationId) {
      alert("Enter a valid message or select a conversation!");
      return;
    }
  };

  return (
    <div className="flex justify-center items-center w-full p-4 pb-0 bottom-0 sticky">
      <form
        className="flex items-center w-full bg-white rounded-full shadow-lg gap-x-3"
      >
        <input
          type="text"
          placeholder="Chào cậu, Herlis..."
          className="grow bg-transparent outline-none placeholder-gray-500 rounded-full py-4 pl-6 text-lg"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center text-white bg-[#228E8E] rounded-full p-4 hover:bg-[#9bc0c0] focus:outline-none focus:ring focus:ring-[#9bc0c0]"
        >
          <IoSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
