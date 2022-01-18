import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLoader from "./pages/MainLoader";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Layout = lazy(() => import("./layout/Layout"));
const NotFound = lazy(() => import("./layout/NotFound"));
const Product = lazy(() => import("./components/product/Product"));
const Category = lazy(() => import("./components/category/Category"));
const AllCategories = lazy(() => import("./pages/AllCategories"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Confirmation = lazy(() => import("./pages/Confirmation"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<MainLoader />}>
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
			</Suspense>
		</BrowserRouter>
	);
}

export default App;

// https://e-commerce-zohaib546.netlify.app/

// max course review
// pending pages (checkout, confirmation)
