import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faPinterest,
	faSnapchat,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./../components/UI/Button";
import Heading from "./../components/UI/Heading";

const Footer = () => {
	return (
		<footer className="py-20 bg-gray-100 footer">
			<div className="container mx-auto ">
				<div className="grid gap-8 mx-10 mb-8 lg:grid-cols-2 xl:grid-cols-3 xl:justify-items-stretch">
					<div>
						<Heading subheadingBlack>Newsletter</Heading>
						<p className="mb-2 font-normal">
							Any questions? Let us know in store at 8th floor, 379 ABC St, XYZ, NY 10018 or call us
							on (+1) 96 123 4567
						</p>
						<ul className="flex space-x-4">
							<li>
								<Link to="#">
									<FontAwesomeIcon
										icon={faFacebookF}
										className="text-lg transition-colors transform hover:text-primary"
									/>
								</Link>
							</li>
							<li>
								<Link to="#" className="text-sm">
									<FontAwesomeIcon
										icon={faInstagram}
										className="text-lg transition-colors transform hover:text-primary"
									/>
								</Link>
							</li>
							<li>
								<Link to="#" className="text-sm">
									<FontAwesomeIcon
										icon={faPinterest}
										className="text-lg transition-colors transform hover:text-primary"
									/>
								</Link>
							</li>
							<li>
								<Link to="#" className="text-sm">
									<FontAwesomeIcon
										icon={faSnapchat}
										className="text-lg transition-colors transform hover:text-primary"
									/>
								</Link>
							</li>
							<li>
								<Link to="#" className="text-sm">
									<FontAwesomeIcon
										icon={faYoutube}
										className="text-lg transition-colors transform hover:text-primary"
									/>
								</Link>
							</li>
						</ul>
					</div>

					<div className="grid gap-8 lg:grid-cols-2 justify-items-stretch">
						<div>
							<Heading subheadingBlack>Categories</Heading>
							<ul className="space-y-1">
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Men
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Women
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Dresses
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Sunglasses
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<Heading subheadingBlack>Links</Heading>
							<ul className="space-y-1">
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Search
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										About Us
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Contact Us
									</Link>
								</li>
								<li>
									<Link to="#" className="text-sm transition-colors transform hover:text-primary">
										Returns
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<Heading subheadingBlack>Newsletter</Heading>
						<form className="">
							<input
								type="text"
								placeholder="email@example.com"
								className="block w-full p-2 mb-6 bg-transparent border-0 border-b-2 border-gray-500 focus:outline-none focus:border-primary focus:ring-0"
							/>
							<Button roundedBlack>Subscribe</Button>
						</form>
					</div>
				</div>
			</div>
			<div className="text-center">
				<p className="">Copyright © {new Date().getFullYear()} Fashe. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
