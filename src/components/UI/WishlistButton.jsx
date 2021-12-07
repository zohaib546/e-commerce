import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

const WishlistButton = (props) => {
	return (
		<button className="flex items-center justify-center p-3 bg-gray-200 group">
			<FontAwesomeIcon
				icon={faHeartEmpty}
				className="text-sm text-black group-hover:text-primary"
			/>
			{/* <FontAwesomeIcon icon={faHeart} className="text-sm text-black group-hover:text-primary" /> */}
		</button>
	);
};

export default WishlistButton;
