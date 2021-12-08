import { useNavigate } from "react-router";
import Banner from "../components/UI/Banner";
import Button from "./../components/UI/Button";
import Heading from "./../components/UI/Heading";
import Input from "./../components/UI/Input";

const Login = (props) => {
	const navigate = useNavigate();

	const handleRegister = () => {
		navigate("/register");
	};
	return (
		<section className="login">
			<Banner background="bg-promotion">Login</Banner>
			<div className="py-24">
				<div className="max-w-5xl mx-auto shadow-xl">
					<div className="grid grid-cols-2">
						<div className="flex flex-col items-center justify-center px-16 text-center text-white bg-primary py-36">
							<Heading subheadingWhite>New to our website?</Heading>
							<p className="mb-5">
								There are advances being made in science and technology everyday, and a good example
								of this is the Class aptent taciti sociosqu ad litora torquent per conubia nostra,
								per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu
								varius
							</p>
							<Button outlinedWhite onClick={handleRegister}>
								Register here
							</Button>
						</div>
						<div className="px-16 border border-gray-100 py-36">
							<Heading subheadingBlack className="text-center">
								Login to enter
							</Heading>
							<form className="flex flex-col items-center space-y-6">
								<Input type="text" placeholder="Username" />
								<Input type="text" placeholder="Email" />
								<Button outlinedBlack>login</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
