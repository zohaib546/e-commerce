import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndpoint = apiUrl + "/products";

export function getCategories() {
	return http.get(apiEndpoint + `/categories`);
}

export function getSingleCategory(categoryName) {
	return http.get(apiEndpoint + `/categories/${categoryName}`);
}
