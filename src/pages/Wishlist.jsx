import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removedFromWishlist } from "../store/wishlistSlice";
import { addedToCart } from "../store/cartSlice";
import Banner from "../components/UI/Banner";
import Button from "./../components/UI/Button";
import { itemImages } from "../utils/imageData";

const breadcrumbList = () => ({
	firstPage: {
		name: "Home",
		location: "/",
	},
	lastPage: {
		name: "Wishlist",
	},
});

const Wishlist = (props) => {
	let wishlistContent;
	const wishlistItems = useSelector((state) => state.wishlist.items);
	const dispatch = useDispatch();

	const handleRemoveFromWishlist = (itemId) => {
		dispatch(removedFromWishlist({ id: itemId }));
	};

	const handleAddToCart = (item) => {
		const cartItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			imageId: item.id,
			quantity: 1,
		};

		dispatch(addedToCart({ cartItem }));
	};

	if (wishlistItems.length > 0) {
		wishlistContent = (
			<div>
				<table className="mx-auto min-w-992">
					<tbody>
						<tr className="border-b border-gray-300">
							<th className="p-4 text-left"></th>
							<th className="p-4 text-left"></th>
							<th className="p-4 text-left">
								<h2>Product</h2>
							</th>
							<th className="p-4 text-left">
								<h2>Price</h2>
							</th>
							<th className="p-4 text-left">
								<h2>Status</h2>
							</th>
							<th className="p-4 text-left"></th>
						</tr>
						{wishlistItems.map((item, index) => (
							<tr key={item.id} className="border-b border-gray-300">
								<td className="p-4 w-10">
									<button onClick={() => handleRemoveFromWishlist(item.id)}>
										<FontAwesomeIcon
											icon={faTimes}
											className="text-lg text-gray-600 hover:text-black"
										/>
									</button>
								</td>
								<td className="p-4 w-52">
									<div>
										<figure className="">
											<img className="w-24" src={itemImages[index].image} alt={item.title} />
										</figure>
									</div>
								</td>
								<td className="p-4 text-gray-500 w-80">
									<Link to={`/product/${item.id}`}>{item.title}</Link>
								</td>
								<td className="w-32 p-4 text-gray-500">${item.price}</td>
								<td className="p-4 w-40">
									<span className="text-green-600 font-bold">In-Stock</span>
								</td>
								<td className="p-4 text-gray-500">
									<Button roundedPrimary onClick={() => handleAddToCart(item)}>
										Add to cart
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	} else {
		wishlistContent = <p className="text-center">There are no items in wishlist.</p>;
	}

	return (
		<section className="cart">
			<Banner background="bg-cart" list={breadcrumbList()}>
				Wishlist
			</Banner>
			<div className="container py-20 mx-auto overflow-auto">{wishlistContent}</div>
		</section>
	);
};

export default Wishlist;
