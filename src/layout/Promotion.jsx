import Button from "./../components/UI/Button";

const Promotion = (props) => {
	return (
		<section className="bg-left bg-no-repeat sm:bg-center :bg-cover promotion bg-promotion">
			<div className="container mx-auto">
				<div className="grid sm:grid-cols-2">
					<div className="py-24 space-y-4 text-center">
						<h1 className="text-5xl font-medium capitalize">Up To 50% Off</h1>
						<h3 className="text-3xl">Winter Sale</h3>
						<p className="text-gray-700">Him she'd let them sixth saw light</p>
						<Button roundedWhite>Shop Now</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promotion;
