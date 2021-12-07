import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import AllCategories from "./pages/AllCategories";
import AllProducts from "./pages/AllProducts";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="product">
					<Route path=":productId" element={<Product />} />
				</Route>
				<Route path=":categoryName">
					<Route path="products" element={<Category />} />
				</Route>
				<Route path="categories" element={<AllCategories />} />
				<Route path="products" element={<AllProducts />} />
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

// resolve slides issue
// max course review
// start redux docs
// finish other e-commerce pages
