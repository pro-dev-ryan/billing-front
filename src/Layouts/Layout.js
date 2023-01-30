import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
