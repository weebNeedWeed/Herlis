function Button({ children, type }) {
	return <button
		type={type}
		className="w-full py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-[#228E8E]"
	>
		{children}
	</button>
}

export default Button;