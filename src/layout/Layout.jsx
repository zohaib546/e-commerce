import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";

const Layout = (props) => {
  const [state, setState] = useState(true);

  if (!state) {
    throw new Error("error in layout");
  }

  return (
    <div className="layout">
      <MainNavigation />

      <main className="main mt-67">
        <button
          onClick={() => {
            setState((state) => !state);
          }}
        >
          Test error boundry
        </button>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
