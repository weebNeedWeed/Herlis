import { useState } from "react";
import clsx from "clsx";

function Message({ message }) {
  const { sender, content, createdAt } = message;
  const alignmentClass =
    sender === "user" ? "justify-end" : "justify-start";

  const boxStyle =
    sender === "user"
      ? "bg-white rounded-s-xl rounded-ee-xl text-black"
      : "bg-teal-500 rounded-e-xl rounded-es-xl text-white"

  return (
    <div className={clsx("flex w-full", alignmentClass)}>
      <div className={clsx("flex-col flex max-w-80 min-w-28 px-4 py-2.5 shadow-md relative", boxStyle)}>
        <span className="text-sm font-bold">
          {sender === "user" ? "Bạn" : "Herlis"}
        </span>

        <span className="text-base mb-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti minus esse, fugiat corrupti exercitationem tempora temporibus ex, nostrum repellat nisi provident a odit sit fuga dolorem cum optio eum! Repellendus.
        </span>

        <span className="absolute bottom-2 right-2 text-xs">
          12:32
        </span>
      </div>
    </div>
  );
}

export default Message;
