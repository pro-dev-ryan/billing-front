import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between m-1 bg-gray-100">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search here!!!"
            className="input input-ghost focus:ring-1"
          />
        </div>

        <div className="flex-none">
          <button className="btn">Add New Bill</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
