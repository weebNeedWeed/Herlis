import { useState } from "react";

function BotchatBox({ children, messageRole }) {
  const [currentRole, setRole] = useState(messageRole);

  const alignmentClass =
    currentRole == "user" ? "justify-end" : "justify-start";

  const boxStyle =
    currentRole == "user"
      ? { box: "bg-neutral-100 rounded-s-xl rounded-se-xl", text: "text-black" }
      : { box: "bg-teal-500 rounded-e-xl rounded-es-xl", text: "text-white" };

  return (
    <div className={`flex ${alignmentClass} p-4`}>
      <div
        className={`flex-col max-w-30 leading-1.5 p-4 border-gray-200  ${boxStyle.box}`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className={`chat-header ${boxStyle.text} pb-2`}>
            {currentRole}
          </div>
          <div className={`chat-header ${boxStyle.text} pb-2`}>11:46</div>
        </div>

        <div className={`text-sm font-normal py-2.5 ${boxStyle.text}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default BotchatBox;
