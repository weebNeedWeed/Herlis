import { useState } from "react";

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
      <div className="relative flex w-full min-h-[2em] mx-auto ">
        <input
          type="text"
          placeholder="Write your message!"
          className="sticky flex-grow focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
          value={message}
          onChange={handleInputChange}
        ></input>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-teal-500 hover:bg-blue-400 focus:outline-none"
            onClick={handleSend}
          >
            <span className="font-bold">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
