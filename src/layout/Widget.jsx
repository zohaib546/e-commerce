import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Widget = (props) => {
	return (
		<div className="flex flex-col p-5 bg-gray-100 shadow lg:flex-row">
			<div className="mb-5 lg:mb-0">
				<select className="py-2 text-gray-500 border-gray-300 focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50">
					<option disabled value="default">
						Default Sorting
					</option>
					<option value="low">Price: low to high</option>
					<option value="high">Price: high to low</option>
					<option value="name">Name: A to Z</option>
				</select>
				<select className="py-2 ml-5 text-gray-500 border-gray-300 focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50">
					<option value="6">Show 6</option>
					<option value="9">Show 9</option>
					<option value="12">Show 12</option>
				</select>
			</div>
			<div className="relative lg:ml-auto">
				<input
					type="text"
					placeholder="Search Products"
					className="w-full py-2 text-gray-500 border-gray-300 lg:w-auto focus:border-primary focus:border-opacity-70 focus:ring focus:ring-primary focus:ring-opacity-50"
				/>
				<FontAwesomeIcon
					icon={faSearch}
					className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2"
				/>
			</div>
		</div>
	);
};

export default Widget;
