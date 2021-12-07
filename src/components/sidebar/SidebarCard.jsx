const SidebarCard = (props) => {
	return (
		<div className={`sidebar-card ${props.className}`}>
			<div className="px-5 py-3 bg-black">
				<h2 className="text-base font-bold text-white">Browse Categories</h2>
			</div>
			<div className="px-5 py-3 bg-gray-100 shadow">
				<ul className="space-y-3">
					<li className="flex items-center">
						<input
							type="radio"
							className="mb-1 mr-3 text-primary focus:ring focus:ring-primary focus:ring-opacity-50"
						/>
						<label htmlFor="" className="text-gray-500 capitalize">
							electronics
						</label>
					</li>
					<li className="flex items-center">
						<input
							type="radio"
							className="mb-1 mr-3 text-primary focus:ring focus:ring-primary focus:ring-opacity-50"
						/>
						<label htmlFor="" className="text-gray-500 capitalize">
							electronics
						</label>
					</li>
					<li className="flex items-center">
						<input
							type="radio"
							className="mb-1 mr-3 text-primary focus:ring focus:ring-primary focus:ring-opacity-50"
						/>
						<label htmlFor="" className="text-gray-500 capitalize">
							electronics
						</label>
					</li>
					<li className="flex items-center">
						<input
							type="radio"
							className="mb-1 mr-3 text-primary focus:ring focus:ring-primary focus:ring-opacity-50"
						/>
						<label htmlFor="" className="text-gray-500 capitalize">
							electronics
						</label>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SidebarCard;
