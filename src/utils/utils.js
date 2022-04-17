export const calculatePages = (itemsLength, limit) => {
	const pages = Math.ceil(itemsLength / limit);
	return Array.from(Array(pages).keys());
};

export const getItemsPerPage = (items, pageNumber, pageSize) => {
	return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const getSortItems = (items, sortOrder) => {
	if (sortOrder === "low") return [...items].sort((itemA, itemB) => itemA.price - itemB.price);

	if (sortOrder === "high") return [...items].sort((itemA, itemB) => itemB.price - itemA.price);

	if (sortOrder === "name")
		return [...items].sort((itemA, itemB) => {
			const nameA = itemA.title.toUpperCase();
			const nameB = itemB.title.toUpperCase();
			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			return 0;
		});

	return items;
};

export const getProductsByCategory = (items, category) => {
	if (category !== "all") return items.filter((item) => item.category === category);
	return items;
};
