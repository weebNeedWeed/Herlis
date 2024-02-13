import { IoTrash } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function ConversationHistories() {

  return (
    <div className="bg-white w-full h-full flex flex-col items-start p-4 pt-8 w-3/12 shadow-md sticky">
      <button
        className="flex gap-x-3 w-full items-center justify-center p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all"
      >
        <IoIosAddCircleOutline className="text-xl" />
        <span className="font-medium pt-1">Cuộc trò chuyện mới</span>
      </button>

      <h4 className="font-semibold mt-6">
        Gần đây
      </h4>

      <div className="overflow-y-auto w-full">

      </div>
    </div>
  );
}

export default ConversationHistories;

function History() {
  return <NavLink
    to="/xxx"
    className={({ isActive }) =>
      clsx(
        "flex items-center gap-x-4 w-full rounded-full h-10 pl-4 pr-1",
        "justify-between transition-all hover:bg-teal-100 group",
      )
    }
  >
    <span className="text-base mt-1">
      conversation.name
    </span>
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      aria-label="Delete conversation"
      className="hidden group-hover:block relative hover:bg-teal-200 p-2 rounded-full transition-all"
    >
      <IoTrash className="text-neutral-400" />
    </button>
  </NavLink>
}
