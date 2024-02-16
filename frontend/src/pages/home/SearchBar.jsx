import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
	const [keyword, setKeyword] = useState("");
	return (
		<div className="w-full flex justify-end pt-4 px-4">
			<form className="flex items-center border-slate-300 border-2 
				px-4 py-2 rounded-lg gap-x-2 max-w-[350px] w-full
				has-[:focus]:border-teal-500 has-[:focus]:text-teal-600 transition-all">
				<input
					className="bg-transparent outline-none grow"
					placeholder="Nhập từ khoá..."
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
					type="text" />
				<button
					className=""
					type="button">
					<CiSearch />
				</button>
			</form>
		</div>
	)
}