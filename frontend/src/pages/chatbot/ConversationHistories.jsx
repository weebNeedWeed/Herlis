import { IoTrash } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, NavLink, } from "react-router-dom";
import clsx from "clsx";
import useGetAllConversations from "./../../hooks/useGetAllConversations";
import { useState } from "react";
import { useConversationContext } from "../../contexts/ConversationContext";
import { IoMdClose } from "react-icons/io";

function ConversationHistories() {
  const [{ openHistoriesBox }, dispatch] = useConversationContext();
  const [cursor, setCursor] = useState(undefined);
  const { isSuccess, data: result } = useGetAllConversations(cursor, 5);

  const handleClose = () => {
    dispatch({ type: "SET_OPEN_BOX_STATUS", payload: false });
  }
  return (
    <div className={clsx("grow-0 bg-white h-full flex-col items-start p-4",
      "pt-12 md:pt-8 w-4/12 shadow-md md:sticky md:flex",
      openHistoriesBox ? "w-full fixed z-10 flex" : "hidden"
    )}>
      <button onClick={handleClose} className="fixed top-4 right-4 text-3xl text-slate-500 md:hidden">
        <IoMdClose />
      </button>

      <Link
        to="/chat"
        replace
        reloadDocument
        className="flex gap-x-3 w-full items-center justify-center p-2 rounded-full 
          bg-neutral-100 hover:bg-neutral-200 transition-all"
      >
        <IoIosAddCircleOutline className="text-xl" />
        <span className="font-medium pt-1">Cuộc trò chuyện mới</span>
      </Link>

      <h4 className="font-semibold mt-6">
        Gần đây
      </h4>

      <div className="overflow-y-auto w-full h-full flex flex-col">
        {isSuccess && result.data.data.map(elm => (
          <History key={elm.id} conversation={elm} />
        ))}
      </div>
    </div>
  );
}

export default ConversationHistories;

function History({ conversation: { title, id } }) {
  return <NavLink
    to={`/chat/${id}`}
    className={({ isActive }) =>
      clsx(
        "flex items-center w-full rounded-full h-10 pl-4 pr-1",
        "justify-between transition-all hover:bg-teal-100 group overflow-hidden max-w-full relative",
        isActive && "bg-teal-100"
      )
    }
  >
    <div className="text-base mt-1 line-clamp-1 w-full">
      {title}
    </div>
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      aria-label="Delete conversation"
      className="md:hidden absolute group-hover:inline-block relative hover:bg-teal-200 p-2 rounded-full transition-all"
    >
      <IoTrash className="text-neutral-400" />
    </button>
  </NavLink>
}
