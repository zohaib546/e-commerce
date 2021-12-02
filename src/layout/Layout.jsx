import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="layout">
			<MainNavigation />
			<main className="main mt-67">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
