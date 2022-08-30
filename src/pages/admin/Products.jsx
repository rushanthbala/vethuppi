import React from "react";
import { Link } from "react-router-dom";

// components here
import Header from "../../layouts/admin/Header";
import Aside from "../../layouts/admin/Aside";
import Footer from "../../layouts/admin/Footer";
import ModalExample from "../../layouts/model/model";

export default function products() {
  return (
    <>
      <Header />
      <Aside />

      {/* <!-- start main section --> */}
      <main id="main" className="main">
        {/* <!-- start pagetitle --> */}
        <div className="pagetitle">
          <h1>Products</h1>

          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Products</li>
            </ol>
          </nav>
        </div>
        {/* <!-- end pagetitle --> */}

        {/* <!-- start dashboard section --> */}
        <section className="section dashboard">
          {/* <!-- start add product section --> */}
          <ModalExample />

          {/* <!-- end add product section --> */}

          {/* <!-- start product table section --> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Products</h5>

              {/* <!-- start edit product model --> */}
              <div
                className="modal fade"
                id="edit-product"
                tabindex="-1"
                data-bs-backdrop="false"
              >
                <div className="modal-dialog modal-dialog-scrollable modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Product</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12 position-relative mb-3">
                          <label for="product-id" className="form-label">
                            Product ID
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="product-id"
                            readonly
                            value="001"
                          />
                        </div>

                        <div className="col-12 position-relative mb-3">
                          <label for="title" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            value="Title"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please add the title
                          </div>
                          <div className="valid-tooltip">Looks good!</div>
                        </div>

                        <div className="col-12 position-relative mb-3">
                          <label for="desc" className="form-label">
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="desc"
                            value="Description"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please add the description
                          </div>
                          <div className="valid-tooltip">Looks good!</div>
                        </div>

                        <div className="col-12 position-relative mb-3">
                          <label for="img" className="form-label">
                            Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please add the image
                          </div>
                          <div className="valid-tooltip">Looks good!</div>
                          <div className="image my-3">
                            <img src="assets/img/product-2.jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-6 position-relative mb-3">
                          <label for="price" className="form-label">
                            Price
                          </label>
                          <input
                            tyTitlepe="text"
                            className="form-control"
                            id="price"
                            value="Price"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please add the price
                          </div>
                          <div className="valid-tooltip">Looks good!</div>
                        </div>

                        <div className="col-md-6 position-relative mb-3">
                          <label for="shop" className="form-label">
                            Shop
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="shop"
                            value="shop"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please add the shop name
                          </div>
                          <div className="valid-tooltip">Looks good!</div>
                        </div>

                        <fieldset className="mb-3">
                          <legend className="col-form-label">Status</legend>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="stock"
                              value="true"
                              checked
                            />
                            <label className="form-check-label" for="stock">
                              Stock
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="outofstock"
                              value="false"
                            />
                            <label
                              className="form-check-label"
                              for="outofstock"
                            >
                              Out of stock
                            </label>
                          </div>
                        </fieldset>

                        <div className="text-left">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                          <button type="reset" className="btn btn-secondary">
                            Reset
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end edit product model --> */}

              {/* <!-- start delete product modal --> */}
              <div className="modal fade" id="delete-product" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        Are You Delete This product?
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <p>
                        Product ID: <span>001</span>
                      </p>
                      <p>
                        Product Title: <span>Title</span>
                      </p>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button type="button" className="btn btn-primary">
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end delete product modal --> */}

              {/* <!-- start product detail table --> */}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>1111</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </td>
                    <td>
                      <img
                        src="../assets/img/product-1.jpg"
                        alt=""
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>90.00</td>
                    <td>Admin1</td>
                    <td>Active</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-product"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                      <Link to="product-detail" className="mx-2">
                        <button type="button" className="btn btn-info">
                          View Details{" "}
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </Link>
                      <Link to="/" className="mx-2">
                        <button type="button" className="btn btn-primary">
                          View <i className="bi bi-bag"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>1111</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </td>
                    <td>
                      <img
                        src="../assets/img/product-1.jpg"
                        alt=""
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>90.00</td>
                    <td>Admin1</td>
                    <td>Active</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-product"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                      <Link to="product-detail" className="mx-2">
                        <button type="button" className="btn btn-info">
                          View Details{" "}
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </Link>
                      <Link to="/" className="mx-2">
                        <button type="button" className="btn btn-primary">
                          View <i className="bi bi-bag"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>1111</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </td>
                    <td>
                      <img
                        src="../assets/img/product-1.jpg"
                        alt=""
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>90.00</td>
                    <td>Admin1</td>
                    <td>Active</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-product"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                      <Link to="product-detail" className="mx-2">
                        <button type="button" className="btn btn-info">
                          View Details{" "}
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </Link>
                      <Link to="/" className="mx-2">
                        <button type="button" className="btn btn-primary">
                          View <i className="bi bi-bag"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>1111</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </td>
                    <td>
                      <img
                        src="../assets/img/product-1.jpg"
                        alt=""
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>90.00</td>
                    <td>Admin1</td>
                    <td>Active</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-product"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                      <Link to="product-detail" className="mx-2">
                        <button type="button" className="btn btn-info">
                          View Details{" "}
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </Link>
                      <Link to="/" className="mx-2">
                        <button type="button" className="btn btn-primary">
                          View <i className="bi bi-bag"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>1111</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </td>
                    <td>
                      <img
                        src="../assets/img/product-1.jpg"
                        alt=""
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>90.00</td>
                    <td>Admin1</td>
                    <td>Active</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-product"
                      >
                        Edit <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#delete-product"
                      >
                        Delete <i className="bi bi-trash"></i>
                      </button>
                      <Link to="product-detail" className="mx-2">
                        <button type="button" className="btn btn-info">
                          View Details{" "}
                          <i className="bi bi-box-arrow-up-right"></i>
                        </button>
                      </Link>
                      <Link to="/" className="mx-2">
                        <button type="button" className="btn btn-primary">
                          View <i className="bi bi-bag"></i>
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- end product detail table --> */}
            </div>
          </div>
          {/* <!-- end product table section --> */}
        </section>
        {/* <!-- end dashboard section --> */}
      </main>
      {/* <!-- end main section --> */}

      <Footer />
    </>
  );
}
