import { apiUrl } from "../config.json";
import http from "./httpService";

const apiEndPoint = apiUrl + "/products";

export function getLimitedProducts(limit) {
	return http.get(apiEndPoint + `?limit=${limit}`);
}

export function getProduct(id) {
	return http.get(apiEndPoint + `/${id}`);
}
