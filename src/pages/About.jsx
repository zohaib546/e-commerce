import Banner from "../components/UI/Banner";
import aboutFigure from "../assets/images/about.jpg";

const About = (props) => {
	return (
		<section className=" about">
			<Banner background="bg-banner2">About</Banner>
			<div className="max-w-5xl py-20 mx-auto">
				<div className="grid mx-8 lg:mx-0 lg:grid-cols-container-layout gap-9">
					<figure>
						<img src={aboutFigure} alt="a girl is standing" />
					</figure>
					<div className="space-y-2">
						<h1 className="text-2xl ">Our Story</h1>
						<p className="leading-6 text-gray-500">
							Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra
							ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie
							urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna
							ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet.
							Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in
							vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat.
							Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
							magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
							Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim
							ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
						</p>
						<blockquote className="pl-8 text-gray-500 border-l-2 border-gray-300">
							<p className="mb-3 leading-6">
								Creativity is just connecting things. When you ask creative people how they did
								something, they feel a little guilty because they didn't really do it, they just saw
								something. It seemed obvious to them after a while.
							</p>
							<span className="text-xs">- Steve Job’s</span>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
