import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "./../store/middleware/api";
import { itemImages } from "./../utils/imageData";
import MainLoader from "./MainLoader";
import Banner from "./../components/UI/Banner";
import Main from "./../layout/Main";
import Widget from "./../layout/Widget";
import Pagination from "./../components/UI/Pagination";
import SidebarFilter from "../components/sidebar/SidebarFilter";
import ProductCard from "../components/product/ProductCard";
import {
	calculatePages,
	getItemsPerPage,
	getSortItems,
	getProductsByCategory,
} from "../utils/utils";

const AllProducts = (props) => {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("all");
	const [sortBy, setSortBy] = useState("default");
	const [currentPage, setCurrentPage] = useState(1);
	const [showProducts, setShowProducts] = useState(6);
	const isLoading = useSelector((state) => state.loading.isLoading);
	const allProducts = useSelector((state) => state.products.items);
	const categories = useSelector((state) => state.categories.items);
	const categoriesError = useSelector((state) => state.categories.error);
	const productsError = useSelector((state) => state.products.error);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesWithProducts());
	}, [dispatch]);

	const handleFilter = (value) => {
		setFilter(value);
	};

	const handleShow = (value) => {
		setShowProducts(value);
	};

	const handleSorting = (value) => {
		setSortBy(value);
	};

	const handleSearch = (value) => {
		setCurrentPage(1);
		setShowProducts(6);
		setSortBy("default");
		setFilter("all");
		setSearch(value.trimStart());
	};

	const handlePagination = (index) => {
		setCurrentPage(index);
	};

	const categoriesList = categoriesError ? ["all"] : ["all", ...categories];

	const headerContent = (
		<Widget
			sortBy={sortBy}
			onSort={handleSorting}
			showProducts={showProducts}
			onShow={handleShow}
			search={search}
			onSearch={handleSearch}
		/>
	);

	const sidebarContent = (
		<SidebarFilter
			title="Categories"
			list={categoriesList}
			name="categories"
			filterBy={filter}
			onFilter={handleFilter}
		/>
	);

	const searchProducts =
		search.length > 0
			? allProducts.filter((product) =>
					product.title.toLowerCase().startsWith(search.toLowerCase())
			  )
			: allProducts;
	const productsByCategory = getProductsByCategory(searchProducts, filter);
	const sortedProducts = getSortItems(productsByCategory, sortBy);
	const productsPerPage = getItemsPerPage(sortedProducts, currentPage, showProducts);

	const mainContent = !productsError
		? productsPerPage.map((product, index) => (
				<ProductCard
					key={product.id}
					figure={itemImages[product.id]}
					path={`/product/${product.id}`}
					title={product.title}
					price={product.price}
				/>
		  ))
		: "No Products Found";

	let numberOfItems;
	if (filter === "all" && search.length > 0) numberOfItems = searchProducts.length;
	else if (filter === "all") numberOfItems = allProducts.length;
	else numberOfItems = productsByCategory.length;

	const pages = calculatePages(numberOfItems, showProducts);
	const footerContent = pages.length > 1 && (
		<Pagination paginationLength={pages} onClick={handlePagination} currentPage={currentPage} />
	);

	if (isLoading) return <MainLoader />;

	return (
		<section className="products">
			<Banner background="bg-banner1">Products</Banner>
			<Main
				sidebarContent={sidebarContent}
				headerContent={headerContent}
				mainContent={mainContent}
				footerContent={footerContent}
			/>
		</section>
	);
};

export default AllProducts;
