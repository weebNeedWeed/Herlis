import GroupLabel from "./common/GroupLabel";
import Card from "./common/Card";
import { exercises } from "./../assets/home_data.json";

export default function Exercises() {
	return (
		<div className="w-full px-4 mt-4">
			<div className="flex w-full flex-col">
				<GroupLabel title="Các bài thực hành" />

				<div className="flex gap-4 overflow-x-scroll items-center mt-2 pb-2">
					{exercises.map((elm, i) => (
						<Card
							image={elm.image}
							title={elm.name}
							time={elm.time}
							owner={elm.owner}
							to={elm.to}
							key={i}
							className="w-36 h-44"
						/>
					))}
				</div>
			</div>
		</div>
	)
}