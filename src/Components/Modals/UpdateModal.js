import React from "react";
import { addInfos } from "../../Functions/SideKick/fetcher";

const UpdateModal = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const amount = form.amount.value;
    const data = {
      name,
      email,
      phone,
      amount,
    };
    addInfos(data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <input type="checkbox" id="update-data" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Data</h3>
          {/* Form */}
          <div className="flex justify-center">
            <form onSubmit={handleUpdate}>
              <div className="py-5 flex flex-col justify-center lg:gap-5">
                <div className="form-control">
                  <label className="input-group">
                    <span>Name</span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="input Field"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="jane_doe@mail.com"
                      className="input focus:outline-none Field"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span>Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="012 34 567890"
                      className="input Field"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span>Amount</span>
                    <input
                      name="amount"
                      type="number"
                      placeholder="5003"
                      className="input Field"
                    />
                  </label>
                </div>
              </div>
              <div className="modal-action">
                <label htmlFor="update-data" className="BTN">
                  Cancel
                </label>
                <button className="BTN" type="submit">
                  <label htmlFor="update-data" className="BTN">
                    Update
                  </label>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
