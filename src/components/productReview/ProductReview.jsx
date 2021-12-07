import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReview = (props) => {
	return (
		<div className="flex space-x-5">
			<div className="px-10 py-5 text-center bg-gray-100 rounded-md shadow-md">
				<h3 className="font-bold">Overall</h3>
				<h2 className="mb-1 text-5xl font-bold text-primary">5.0</h2>
				<p className="text-sm">( 03 Reviews )</p>
			</div>
			<div className="">
				<h3 className="font-bold ">Based on (#) Reviews</h3>
				<dl>
					<dd>
						<span className="inline-block mr-2 text-sm w-14">5 Star</span>
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
					</dd>
					<dd>
						<span className="inline-block mr-2 text-sm w-14">4 Star</span>
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
					</dd>
					<dd>
						<span className="inline-block mr-2 text-sm w-14">3 Star</span>
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
					</dd>
					<dd>
						<span className="inline-block mr-2 text-sm w-14">2 Star</span>
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
					</dd>
					<dd>
						<span className="inline-block mr-2 text-sm w-14">1 Star</span>
						<FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
					</dd>
				</dl>
			</div>
		</div>
	);
};

export default ProductReview;
