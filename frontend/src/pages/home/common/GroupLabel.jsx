export default function GroupLabel({ title }) {
	return (
		<div className="flex justify-between items-end">
			<h3 className="text-3xl font-semibold">
				{title}
			</h3>

			<a className="text-teal-500 text-base cursor-pointer">
				Xem thêm
			</a>
		</div>
	)
}