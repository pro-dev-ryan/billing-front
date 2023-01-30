import React from "react";
import UpdateModal from "./Components/Modals/UpdateModal";
import Header from "./Sections/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="overflow-x-auto">
        <table className="table w-full text-center border-separate table-zebra">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="TH">Billing ID</th>
              <th className="TH">Full Name</th>
              <th className="TH">Email</th>
              <th className="TH">Phone</th>
              <th className="TH">Paid Amount</th>
              <th className="TH">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td className="CL">ID</td>
              <td className="CL">FN</td>
              <td className="CL">Email</td>
              <td className="CL">phone</td>
              <td className="CL">Amount</td>
              <td className="CL">
                <div>
                  <label
                    htmlFor="update-data"
                    className="text-lg font-medium hover:text-gray-600 "
                  >
                    Edit
                  </label>{" "}
                  ||{" "}
                  <label
                    htmlFor="my-modal-6"
                    className="text-lg font-medium hover:text-gray-600 "
                  >
                    Delete
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <UpdateModal />
      </div>
    </>
  );
};

export default Home;
