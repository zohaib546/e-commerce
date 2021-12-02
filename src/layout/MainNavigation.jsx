import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../assets/images/main-logo.webp";

const MainNavigation = (props) => {
	const [sideMenuIsActive, setSideMenuIsActive] = useState(false);

	const isActiveStyles = (isActive) => (isActive ? "text-primary" : "");

	const sideMenuClasses = () => {
		return `fixed p-5 transition-all transform z-20 bg-primary top-67 h-full right-0 w-1/2 ${
			sideMenuIsActive ? "translate-x-0" : "translate-x-full"
		} md:hidden`;
	};

	const handleSideMenu = () => {
		setSideMenuIsActive((prevState) => !prevState);
	};

	const sideMenuBackDrop = sideMenuIsActive && (
		<div
			className="fixed inset-0 z-10 bg-black bg-opacity-50 top-67"
			onClick={handleSideMenu}
		></div>
	);

	return (
		<header>
			<div className="fixed top-0 left-0 right-0 z-20 p-5 bg-white shadow-md">
				<div className="grid items-center grid-cols-2 mx-auto md:grid-cols-3 lg:container">
					<Link to="/" className="justify-self-start">
						<img src={mainLogo} alt="logo" />
					</Link>
					<nav className="hidden md:block justify-self-center ">
						<ul className="flex space-x-6">
							<li className="">
								<NavLink to="/" className={({ isActive }) => isActiveStyles(isActive)}>
									Home
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/shop" className={({ isActive }) => isActiveStyles(isActive)}>
									Shop
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/sale" className={({ isActive }) => isActiveStyles(isActive)}>
									Sale
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/features" className={({ isActive }) => isActiveStyles(isActive)}>
									Features
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/about" className={({ isActive }) => isActiveStyles(isActive)}>
									About
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/contact" className={({ isActive }) => isActiveStyles(isActive)}>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<nav className="flex items-center space-x-5 justify-self-end">
						<ul className="flex space-x-5">
							<li className="">
								<NavLink to="/login" className={({ isActive }) => isActiveStyles(isActive)}>
									Login
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/signup" className={({ isActive }) => isActiveStyles(isActive)}>
									Signup
								</NavLink>
							</li>
						</ul>
						<div className="relative cursor-pointer">
							<Link to="/cart">
								<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
								<span className="absolute flex items-center justify-center font-bold text-white border-2 border-white border-solid rounded-full w-7 h-7 text-xxs bg-primary -top-4 -right-5">
									50
								</span>
							</Link>
						</div>
						<div
							className="flex flex-col w-5 space-y-1 cursor-pointer md:hidden"
							onClick={handleSideMenu}
						>
							<span className="w-5 h-1 bg-black"></span>
							<span className="w-5 h-1 bg-black"></span>
							<span className="w-5 h-1 bg-black"></span>
						</div>
					</nav>
				</div>
			</div>
			<nav className={sideMenuClasses()}>
				<ul className="flex flex-col space-y-4 text-right">
					<li className="">
						<NavLink to="/" className="block text-white">
							Home
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/shop" className="block text-white">
							Shop
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/sale" className="block text-white">
							Sale
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/features" className="block text-white">
							Features
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/about" className="block text-white">
							About
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/contact" className="block text-white">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
			{sideMenuBackDrop}
		</header>
	);
};

export default MainNavigation;
