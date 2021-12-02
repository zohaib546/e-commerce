import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Sale from "./pages/Sale";
import Shop from "./pages/Shop";
import Features from "./pages/Features";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import Product from "./components/product/Product";
import Category from "./components/category/Category";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="product">
					<Route path=":productId" element={<Product />} />
				</Route>
				<Route path="category">
					<Route path=":categoryName" element={<Category />} />
				</Route>
				<Route path="shop" element={<Shop />} />
				<Route path="sale" element={<Sale />} />
				<Route path="features" element={<Features />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

// review max course
// continue product page
