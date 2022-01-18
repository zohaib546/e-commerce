import React from "react";

const AuthContext = React.createContext({
	userName: "",
	userEmail: "",
	token: "",
	loginUser: (user) => {},
	logoutUser: () => {},
});

AuthContext.displayName = "AuthContext";

export default AuthContext;
