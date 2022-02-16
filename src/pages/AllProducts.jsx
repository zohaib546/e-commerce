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
import { calculatePages, getItemsPerPage } from "./../utils/paginate";

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
		setSearch(value);
	};

	const handlePagination = (index) => {
		setCurrentPage(index);
	};

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

	const categoriesList = categoriesError ? ["all"] : ["all", ...categories];

	const productsPerPage = getItemsPerPage(allProducts, 6, 12);

	const mainContent = !productsError
		? productsPerPage.map((product, index) => (
				<ProductCard
					key={product.id}
					figure={itemImages[index].image}
					path={`/product/${product.id}`}
					title={product.title}
					price={product.price}
				/>
		  ))
		: "No Products Found";

	const pages = calculatePages(allProducts.length, 6);
	const footerContent = allProducts.length > 0 && (
		<Pagination paginationLength={pages} onClick={handlePagination} currentPage={currentPage} />
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
