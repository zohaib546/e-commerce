import { useSelector, useDispatch } from "react-redux";
import {
	countTotalFromCart,
	incrementItemQuantity,
	decrementItemQuantity,
} from "../store/cartSlice";
import Banner from "../components/UI/Banner";
import QuantityButton from "./../components/UI/QuantityButton";
import Button from "./../components/UI/Button";
import product1 from "../assets/images/product-1.webp";
import product2 from "../assets/images/product-2.webp";
import product3 from "../assets/images/product-3.webp";
import product4 from "../assets/images/product-4.webp";
import product5 from "../assets/images/product-5.webp";
import product6 from "../assets/images/product-6.webp";
import product7 from "../assets/images/product-7.webp";
import product8 from "../assets/images/product-8.webp";
import { Link } from "react-router-dom";

const DUMMY_IMAGES = [
	product1,
	product2,
	product3,
	product4,
	product5,
	product6,
	product7,
	product8,
];

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	const cartTotal = useSelector(countTotalFromCart);
	const dispatch = useDispatch();

	const handleAddQuantity = (itemId) => {
		dispatch(incrementItemQuantity({ itemId }));
	};

	const handleRemoveQuantity = (itemId) => {
		dispatch(decrementItemQuantity({ itemId }));
	};

	const breadcrumbList = () => ({
		firstPage: {
			name: "Home",
			location: "/",
		},
		lastPage: {
			name: "Cart",
		},
	});

	let cartContent;

	if (cartItems.length > 0) {
		cartContent = (
			<div>
				<table className="mx-auto min-w-992">
					<tbody>
						<tr className="border-b border-gray-300">
							<th className="p-4 text-left"></th>
							<th className="p-4 text-left">
								<h2>Product</h2>
							</th>
							<th className="p-4 text-left">
								<h2>Price</h2>
							</th>
							<th className="p-4 text-left">
								<h2>Quantity</h2>
							</th>
							<th className="p-4 text-left">
								<h2>Total</h2>
							</th>
						</tr>
						{cartItems.map((item) => (
							<tr key={item.id} className="border-b border-gray-300">
								<td className="p-4 w-52">
									<div>
										<figure className="">
											<img className="w-24" src={DUMMY_IMAGES[item.imageId - 1]} alt="product" />
										</figure>
									</div>
								</td>
								<td className="p-4 text-gray-500 w-80">
									<Link to={`/product/${item.id}`}>{item.title}</Link>
								</td>
								<td className="w-32 p-4 text-gray-500">${item.price}</td>
								<td className="p-4 w-80">
									<QuantityButton
										value={item.quantity}
										onAddQuantity={() => handleAddQuantity(item.id)}
										onRemoveQuantity={() => handleRemoveQuantity(item.id)}
									/>
								</td>
								<td className="p-4 text-gray-500">${item.quantity * item.price}</td>
							</tr>
						))}
						<tr className="border-b border-gray-300">
							<td className="p-5 w-52"></td>
							<td className="p-5 w-80"></td>
							<td className="w-32 p-5 "></td>
							<td className="p-5 font-bold text-center text-gray-500 w-80">Total:</td>
							<td className="p-5 font-bold text-gray-500"> ${cartTotal}</td>
						</tr>
					</tbody>
				</table>
				<div className="flex justify-center py-4 space-x-3">
					<Button roundedPrimary>Continue shopping</Button>
					<Button roundedBlack>Proceed to checkout</Button>
				</div>
			</div>
		);
	} else {
		cartContent = <p className="text-center">There are no items in cart.</p>;
	}

	return (
		<section className="cart">
			<Banner background="bg-cart" list={breadcrumbList()}>
				Cart
			</Banner>
			<div className="container py-20 mx-auto overflow-auto">{cartContent}</div>
		</section>
	);
};

export default Cart;
