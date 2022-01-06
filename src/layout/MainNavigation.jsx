import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../assets/images/main-logo.webp";

const MainNavigation = (props) => {
	const [sideMenuIsActive, setSideMenuIsActive] = useState(false);
	const cartItemsLength = useSelector((state) => state.cart.items.length);
	const wishlistItemsLength = useSelector((state) => state.wishlist.items.length);

	const isActiveStyles = (isActive) => (isActive ? "text-primary" : "");

	const sideMenuClasses = () => {
		return `fixed p-5 transition-all transform z-20 bg-primary top-67 h-full right-0 w-1/2 ${
			sideMenuIsActive ? "translate-x-0" : "translate-x-full"
		} lg:hidden`;
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
				<div className="grid items-center grid-cols-2 mx-auto lg:grid-cols-3 lg:container">
					<Link to="/" className="justify-self-start">
						<img src={mainLogo} alt="logo" />
					</Link>
					<nav className="hidden lg:block justify-self-center">
						<ul className="flex space-x-6">
							<li className="">
								<NavLink to="/" className={({ isActive }) => isActiveStyles(isActive)}>
									Home
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/categories" className={({ isActive }) => isActiveStyles(isActive)}>
									Categories
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/products" className={({ isActive }) => isActiveStyles(isActive)}>
									Products
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
						<ul className="hidden lg:flex space-x-5">
							<li className="">
								<NavLink to="/login" className={({ isActive }) => isActiveStyles(isActive)}>
									Login
								</NavLink>
							</li>
							<li className="">
								<NavLink to="/register" className={({ isActive }) => isActiveStyles(isActive)}>
									Register
								</NavLink>
							</li>
						</ul>
						<div className="flex space-x-6">
							<div className="relative cursor-pointer">
								<Link to="/wishlist">
									<FontAwesomeIcon icon={faHeart} className="text-lg" />
									<span className="absolute flex items-center justify-center font-bold text-white border-2 border-white border-solid rounded-full w-6 h-6 text-xxs bg-primary -top-4 -right-5">
										{wishlistItemsLength}
									</span>
								</Link>
							</div>
							<div className="relative cursor-pointer group">
								<Link to="/cart">
									<FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
									<span className="absolute flex items-center justify-center font-bold text-white border-2 border-white border-solid rounded-full w-6 h-6 text-xxs bg-primary -top-4 -right-5">
										{cartItemsLength}
									</span>
								</Link>
							</div>
						</div>
						<div
							className="flex flex-col w-5 space-y-1 cursor-pointer lg:hidden"
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
					<li className="">
						<NavLink to="/login" className="block text-white">
							Login
						</NavLink>
					</li>
					<li className="">
						<NavLink to="/logout" className="block text-white">
							Logout
						</NavLink>
					</li>
				</ul>
			</nav>
			{sideMenuBackDrop}
		</header>
	);
};

export default MainNavigation;
