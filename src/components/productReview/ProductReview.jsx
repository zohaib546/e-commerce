import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductReview = (props) => {
	return (
		<div className="flex flex-col space-y-5 sm:flex-row sm:space-x-5 sm:space-y-5">
			<div className="px-10 py-5 text-center bg-gray-100 rounded-md shadow-md">
				<h3 className="font-bold">Overall</h3>
				<h2 className="mb-1 text-5xl font-bold text-primary">{props.rating.rate}</h2>
				<p className="text-sm">( {props.rating.count} Reviews )</p>
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
