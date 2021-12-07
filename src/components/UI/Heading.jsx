const Heading = (props) => {
	if (props.primary)
		return (
			<h1 className="mb-5 text-2xl font-semibold tracking-wide text-center uppercase sm:mb-10 sm:text-5xl">
				{props.children}
			</h1>
		);
	if (props.white)
		return (
			<h1 className="mb-5 text-white text-2xl font-semibold tracking-wide text-center uppercase sm:mb-10 sm:text-5xl">
				{props.children}
			</h1>
		);
	return "no props passed";
};

export default Heading;
