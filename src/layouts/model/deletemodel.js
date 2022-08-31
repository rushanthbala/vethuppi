// ìmport React from 'react';
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "../../axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteModel({ editdata }) {
  const successmsg = () =>
    toast("product Deleted!", {
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      Type: "success",
    });
  const errsmsg = () =>
    toast.error("something went wrong!", {
      autoClose: 1000,
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
  const Delete = (e) => {
    setLoading(true);

    // data.append("data", json);

    axios
      .delete("api/v1/product/" + editdata._id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        handleClose();
        successmsg();
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
      <Button variant="danger" onClick={handleShow}>
        <i className="bi bi-trash"></i> Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Delete New Product</h5>
          </Modal.Title>
        </Modal.Header>

        <div className="modal-body">
          <p>
            Product ID: <span>{editdata._id}</span>
          </p>
          <p>
            Product Title: <span>{editdata.title}</span>
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={handleClose}
          >
            No
          </button>
          <button type="button" className="btn btn-primary" onClick={Delete}>
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
              "Save"
            )}
          </button>
        </div>
      </Modal>
    </>
  );
}
