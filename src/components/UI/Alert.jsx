const Alert = (props) => {
	const renderClasses = () => {
		if (props.danger) {
			return "p-4 mb-4 text-sm text-red-700 rounded-lg text-red-700 bg-red-100";
		}
		if (props.warning) {
			return "p-4 mb-4 text-sm text-red-700 rounded-lg text-yellow-700 bg-yellow-100";
		}
	};

	return (
		<div class={renderClasses()} role="alert">
			<span class="font-bold">{props.title}: </span>
			{props.message}
		</div>
	);
};

export default Alert;
