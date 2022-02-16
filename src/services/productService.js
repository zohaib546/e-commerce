import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndPoint = apiUrl + "/products";

export function getProducts() {
	return http.get(apiEndPoint);
}

export function getLimitedProducts(limit) {
	return http.get(apiEndPoint + `?limit=${limit}`);
}

export function getProduct(id) {
	return http.get(apiEndPoint + `/${id}`);
}
