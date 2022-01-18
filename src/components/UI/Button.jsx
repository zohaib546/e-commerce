import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
	const {
		roundedBlack,
		roundedWhite,
		roundedPrimary,
		outlinedBlack,
		outlinedWhite,
		flatWhite,
		onClick,
	} = props;

	const { link, children, url } = props;

	if (roundedWhite)
		return (
			<button
				onClick={onClick}
				className="px-4 py-2 text-xs font-light text-black uppercase transition-all bg-white shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary"
			>
				{children}
			</button>
		);

	if (flatWhite && link && url)
		return (
			<Link
				to={url}
				onClick={onClick}
				className="absolute px-3 py-2 text-xs font-light uppercase transition-all transform -translate-x-1/2 bg-white shadow-lg sm:px-5 sm:text-base lg:px-10 lg:py-3 hover:bg-primary hover:text-white bottom-5 left-1/2"
			>
				{children}
			</Link>
		);

	if (flatWhite)
		return (
			<button
				onClick={onClick}
				className="absolute px-3 py-2 text-xs font-light uppercase transition-all transform -translate-x-1/2 bg-white shadow-lg sm:px-5 sm:text-base lg:px-10 lg:py-3 hover:bg-primary hover:text-white bottom-5 left-1/2"
			>
				{children}
			</button>
		);

	if (roundedBlack)
		return (
			<button
				className="px-4 py-2 text-xs font-light text-white uppercase transition-all bg-black shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary"
				onClick={onClick}
			>
				{children}
			</button>
		);

	if (roundedPrimary)
		return (
			<button
				onClick={onClick}
				className="px-4 py-2 text-xs font-light text-white uppercase transition-all shadow-xl bg-primary sm:text-base sm:py-3 sm:px-9 rounded-3xl "
			>
				{children}
			</button>
		);

	if (outlinedWhite) {
		return (
			<button
				onClick={onClick}
				className="px-4 py-2 text-xs font-light text-white uppercase transition-all bg-black border border-black shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:bg-primary hover:border-white"
			>
				{children}
			</button>
		);
	}

	if (outlinedBlack) {
		return (
			<button
				onClick={onClick}
				className="px-4 py-2 text-xs font-light text-white uppercase transition-all bg-black border border-black shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:bg-white hover:border-black hover:text-black"
			>
				{children}
			</button>
		);
	}
};

Button.propTypes = {
	link: PropTypes.bool,
	url: PropTypes.string,
	roundedBlack: PropTypes.bool,
	roundedWhite: PropTypes.bool,
	roundedPrimary: PropTypes.bool,
	outlinedBlack: PropTypes.bool,
	outlinedWhite: PropTypes.bool,
	flatWhite: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default Button;
