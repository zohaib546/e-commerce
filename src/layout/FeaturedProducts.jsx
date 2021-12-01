import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import product1 from "../assets/images/product-1.webp";
import product2 from "../assets/images/product-2.webp";
import product3 from "../assets/images/product-3.webp";
import product4 from "../assets/images/product-4.webp";
import Button from "../components/UI/Button";
import Heading from "../components/UI/Heading";

const FeaturedProducts = (props) => {
	return (
		<section className="my-10 sm:my-28 featured-products">
			<div className="container mx-auto">
				<Heading primary>Featured Products</Heading>
				<div className="grid gap-6 sm:grid-cols-2 mx-7 lg:grid-cols-4 xl:mx-0 xl:gap-10">
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product1}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product2}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product3}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product4}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product1}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product2}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product3}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
					<div className="group">
						<figure className="relative mb-2 h-80 sm:h-auto">
							<img
								src={product4}
								className="object-cover w-full h-full transition-all filter brightness-100 group-hover:brightness-75"
								alt="product name"
							/>
							<div className="absolute inset-0 overflow-hidden">
								<div className="absolute transition-transform transform scale-0 top-5 right-5 group-hover:scale-105">
									<FontAwesomeIcon icon={faHeart} className="text-xl" />
									{/* <FontAwesomeIcon icon={faHeartEmpty} className="text-xl" /> */}
								</div>
								<div className="absolute invisible w-full text-center transition-all transform translate-y-full opacity-0 bottom-5 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
									<Button roundedBlack>Add to Cart</Button>
								</div>
							</div>
						</figure>
						<Link to="/product" className="block mb-1 text-lg font-semibold text-gray-600">
							Product Name
						</Link>
						<p className="block text-lg font-normal text-gray-600">$150.00</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
