import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../Functions/Context/DataContext";

const Navbar = () => {
  const { data } = useData();
  return (
    <div className="navbar bg-gray-500 px-8">
      <div className="flex-1">
        <Link to="/" className="text-2xl text-white font-semibold">
          Power-Hack
        </Link>
      </div>
      <div className="flex-none">
        <div className="badge-lg bg-gray-100 rounded font-medium">
          Paid Count: {!data?.length > 0 ? 0 : data?.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
