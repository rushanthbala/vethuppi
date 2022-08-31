// ìmport React from 'react';
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "../../axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditModel({ editdata }) {
  const successmsg = () =>
    toast("product Updated!", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      Type: "success",
    });
  const errsmsg = () =>
    toast.error("something went wrong!", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      Type: "error",
    });

  const [Loading, setLoading] = useState(false);
  const stateValues = {
    Title: editdata ? editdata.title : "",
    Description: editdata ? editdata.desc : "",
    File: editdata ? editdata.File : "",
    Price: editdata ? editdata.price : "",
    Category: editdata ? editdata.category : "",
    Status: editdata ? editdata.status : "",
    Stock: editdata ? editdata.stock : "",
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
    setLoading(true);

    e.preventDefault();
    data.append("title", "name");
    data.append("desc", "dec");
    data.append("price", 888);
    data.append("category", "asas");
    data.append("stock", 90);
    data.append("status", true);
    data.append("image", values.File);

    const json = {
      user: values.Description,
      title: values.Title,
      desc: values.Description,
      price: values.Price,
      category: values.Category,
      stock: values.Stock,
      status: values.Stock,
      image: values.File,
    };

    // data.append("data", json);
    console.log("posting", values);
    console.log(json, "---");
    axios
      .patch("api/v1/product/" + editdata._id, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        successmsg();
        handleClose();
        setLoading(false);
      })
      .catch((error) => {
        errsmsg();
        setLoading(false);
      });
  };
  const Reset = () => {
    setValues({});
  };
  return (
    <>
      <Button variant="success m-1" onClick={handleShow}>
        <i className="bi bi-pencil-fill"></i> Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h5 className="modal-title">Edit New Product</h5>
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
              <label for="price" className="form-label">
                Stock
              </label>
              <input
                type="text"
                className="form-control"
                id="stock"
                required
                name="Stock"
                value={values.Stock}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">Please add the Stock</div>
              <div className="valid-tooltip">Looks good!</div>
            </div>

            <div className="col-12 position-relative mb-3">
              <label for="Category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="Category"
                required
                name="Category"
                value={values.Category}
                onChange={handleInputChange}
              />
              <div className="invalid-tooltip">
                Please add the Category Name
              </div>
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
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: 80, marginRight: 20 }}
              >
                {Loading ? (
                  <CircularProgress
                    style={{
                      color: "#fff",
                      width: 18,
                      height: 18,
                      marginBottom: "-4px",
                    }}
                  />
                ) : (
                  "Update"
                )}
              </button>
              {/* <button
                type="reset"
                className="btn btn-secondary"
                onClick={Reset}
              >
                Reset
              </button> */}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
