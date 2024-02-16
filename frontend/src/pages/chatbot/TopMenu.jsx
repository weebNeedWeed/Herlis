import { useConversationContext } from "../../contexts/ConversationContext";
import botHead from "./../assets/bothead.svg";
import { VscHistory } from "react-icons/vsc";

function TopMenu() {
	const [, dispatch] = useConversationContext();
	const handleClick = () => {
		dispatch({ type: "SET_OPEN_BOX_STATUS", payload: true });
	}
	return <nav className="shrink-0 w-full sticky flex items-center 
		justify-between bg-white px-4 shadow-md h-[55px] md:h-[64px]">
		<div className="flex items-center gap-x-2">
			<img src={botHead} className="w-8 md:w-10" />
			<span className="text-2xl md:text-3xl font-normal font-abel">Herlis</span>
		</div>

		<button
			onClick={handleClick}
			className="md:hidden text-xl text-slate-600 active:text-teal-500 transition-all">
			<VscHistory />
		</button>
	</nav>
}

export default TopMenu;