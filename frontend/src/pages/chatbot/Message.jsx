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

        <span className="text-base mb-3">
          {content}
        </span>

        <span className="absolute bottom-2 right-2 text-xs">
          {new Date(createdAt).toLocaleTimeString(
            [], { hour: "2-digit", minute: "2-digit" }
          )}
        </span>
      </div>
    </div>
  );
}

export default Message;
