import Button from "./../components/UI/Button";
import category1 from "../assets/images/category-1.webp";
import category2 from "../assets/images/category-2.webp";
import category3 from "../assets/images/category-3.webp";
import category4 from "../assets/images/category-4.webp";

const Categories = () => {
	return (
		<section className="my-10 sm:my-28 category">
			<div className="container mx-auto">
				<div className="grid gap-6 mx-7 sm:grid-cols-2 xl:mx-0 xl:grid-cols-4 xl:gap-10">
					<div className="relative overflow-hidden cursor-pointer h-72 lg:h-96 group">
						<img
							className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
							src={category1}
							alt=""
						/>
						<Button url="/category" flatWhite link>
							Category
						</Button>
					</div>
					<div className="relative overflow-hidden cursor-pointer h-72 lg:h-96 group">
						<img
							className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
							src={category2}
							alt=""
						/>
						<Button url="/category" flatWhite link>
							Category
						</Button>
					</div>
					<div className="relative overflow-hidden cursor-pointer h-72 lg:h-96 group">
						<img
							className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
							src={category3}
							alt=""
						/>
						<Button url="/category" flatWhite link>
							Category
						</Button>
					</div>
					<div className="relative overflow-hidden cursor-pointer h-72 lg:h-96 group">
						<img
							className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
							src={category4}
							alt=""
						/>
						<Button url="/category" flatWhite link>
							Category
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
