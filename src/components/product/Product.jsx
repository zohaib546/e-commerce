import { useParams } from "react-router-dom";
import product from "../../assets/images/product-1.webp";
import Button from "./../UI/Button";
import QuantityButton from "./../UI/QuantityButton";
import WishlistButton from "./../UI/WishlistButton";
import BreadCrumb from "../UI/BreadCrumb";
import ProductReview from "./../productReview/ProductReview";
import FeaturedProducts from "./../../layout/FeaturedProducts";
import product1 from "../../assets/images/product-1.webp";
import product2 from "../../assets/images/product-2.webp";
import product3 from "../../assets/images/product-3.webp";
import product4 from "../../assets/images/product-4.webp";

const DUMMY_PRODUCTS = [
	{
		id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		price: 109.95,
		description:
			"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: {
			rate: 3.9,
			count: 120,
		},
	},
	{
		id: 2,
		title: "Mens Casual Premium Slim Fit T-Shirts ",
		price: 22.3,
		description:
			"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
		rating: {
			rate: 4.1,
			count: 259,
		},
	},
	{
		id: 3,
		title: "Mens Cotton Jacket",
		price: 55.99,
		description:
			"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
		rating: {
			rate: 4.7,
			count: 500,
		},
	},
	{
		id: 4,
		title: "Mens Casual Slim Fit",
		price: 15.99,
		description:
			"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
		rating: {
			rate: 2.1,
			count: 430,
		},
	},
];

const DUMMY_IMAGES = [product1, product2, product3, product4];

const Product = (props) => {
	const params = useParams();
	return (
		<section className="py-10 single-product">
			<div className="mx-5 mb-5 lg:container lg:mx-auto">
				<BreadCrumb />
			</div>
			<div className="max-w-4xl mx-auto ">
				<div className="grid items-center gap-8 mx-5 lg:mx-0 lg:grid-cols-2">
					<figure className="overflow-hidden rounded-lg shadow-lg">
						<img className="w-full" src={product} alt="product name" />
					</figure>
					<div className="px-5">
						<h1 className="mb-1 text-3xl font-bold">Product Title {params.productId}</h1>
						<h1 className="mb-1 text-3xl font-bold text-primary">$100</h1>
						<div className="divide-y divide-gray-200">
							<div className="pb-3">
								<dl className="space-y-1">
									<dd className="text-sm">
										<span className="inline-block w-24 mr-3 font-semibold">Category :</span>{" "}
										Category Name
									</dd>
									<dd className="text-sm">
										<span className="inline-block w-24 mr-3 font-semibold">Availibility :</span> In
										Stock
									</dd>
								</dl>
							</div>
							<div className="flex items-center py-3 space-x-2 ">
								<WishlistButton />
								<span className="text-sm">Add to wishlist</span>
							</div>
							<div className="py-3 space-y-1">
								<h3 className="font-bold">Description: </h3>
								<p className="max-w-md font-medium text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur esse rem
									totam alias, delectus quia minus voluptas maxime sit eaque. Asperiores dolores
									obcaecati, inventore iusto debitis beatae at expedita vitae.
								</p>
							</div>
							<div className="flex items-center justify-between py-3 space-x-2 ">
								<QuantityButton />
								<Button roundedBlack>Add to Cart</Button>
							</div>
							<div className="pt-3">
								<ProductReview />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<FeaturedProducts images={DUMMY_IMAGES} products={DUMMY_PRODUCTS} />
			</div>
		</section>
	);
};

export default Product;
