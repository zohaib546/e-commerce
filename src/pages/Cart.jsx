import Banner from "../components/UI/Banner";
import product1 from "../assets/images/product-1.webp";
import product2 from "../assets/images/product-2.webp";
import QuantityButton from "./../components/UI/QuantityButton";
import Button from "./../components/UI/Button";

const Cart = (props) => {
	return (
		<section className="cart">
			<Banner background="bg-cart">Cart</Banner>
			<div className="container py-20 mx-auto overflow-auto">
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
						<tr className="border-b border-gray-300">
							<td className="p-4 w-52">
								<div>
									<figure className="">
										<img className="w-24" src={product2} alt="product" />
									</figure>
								</div>
							</td>
							<td className="p-4 text-gray-500 w-80">Lorem ipsum dolor sit amet consectetur.</td>
							<td className="w-32 p-4 text-gray-500">$3.00</td>
							<td className="p-4 w-80">
								<QuantityButton />
							</td>
							<td className="p-4 text-gray-500">$100</td>
						</tr>
						<tr className="border-b border-gray-300">
							<td className="p-4 w-52">
								<div>
									<figure className="">
										<img className="w-24" src={product1} alt="product" />
									</figure>
								</div>
							</td>
							<td className="p-4 text-gray-500 w-80">product name</td>
							<td className="w-32 p-4 text-gray-500">$3.00</td>
							<td className="p-4 w-80">
								<QuantityButton />
							</td>
							<td className="p-4 text-gray-500">$100</td>
						</tr>
						<tr className="border-b border-gray-300">
							<td className="p-5 w-52"></td>
							<td className="p-5 w-80"></td>
							<td className="w-32 p-5 "></td>
							<td className="p-5 font-bold text-center text-gray-500 w-80">Total:</td>
							<td className="p-5 font-bold text-gray-500"> $100</td>
						</tr>
					</tbody>
				</table>
				<div className="flex justify-center py-4 space-x-3">
					<Button roundedPrimary>Continue shopping</Button>
					<Button roundedBlack>Proceed to checkout</Button>
				</div>
			</div>
		</section>
	);
};

export default Cart;
