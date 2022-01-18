import PropTypes from "prop-types";

const Heading = ({ primary, white, subheadingBlack, subheadingWhite, className, children }) => {
	if (primary)
		return (
			<h1 className="mb-5 text-2xl font-semibold tracking-wide text-center uppercase sm:mb-10 sm:text-5xl">
				{children}
			</h1>
		);

	if (white)
		return (
			<h1 className="mb-5 text-2xl font-semibold tracking-wide text-center text-white uppercase sm:mb-10 sm:text-5xl">
				{children}
			</h1>
		);
	if (subheadingBlack)
		return <h1 className={`mb-5 text-xl font-bold uppercase ${className}`}>{children}</h1>;

	if (subheadingWhite)
		return <h1 className={`mb-5 text-xl font-bold uppercase ${className}`}>{children}</h1>;
};

Heading.propTypes = {
	primary: PropTypes.bool,
	white: PropTypes.bool,
	subheadingBlack: PropTypes.bool,
	subheadingWhite: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Heading;
