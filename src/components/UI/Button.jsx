import { Link } from "react-router-dom";

const Button = (props) => {
	if (props.roundedWhite)
		return (
			<button className="px-4 py-2 text-xs font-light text-black uppercase transition-all bg-white shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary">
				{props.children}
			</button>
		);

	if (props.flatWhite && props.link && props.url)
		return (
			<Link
				to={props.url}
				className="absolute px-3 py-2 text-xs font-light uppercase transition-all transform -translate-x-1/2 bg-white shadow-lg sm:px-5 sm:text-base lg:px-10 lg:py-3 hover:bg-primary hover:text-white bottom-5 left-1/2"
			>
				{props.children}
			</Link>
		);

	if (props.flatWhite)
		return (
			<button className="absolute px-3 py-2 text-xs font-light uppercase transition-all transform -translate-x-1/2 bg-white shadow-lg sm:px-5 sm:text-base lg:px-10 lg:py-3 hover:bg-primary hover:text-white bottom-5 left-1/2">
				{props.children}
			</button>
		);

	if (props.roundedBlack)
		return (
			<button className="px-4 py-2 text-xs font-light text-white uppercase transition-all bg-black shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary">
				{props.children}
			</button>
		);

	return "no prop found for this element";
};

export default Button;
