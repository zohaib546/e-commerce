import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addedToCart } from "../../store/cartSlice";
import { itemImages } from "../../utils/imageData";
import { fetchSingleAndFeatureProducts } from "../../store/middleware/api";
import { singleProductRemoved } from "../../store/productSlice";
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
import Alert from "../UI/Alert";
import MainLoader from "./../../pages/MainLoader";

const Product = (props) => {
	const { productId } = useParams();
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.singleItem.item);
	const products = useSelector((state) => state.products.items);
	const isLoading = useSelector((state) => state.loading.isLoading);
	const productError = useSelector((state) => state.products.singleItem.error);
	const productsError = useSelector((state) => state.products.error);
	const isInWishlist = useSelector((state) => selectWishlistItem(state, Number(productId)));

	useEffect(() => {
		if (productId) {
			dispatch(fetchSingleAndFeatureProducts(productId));
		}

		return () => {
			dispatch(singleProductRemoved());
		};
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

	if (isLoading) return <MainLoader />;

	if (!isLoading && !productError && Object.keys(product).length) {
		return (
			<section className="py-10 single-product">
				<div className="mx-5 mb-5 lg:container lg:mx-auto">
					<BreadCrumb list={breadcrumbList()} />
				</div>
				<div className="max-w-4xl mx-auto ">
					<div className="grid items-center gap-8 mx-5 lg:mx-0 lg:grid-cols-2">
						<figure className="overflow-hidden rounded-lg shadow-lg">
							<img className="w-full" src={itemImages[product.id]} alt={product.title} />
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
				{!isLoading && !productsError && products.length > 0 && (
					<div className="container mx-auto">
						<FeaturedProducts products={products} />
					</div>
				)}
			</section>
		);
	}
	return (
		!isLoading &&
		productError && (
			<div className="max-w-2xl pt-5 mx-auto">
				<Alert title={`Product: ${productId}`} message={productError} warning />
			</div>
		)
	);
};

export default React.memo(Product);
