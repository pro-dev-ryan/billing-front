import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-500 px-8">
      <div className="flex-1">
        <Link to="/" className="text-2xl text-white font-semibold">
          Power-Hack
        </Link>
      </div>
      <div className="flex-none">
        <div className="badge-lg bg-gray-100 rounded font-medium">
          Paid Count: 0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
