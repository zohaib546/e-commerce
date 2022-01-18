import { useReducer } from "react";
import AuthContext from "./authContext";

const initUser = {
	userName: "",
	userEmail: "",
	token: "",
};

const userReducer = (user, action) => {
	if (action.type === "LOGIN_USER") {
		console.log("User logged in");
		return user;
	}

	if (action.type === "LOGOUT_USER") {
		console.log("User logged out");
		return user;
	}

	return user;
};

const AuthContextProvider = (props) => {
	const [user, setUserData] = useReducer(userReducer, initUser);

	const handleLogin = (user) => {
		setUserData({ type: "LOGIN_USER", user });
	};

	const handleLogout = () => {
		setUserData({ type: "LOGOUT_USER" });
	};

	const contextValue = {
		userName: user.userName,
		userEmail: user.email,
		token: user.token,
		loginUser: handleLogin,
		logoutUser: handleLogout,
	};

	return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
