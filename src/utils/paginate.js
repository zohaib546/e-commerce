export const calculatePages = (itemsLength, limit) => {
	const pages = Math.ceil(itemsLength / limit);
	return Array.from(Array(pages).keys());
};

export const getItemsPerPage = (items, start, end) => {
	return items.slice(start, end);
};
