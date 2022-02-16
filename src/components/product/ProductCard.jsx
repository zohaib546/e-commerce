import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart } from "../../store/cartSlice";
import {
	addedToWishlist,
	removedFromWishlist,
	selectWishlistItem,
} from "../../store/wishlistSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import Button from "../UI/Button";

const ProductCard = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const isWishlistItem = useSelector((state) => selectWishlistItem(state, props.id));
	const dispatch = useDispatch();

	useEffect(() => {
		if (isWishlistItem) {
			setIsFavorite(true);
		}
	}, []);

	const handleFavorite = () => {
		const wishlistItem = {
			id: props.id,
			title: props.title,
			price: props.price,
			imageId: props.id,
		};

		setIsFavorite((prevState) => {
			if (!prevState) {
				dispatch(addedToWishlist({ wishlistItem }));
			} else {
				dispatch(removedFromWishlist({ id: props.id }));
			}
			return !prevState;
		});
	};

	const handleAddToCart = () => {
		const cartItem = {
			id: props.id,
			title: props.title,
			price: props.price,
			imageId: props.id,
			quantity: 1,
		};

		dispatch(addedToCart({ cartItem }));
	};

	return (
		<div className="group">
			<figure className="relative mb-2 h-80 sm:h-auto">
				<img
					src={props.figure}
					className="object-cover w-full transition-all h-96 filter brightness-100 group-hover:brightness-75"
					alt={props.title}
				/>
				<div className="absolute inset-0 overflow-hidden">
					<div
						className="absolute transition-transform transform scale-0 cursor-pointer top-5 right-5 group-hover:scale-105"
						onClick={handleFavorite}
					>
						{isFavorite && <FontAwesomeIcon icon={faHeart} className="text-xl text-white" />}
						{!isFavorite && <FontAwesomeIcon icon={faHeartEmpty} className="text-xl text-white" />}
					</div>
					<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
						<Button roundedBlack onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</div>
				</div>
			</figure>
			<Link
				to={props.path}
				className="block mb-1 text-lg font-semibold text-gray-600 line-clamp-1 hover:text-primary"
			>
				{props.title}
			</Link>
			<p className="block text-lg font-normal text-gray-600">${props.price}</p>
		</div>
	);
};

export default ProductCard;
