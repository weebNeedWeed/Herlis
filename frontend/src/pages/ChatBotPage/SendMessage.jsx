import { useState } from "react";
import { IoSend } from "react-icons/io5";

function SendMessage() {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    console.log("Message sent:", message);

    setMessage("");
  };

  return (
    <div className=" left-0 bg-white">
      <form
        className="relative flex w-full min-h-[2em] mx-auto"
        onSubmit={handleSend}
      >
        <input
          type="text"
          placeholder="Write your message!"
          className="sticky flex-grow focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          value={message}
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-center pl-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-teal-500 hover:bg-teal-500 focus:outline-none"
            onClick={handleSend}
          >
            <div className="flex pt-1">
              <span className="font-bold text-xl">Send </span>
              <IoSend className="h-6 w-6 ml-2 transform " />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
