import { Link } from "react-router-dom";

const Pagination = ({ paginationLength, currentPage, onClick }) => {
	const renderClasses = (page) => {
		if (currentPage === page)
			return "flex items-center justify-center w-12 h-12 text-white border border-black transition-all bg-black rounded-full cursor-pointer";

		return "flex items-center justify-center w-12 h-12 transition-all border border-gray-300 rounded-full cursor-pointer hover:bg-black hover:text-white";
	};

	return (
		<ul className="flex space-x-4">
			{paginationLength.map((page) => {
				return (
					<li key={page} onClick={() => onClick(page + 1)} className={renderClasses(page + 1)}>
						{page + 1}
					</li>
				);
			})}
		</ul>
	);
};

export default Pagination;
