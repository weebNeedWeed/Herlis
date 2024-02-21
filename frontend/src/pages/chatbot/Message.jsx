import clsx from "clsx";
import { Converter } from "showdown";

const converter = new Converter();
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
      <div className={clsx("flex-col flex shadow-md relative",
        "px-4 py-2.5 min-w-32 max-w-[60%]",
        boxStyle)}>
        <span className="text-sm font-bold">
          {sender === "user" ? "Bạn" : "Herlis"}
        </span>

        {sender === "user" && <pre className="text-base mb-3 text-wrap font-sans">
          {content}
        </pre>}

        {sender === "model"
          && <div className="text-base mb-3 text-wrap font-sans" dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />}

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
