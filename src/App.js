import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
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
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="product">
						<Route path=":productId" element={<Product />} />
						<Route path="" element={<Navigate to="/notfound" replace={true} />} />
					</Route>
					<Route path="category">
						<Route path=":categoryName" element={<Category />} />
					</Route>
					<Route path="categories" element={<AllCategories />} />
					<Route path="products" element={<AllProducts />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="cart" element={<Cart />} />
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="confirmation" element={<Confirmation />} />
					<Route path="notfound" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/notfound" replace={true} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// max course review
// reusable components proptypes refactor
// pending pages (checkout, confirmation)
