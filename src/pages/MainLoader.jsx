import Loader from "./../components/UI/Loader";

const MainLoader = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white">
			<Loader />
		</div>
	);
};

export default MainLoader;
