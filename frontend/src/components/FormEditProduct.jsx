import React from "react";

const FormEditProduct = () => {
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Update Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input type="text" placeholder="Name" className="input" />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input type="text" placeholder="Price" className="input" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
