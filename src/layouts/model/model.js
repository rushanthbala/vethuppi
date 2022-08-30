// ìmport React from 'react';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "../../axios";

export default function Example() {
  const stateValues = {
    Description: "",
    File: "",
    Price: "",
    Shop: "",
    Status: "",
    Title: "",
  };
  const [values, setValues] = useState(stateValues);

  const handleInputChange = (e) => {
    console.log("---");
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputStatus = (e) => {
    console.log(11);
    console.log(e.target.value);
  };
  const handleUpload = (e) => {
    console.log("---    ");
    setValues({ ...values, File: e.target.files[0] });
  };
  const data = new FormData();
  const Post = (e) => {
    e.preventDefault();
    data.append("title", "name");
    data.append("desc", "dec");
    data.append("price", 888);
    data.append("category", "asas");
    data.append("stock", 90);
    data.append("status", true);
    data.append("img", values.File);

    const json = {
      user: values.Description,
      title: values.Title,
      desc: values.Description,
      price: values.Price,
      category: values.Shop,
      stock: values.Shop,
      status: values.Status,
      img: values.File,
    };

    // data.append("data", json);
    console.log("posting", values);
    console.log(json, "---");
    axios
      .post("api/v1/product/new", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGUwMGFlZGZkOTBkNTdlYzQ2ZjVhYSIsImlhdCI6MTY2MTg2MjIwNSwiZXhwIjoxNjYxOTQ4NjA1fQ.OeYPmKkfu1LWh8G5OcqSZ4I4rif99uomxDc3SdnIxLk",
        },
      })
      .then((result) => {
        console.log("sucessfully");
        // addToast("Successfully Login", {
        //   appearance: "success",
        //   autoDismiss: "true",
        //   autoDismissTimeout: 2000,
        // });
        window.location = "/dashboard";
      })
      .catch((error) => {
        console.log(error, "error");
        // addToast("username or password is incorrcet", {
        //   appearance: "error",
        //   autoDismiss: "true",
        //   autoDismissTimeout: 2000,
        // });
        // setDisabled(false);

        // setEmail("");
        // setPassword("");
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-pencil-fill"></i> Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h5 className="modal-title">Add New Product</h5>
          </Modal.Title>
        </Modal.Header>

        <div className="modal-body">
          <form className="row g-3 needs-validation" novalidate onSubmit={Post}>
            <div className="col-12 position-relative mb-3">
              <label for="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                name="Title"
                value={values.Title}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the title</div>
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
                required
                name="Description"
                value={values.Description}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the Description</div>
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-12 position-relative mb-3">
              <label for="img" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="img"
                // required
                name="File"
                onChange={handleUpload}
                // value={values.Description}
                // onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the Image</div>
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-12 position-relative mb-3">
              <label for="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                name="Price"
                value={values.Price}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the Price</div>
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-12 position-relative mb-3">
              <label for="shop" className="form-label">
                Shop
              </label>
              <input
                type="text"
                className="form-control"
                id="shop"
                required
                name="Shop"
                value={values.Shop}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the Shop Name</div>
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="mb-3">
              <legend className="col-form-label">Status</legend>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Status"
                  id="stock"
                  value="true"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
                <label className="form-check-label" for="outofstock">
                  Out of stock
                </label>
              </div>
            </div>

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
      </Modal>
    </>
  );
}
