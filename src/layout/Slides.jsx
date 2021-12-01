import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover1 from "../assets/images/cover-1.webp";
import cover2 from "../assets/images/cover-2.webp";
import cover3 from "../assets/images/cover-3.webp";

const Slides = () => {
	var settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnDotsHover: true,
		pauseOnHover: true,
	};
	return (
		<section className="mb-8 hero">
			<Slider {...settings}>
				<div className="relative">
					<img className="object-cover w-full h-72 sm:h-auto" src={cover1} alt="women with jeans" />
					<div className="absolute text-center text-white transform -translate-x-1/2 bottom-5 sm:bottom-14 left-1/2">
						<h3 className="hidden text-3xl md:block">New collection {new Date().getFullYear()}</h3>
						<h1 className="hidden mb-5 text-3xl font-bold uppercase md:block md:text-5xl lg:text-8xl">
							New Arrivals
						</h1>
						<button className="px-4 py-2 text-xs font-light text-black uppercase transition-all bg-white shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary">
							Shop Now
						</button>
					</div>
				</div>
				<div className="relative">
					<img
						className="object-cover w-full h-72 sm:h-auto"
						src={cover2}
						alt="person holding a bag"
					/>
					<div className="absolute text-center text-white transform -translate-x-1/2 bottom-14 left-1/2">
						<h3 className="hidden text-3xl md:block">New collection {new Date().getFullYear()}</h3>
						<h1 className="hidden mb-5 font-bold uppercase md:block md:text-8xl">New Arrivals</h1>
						<button className="px-4 py-2 text-xs font-light text-black uppercase transition-all bg-white shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary">
							Shop Now
						</button>
					</div>
				</div>
				<div className="relative">
					<img
						className="object-cover w-full h-72 sm:h-auto"
						src={cover3}
						alt="women with glasses"
					/>
					<div className="absolute text-center text-white transform -translate-x-1/2 bottom-14 left-1/2">
						<h3 className="hidden text-3xl md:block">New collection {new Date().getFullYear()}</h3>
						<h1 className="hidden mb-5 font-bold uppercase md:block md:text-8xl">New Arrivals</h1>
						<button className="px-4 py-2 text-xs font-light text-black uppercase transition-all bg-white shadow-xl sm:text-base sm:py-3 sm:px-9 rounded-3xl hover:text-white hover:bg-primary">
							Shop Now
						</button>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default Slides;
