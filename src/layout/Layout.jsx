import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Layout = (props) => {
	return (
		<div className="layout">
			<MainNavigation />
			<main className="main mt-67">
				<Outlet />
			</main>
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default Layout;
