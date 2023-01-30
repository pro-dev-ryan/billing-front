import React from "react";

const UpdateModal = () => {
  return (
    <>
      <input type="checkbox" id="update-data" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Data</h3>
          {/* Form */}
          <div className="flex justify-center">
            <form onSubmit="">
              <div className="py-5 flex flex-col justify-center lg:gap-5">
                <div className="form-control">
                  <label className="input-group">
                    <span>Name</span>
                    <input
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
                      type="number"
                      placeholder="5003"
                      className="input Field"
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="update-data" className="BTN">
              Cancel
            </label>
            <label htmlFor="update-data" className="BTN">
              Update
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
