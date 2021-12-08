import Banner from "../components/UI/Banner";
import Button from "./../components/UI/Button";
import Heading from "./../components/UI/Heading";
import { useNavigate } from "react-router";
import Input from "./../components/UI/Input";

const Register = (props) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/login");
	};

	return (
		<section className="register">
			<Banner background="bg-promotion">Register</Banner>
			<div className="py-24">
				<div className="max-w-5xl mx-10 shadow-xl lg:mx-auto">
					<div className="grid lg:grid-cols-2">
						<div className="px-16 py-16 border border-gray-100 lg:py-36">
							<Heading subheadingBlack className="text-center">
								Create an account
							</Heading>
							<form className="flex flex-col items-center space-y-6">
								<Input type="text" placeholder="Username" />
								<Input type="text" placeholder="Email" />
								<Input type="password" placeholder="Password" />
								<Input type="password" placeholder="Confirm Password" />
								<Button outlinedBlack>Register</Button>
							</form>
						</div>
						<div className="flex flex-col items-center justify-center px-16 py-16 text-center text-white bg-primary lg:py-36">
							<Heading subheadingWhite>Already have an account?</Heading>
							<p className="mb-5">
								There are advances being made in science and technology everyday, and a good example
								of this is the
							</p>
							<Button outlinedWhite onClick={handleLogin}>
								Login now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
