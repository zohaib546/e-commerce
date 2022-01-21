import { toast } from "react-toastify";
import { apiCallError } from "./../actions/actions";

const error = (store) => (next) => (action) => {
	if (action.type === apiCallError.type) {
		toast.warn(action.payload.error, {
			position: toast.POSITION.TOP_RIGHT,
			className: "top-16",
			theme: "dark",
		});
	} else next(action);
};

export default error;
