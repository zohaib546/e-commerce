import PropTypes from "prop-types";

const Alert = ({ danger, warning, title, message }) => {
	const renderClasses = () => {
		if (danger) {
			return "p-4 mb-4 text-sm text-red-700 rounded-lg text-red-700 bg-red-100";
		}
		if (warning) {
			return "p-4 mb-4 text-sm text-red-700 rounded-lg text-yellow-700 bg-yellow-100";
		}
	};

	return (
		<div className={renderClasses()} role="alert">
			<span className="font-bold">{title}: </span>
			{message}
		</div>
	);
};

Alert.propTypes = {
	danger: PropTypes.bool.isRequired,
	warning: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default Alert;
