import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

const WishlistButton = (props) => {
	const [isClick, setIsClick] = useState(false);

	useEffect(() => {
		if (props.isActive) {
			setIsClick(true);
		}
	}, []);

	const handleWishlist = () => {
		setIsClick((isClick) => !isClick);
		props.onAddWishlist(!isClick);
	};

	const renderIcon = () => {
		return isClick ? faHeart : faHeartEmpty;
	};

	return (
		<button
			onClick={handleWishlist}
			className="flex items-center justify-center p-3 bg-gray-200 group"
		>
			<FontAwesomeIcon
				icon={renderIcon()}
				className="text-sm text-black group-hover:text-primary"
			/>
		</button>
	);
};

WishlistButton.propTypes = {
	isActive: PropTypes.bool,
	onAddWishlist: PropTypes.func,
};

export default WishlistButton;
