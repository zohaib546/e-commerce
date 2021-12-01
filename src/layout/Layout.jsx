import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="layout">
			<MainNavigation />
			<main className="main mt-67">{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
