import { IoSend } from "react-icons/io5";
import { useConversationContext } from "../../contexts/ConversationContext";
import { useState } from "react";

function SendMessage() {
  const [{ ableToSubmit }, dispatch] = useConversationContext();
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim() || !ableToSubmit) {
      return;
    }
    dispatch({ type: "ADD_USER_MESSAGE", payload: message });
    setMessage("");
  }
  return (
    <div className="flex justify-center items-center w-full px-4 pb-4 bottom-0 sticky">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full bg-white rounded-full shadow-lg gap-x-3"
      >
        <input
          type="text"
          placeholder="Chào cậu, Herlis..."
          className="grow bg-transparent outline-none placeholder-gray-500 rounded-full py-4 pl-6 text-lg"
          value={message}
          onChange={handleChange}
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
