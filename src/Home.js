import React from "react";
import UpdateModal from "./Components/Modals/UpdateModal";
import { useData } from "./Functions/Context/DataContext";
import Header from "./Sections/Header";

const Home = () => {
  // const { data: rowsData, isLoading } = useData();
  // rowsData.map((row) => console.log(row));
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
            {/* {!rowsData ? (
              <p className="text-lg font-semibold">Loading...</p>
            ) : (
              rowsData.map((row, i) => {
                <tr key={i}>
                  <td className="CL">{row?._id}</td>
                  <td className="CL">{row?.body?.name}</td>
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
                </tr>;
                console.log(row);
              })
            )} */}
          </tbody>
        </table>
        <UpdateModal />
      </div>
    </>
  );
};

export default Home;
