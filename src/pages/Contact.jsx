import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHeadset, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Banner from "./../components/UI/Banner";
import Button from "./../components/UI/Button";

const Contact = (props) => {
	return (
		<section className="contact">
			<Banner background="bg-banner2">Contact</Banner>
			<div className="max-w-5xl py-20 mx-8 lg:mx-auto">
				<div className="grid gap-8 lg:grid-cols-3">
					<div>
						<ul className="space-y-3">
							<li className="flex space-x-3">
								<FontAwesomeIcon icon={faHome} className="text-xl text-primary" />
								<div>
									<h3 className="text-lg font-bold">California United States</h3>
									<p className="text-gray-500">Santa monica bullevard</p>
								</div>
							</li>
							<li className="flex space-x-3">
								<FontAwesomeIcon icon={faHeadset} className="text-xl text-primary" />
								<div>
									<h3 className="text-lg font-bold">00 (440) 9865 562</h3>
									<p className="text-gray-500">Mon to Fri 9am to 6pm</p>
								</div>
							</li>
							<li className="flex space-x-3">
								<FontAwesomeIcon icon={faEnvelope} className="text-xl text-primary" />
								<div>
									<h3 className="text-lg font-bold">support@colorlib.com</h3>
									<p className="text-gray-500">Send us your query anytime!</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<input
							type="text"
							className="block w-full text-sm border-gray-300 focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50"
							placeholder="Enter Your Name"
						/>
						<input
							type="text"
							className="block w-full text-sm border-gray-300 focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50"
							placeholder="Enter Email Address"
						/>
						<input
							type="text"
							className="block w-full text-sm border-gray-300 focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50"
							placeholder="Enter Subject"
						/>
					</div>
					<div>
						<textarea
							rows="6"
							placeholder="Enter Message"
							className="block w-full text-sm border-gray-300 resize-none focus:border-primary focus:border-opacity-80 focus:ring focus:ring-primary focus:ring-opacity-50"
						></textarea>
					</div>
				</div>
				<div className="mt-5 text-right lg:mt-0">
					<Button roundedBlack>Send</Button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
