import { Link } from "react-router-dom";

const Footer = (props) => {
	return (
		<ul className="flex space-x-4">
			<li>
				<Link
					to="/"
					className="flex items-center justify-center w-12 h-12 text-white bg-black rounded-full "
				>
					1
				</Link>
			</li>
			<li>
				<Link
					to="/"
					className="flex items-center justify-center w-12 h-12 transition-all border border-gray-300 rounded-full hover:bg-black hover:text-white"
				>
					2
				</Link>
			</li>
			<li>
				<Link
					to="/"
					className="flex items-center justify-center w-12 h-12 transition-all border border-gray-300 rounded-full hover:bg-black hover:text-white"
				>
					3
				</Link>
			</li>
		</ul>
	);
};

export default Footer;
