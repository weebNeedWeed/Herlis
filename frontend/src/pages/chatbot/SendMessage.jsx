import { IoSend } from "react-icons/io5";
import { useConversationContext } from "../../contexts/ConversationContext";
import { useState } from "react";
import clsx from "clsx";

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
        className="flex items-center w-full bg-white rounded-full shadow-lg gap-x-3 md:h-16 h-12"
      >
        <textarea
          rows="1"
          placeholder="Chào cậu, Herlis..."
          className="font-sans grow h-full bg-transparent outline-none placeholder-gray-500 rounded-full resize-none py-3 pl-5 text-md md:py-4 md:pl-6 md:text-lg"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className={clsx("flex items-center justify-center text-white bg-[#228E8E] rounded-full hover:bg-[#9bc0c0] focus:outline-none focus:ring focus:ring-[#9bc0c0]",
            "p-3 md:p-4 md:text-2xl text-xl")}
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
