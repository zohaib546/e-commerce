import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantityButton = (props) => {
	return (
		<div className="flex items-center justify-between border border-gray-600 w-36">
			<button className="px-4 py-2 border-r border-gray-600 hover:bg-black group">
				<FontAwesomeIcon className="text-sm text-gray-500 group-hover:text-white" icon={faPlus} />
			</button>
			<input
				type="text"
				className="self-stretch w-full text-lg font-semibold text-center text-gray-600 outline-none"
			/>
			<button className="px-4 py-2 border-l border-gray-600 hover:bg-black group">
				<FontAwesomeIcon className="text-sm text-gray-500 group-hover:text-white" icon={faMinus} />
			</button>
		</div>
	);
};

export default QuantityButton;
