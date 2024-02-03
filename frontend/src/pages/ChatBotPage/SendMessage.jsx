import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

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

    try {
      await addDoc(
        collection(db, `Conversations/${CurrentConversation}/Messages`),
        {
          text: value,
          name: "andy",
          time: serverTimestamp(),
          role: "user",
        }
      );
      setValue("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full p-4 bg-neutral-100">
      <form
        className="flex items-center justify-between w-full max-w-2xl bg-white rounded-full shadow-lg"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow bg-transparent focus:outline-none placeholder-gray-500 rounded-full py-4 px-6 text-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center text-white bg-[#228E8E] rounded-full p-4 ml-4 hover:bg-[#9bc0c0] focus:outline-none focus:ring focus:ring-[#9bc0c0]"
        >
          <IoSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
