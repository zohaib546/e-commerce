import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = (props) => {
	const list = props.list;

	let listClasses = `mr-2 text-xs ${
		props.white ? "text-white" : "text-gray-500"
	} hover:text-primary`;
	let lastListClasses = `text-xs ${props.white ? "text-white" : "text-gray-500"}`;
	let sepratorClasses = `text-xxs ${props.white ? "text-white" : "text-gray-500"}`;

	const content = Object.keys(list).map((li, ind, arr) => {
		if (ind !== arr.length - 1) {
			return (
				<li key={ind}>
					<Link to={list[li].location} className={listClasses}>
						{list[li].name}
					</Link>
					<FontAwesomeIcon className={sepratorClasses} icon={faChevronRight} />
				</li>
			);
		}
		return (
			<li key={ind} className={lastListClasses}>
				{list[li].name}
			</li>
		);
	});

	return <ul className="flex items-center space-x-3">{content}</ul>;
};

export default BreadCrumb;
