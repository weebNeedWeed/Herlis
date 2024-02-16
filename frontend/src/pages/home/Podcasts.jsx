import GroupLabel from "./common/GroupLabel";
import Card from "./common/Card";
import { podcasts } from "./../assets/home_data.json";

export default function Podcasts() {
	return (
		<div className="w-full px-4 mt-4">
			<div className="flex w-full flex-col">
				<GroupLabel title="Podcast" />

				<div className="flex gap-4 overflow-x-scroll items-center mt-2 pb-2">
					{podcasts.map((elm, i) => (
						<Card
							image={elm.image}
							title={elm.name}
							time={elm.time}
							owner={elm.owner}
							to={elm.to}
							key={i}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

// function Podcast() {
// 	return (
// 		<Link className="relative w-48 h-56 bg-red-100 rounded-xl overflow-hidden shrink-0">
// 			<img
// 				src="https://as2.ftcdn.net/v2/jpg/06/59/75/03/1000_F_659750302_oh2PPCFWxITD8ZZvhwNfiht9ACGoOOw7.jpg"
// 				className="object-cover w-full h-full"
// 			/>
// 			<div className="absolute bottom-0 w-full h-2/5 bg-[rgba(15,23,42,0.2)] backdrop-blur-sm"
// 			>
// 				<div className="flex flex-col p-2.5 h-full">
// 					<h4 className="text-white">
// 						Khi bạn đổ bệnh, mọi ước mơ sẽ biến mất
// 					</h4>

// 					<span className="flex items-center text-white mt-auto text-sm gap-x-1">
// 						<MdAccessTimeFilled />
// 						<span className="mt-1">31 phút</span>
// 					</span>
// 				</div>
// 			</div>
// 			<div className="absolute top-2.5 left-2.5 py-1 px-2 rounded-md text-white flex items-center gap-x-1
// 							text-sm bg-[rgba(15,23,42,0.2)] backdrop-blur-sm">
// 				<FaUser className="text-xs" />
// 				<span>
// 					Nguyễn Hữu Trí
// 				</span>
// 			</div>
// 		</Link>
// 	);
// }