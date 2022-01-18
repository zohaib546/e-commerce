import PropTypes from "prop-types";

const Input = ({ type, placeholder }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="mt-0 text-sm block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
		/>
	);
};

Input.defaultProps = {
	type: "text",
	placeholder: "Please enter something...",
};

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
