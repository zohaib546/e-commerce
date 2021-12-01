const Features = () => {
	return (
		<section className="my-10 sm:my-10 features">
			<div className="container mx-auto">
				<div className="grid divide-y divide-gray-300 mx-7 md:mx-0 md:grid-cols-3 md:divide-y-0 md:divide-x">
					<div className="p-3 text-center">
						<h1 className="mb-1 text-xl text-gray-500">Free Delivery Worldwide</h1>
						<p className="italic text-gray-500">Click here for more info.</p>
					</div>
					<div className="p-3 text-center">
						<h1 className="mb-1 text-xl text-gray-500">30 Days Return</h1>
						<p className="italic text-gray-500">Simply return it within 30 days for an exchange.</p>
					</div>
					<div className="p-3 text-center">
						<h1 className="mb-1 text-xl text-gray-500">Store Opening</h1>
						<p className="italic text-gray-500">Shop open from Monday to Sunday.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
