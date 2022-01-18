import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantityButton = ({ value, onAddQuantity, onRemoveQuantity }) => {
	return (
		<div className="flex items-center justify-between border border-gray-300 w-36">
			<button
				onClick={onRemoveQuantity}
				className="px-4 py-2 border-r border-gray-300 hover:bg-black group"
			>
				<FontAwesomeIcon className="text-sm text-gray-500 group-hover:text-white" icon={faMinus} />
			</button>
			<input
				type="text"
				readOnly
				value={value}
				className="self-stretch w-full p-0 text-lg font-semibold text-center text-gray-600 border-0 outline-none select-none focus:ring-0"
			/>
			<button
				onClick={onAddQuantity}
				className="px-4 py-2 border-l border-gray-300 hover:bg-black group"
			>
				<FontAwesomeIcon className="text-sm text-gray-500 group-hover:text-white" icon={faPlus} />
			</button>
		</div>
	);
};

QuantityButton.propTypes = {
	value: PropTypes.number,
	onAddQuantity: PropTypes.func.isRequired,
	onRemoveQuantity: PropTypes.func.isRequired,
};

export default QuantityButton;
