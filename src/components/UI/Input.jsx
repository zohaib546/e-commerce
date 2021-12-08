const Input = (props) => {
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			className="mt-0 text-sm block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
		/>
	);
};

export default Input;
