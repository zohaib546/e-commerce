import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import AuthContextProvider from "./context/authProvider";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</Provider>,
	document.getElementById("root")
);
