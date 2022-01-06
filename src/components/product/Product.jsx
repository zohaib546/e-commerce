import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchProductById } from "./../../store/productSlice";
import { addedToCart } from "../../store/cartSlice";
import {
	addedToWishlist,
	removedFromWishlist,
	selectWishlistItem,
} from "../../store/wishlistSlice";
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
import product5 from "../../assets/images/product-5.webp";
import product6 from "../../assets/images/product-6.webp";
import product7 from "../../assets/images/product-7.webp";
import product8 from "../../assets/images/product-8.webp";
import Loader from "../UI/Loader";
import Alert from "../UI/Alert";

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

const Product = (props) => {
	const { productId } = useParams();
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState({});
	const [error, setError] = useState();
	const [quantity, setQuantity] = useState(0);
	const isInWishlist = useSelector((state) => selectWishlistItem(state, Number(productId)));
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			setLoading(true);
			dispatch(fetchProductById(productId))
				.then((productData) => {
					setLoading(false);
					setProduct(productData);
				})
				.catch((errorMessage) => {
					setLoading(false);
					setError(errorMessage);
				});
		}
	}, [dispatch, productId]);

	const breadcrumbList = () => ({
		firstPage: {
			name: "Home",
			location: "/",
		},
		secondPage: {
			name: product.category ? product.category : "",
			location: product.category ? `/category/${product.category}` : "",
		},
		lastPage: {
			name: product.title ? product.title.slice(0, 11) : "",
		},
	});

	const handleAddToCart = () => {
		if (quantity > 0) {
			const cartItem = {
				id: product.id,
				title: product.title,
				price: product.price,
				imageId: product.id,
				quantity,
			};

			dispatch(addedToCart({ cartItem }));
		} else {
			toast.warn("Item quantity must be atleast 1", {
				position: toast.POSITION.TOP_RIGHT,
				className: "top-16",
				theme: "dark",
			});
		}
	};

	const handleToggleWishlist = (isAddedInWishlist) => {
		if (isAddedInWishlist) {
			const wishlistItem = {
				id: product.id,
				title: product.title,
				price: product.price,
				imageId: productId,
			};
			dispatch(addedToWishlist({ wishlistItem }));
		} else {
			dispatch(removedFromWishlist({ id: product.id }));
		}
	};

	const handleAddQuantity = () => {
		setQuantity((quantity) => (quantity += 1));
	};

	const handleRemoveQuantity = () => {
		setQuantity((quantity) => {
			if (quantity > 0) return (quantity -= 1);
			return quantity;
		});
	};

	if (loading)
		return (
			<div className="container mx-auto my-20">
				<Loader />
			</div>
		);

	if (!loading && error)
		return (
			<div className="max-w-2xl mx-auto pt-5">
				<Alert danger title="Error" message={error} />
			</div>
		);

	if (!loading && !error && product)
		return (
			<section className="py-10 single-product">
				<div className="mx-5 mb-5 lg:container lg:mx-auto">
					<BreadCrumb list={breadcrumbList()} />
				</div>
				<div className="max-w-4xl mx-auto ">
					<div className="grid items-center gap-8 mx-5 lg:mx-0 lg:grid-cols-2">
						<figure className="overflow-hidden rounded-lg shadow-lg">
							<img className="w-full" src={DUMMY_IMAGES[productId - 1]} alt={product.title} />
						</figure>
						<div className="px-5">
							<h1 className="mb-1 text-3xl font-bold">{product.title}</h1>
							<h1 className="mb-1 text-3xl font-bold text-primary">${product.price}</h1>
							<div className="divide-y divide-gray-200">
								<div className="pb-3">
									<dl className="space-y-1">
										<dd className="text-sm">
											<span className="inline-block w-24 mr-3 font-semibold">Category :</span>{" "}
											{product.category}
										</dd>
										<dd className="text-sm">
											<span className="inline-block w-24 mr-3 font-semibold">Availibility :</span>{" "}
											In Stock
										</dd>
									</dl>
								</div>
								<div className="flex items-center py-3 space-x-2 ">
									<WishlistButton isActive={isInWishlist} onAddWishlist={handleToggleWishlist} />
									<span className="text-sm">Add to wishlist</span>
								</div>
								<div className="py-3 space-y-1">
									<h3 className="font-bold">Description: </h3>
									<p className="max-w-md font-medium text-gray-500">{product.description}</p>
								</div>
								<div className="flex items-center justify-between py-3 space-x-2 ">
									<QuantityButton
										value={quantity}
										onAddQuantity={handleAddQuantity}
										onRemoveQuantity={handleRemoveQuantity}
									/>
									<Button roundedBlack onClick={handleAddToCart}>
										Add to Cart
									</Button>
								</div>
								<div className="pt-3">
									<ProductReview rating={product.rating || {}} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto">
					<FeaturedProducts />
				</div>
			</section>
		);

	return (
		<div className="max-w-2xl mx-auto pt-5">
			<Alert title="Not Found" message="This product is not exist anymore" warning />
		</div>
	);
};

export default React.memo(Product);
