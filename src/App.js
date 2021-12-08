import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import AllCategories from "./pages/AllCategories";
import AllProducts from "./pages/AllProducts";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

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
				<Route path="register" element={<Register />} />
				<Route path="cart" element={<Cart />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="confirmation" element={<Confirmation />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

// max course review
// start redux docs
// reusable components proptypes refactor
// pending pages (checkout, confirmation)
