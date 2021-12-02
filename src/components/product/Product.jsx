import { useParams } from "react-router-dom";
import product from "../../assets/images/product-1.webp";
import Button from "./../UI/Button";

const Product = (props) => {
	const params = useParams();
	return (
		<section className="py-10 single-product">
			<div>
				<ul>
					<li>Home</li>
					<li>Category</li>
					<li>Product</li>
				</ul>
			</div>
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-8">
					<figure>
						<img src={product} alt="product name" />
					</figure>
					<div>
						<h1>Product Title</h1>
						<h1>Product PriceName</h1>
						<div>
							<p>Category: Category Name</p>
							<p>Availibility: In Stock</p>
						</div>
						<div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur esse rem totam
								alias, delectus quia minus voluptas maxime sit eaque. Asperiores dolores obcaecati,
								inventore iusto debitis beatae at expedita vitae.
							</p>
						</div>
						<div>
							<span>Quantity</span>
							<input type="number" min="0" />

							<Button roundedBlack>Add to Cart</Button>
						</div>
						<div>
							<button>Add to wishlist</button>
						</div>
						<div>
							<p>Reviews</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
