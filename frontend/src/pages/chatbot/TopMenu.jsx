import botHead from "./../assets/bothead.svg";

function TopMenu() {
	return <nav className="shrink-0 h-[64px] w-full sticky flex items-center justify-between bg-white px-4 shadow-md">
		<div className="flex items-center gap-x-2">
			<img src={botHead} className="w-10" />
			<span className="text-3xl font-normal font-abel">Herlis</span>
		</div>
	</nav>
}

export default TopMenu;