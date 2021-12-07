import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = (props) => {
	if (props.white)
		return (
			<ul className="flex items-center space-x-3">
				<li>
					<Link to="#" className="mr-2 text-xs text-white hover:text-primary">
						Home
					</Link>
					<FontAwesomeIcon className="text-white text-xxs" icon={faChevronRight} />
				</li>
				<li>
					<Link to="#" className="mr-2 text-xs text-white hover:text-primary">
						Cateogory
					</Link>
					<FontAwesomeIcon className="text-white text-xxs" icon={faChevronRight} />
				</li>
				<li className="text-xs text-white">product name</li>
			</ul>
		);

	return (
		<ul className="flex items-center space-x-3">
			<li>
				<Link to="#" className="mr-2 text-xs text-gray-500 hover:text-primary">
					Home
				</Link>
				<FontAwesomeIcon className="text-gray-500 text-xxs" icon={faChevronRight} />
			</li>
			<li>
				<Link to="#" className="mr-2 text-xs text-gray-500 hover:text-primary">
					Cateogory
				</Link>
				<FontAwesomeIcon className="text-gray-500 text-xxs" icon={faChevronRight} />
			</li>
			<li className="text-xs text-gray-500">product name</li>
		</ul>
	);
};

export default BreadCrumb;
