import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

// components here
import Header from "../../layouts/admin/Header";
import Aside from "../../layouts/admin/Aside";
import Footer from "../../layouts/admin/Footer";
import ModalExample from "../../layouts/model/model";
import EditModel from "../../layouts/model/editModel";
import DeleteModel from "../../layouts/model/deletemodel";

export default function Products() {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    console.log("==========;========");

    axios
      .get("/api/v1/product")
      .then((res) => {
        setData(res.data.products);
        console.log("working", res.data.products);
        setLoading(true);
      })
      .catch((error) => {
        setLoading(true);
        console.log("eroror", error.message);
      });
  }, []);
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

          <br />

          {/* <!-- end add product section --> */}

          {/* <!-- start product table section --> */}
          <div className="card mt-3 ">
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              {/* <!-- end edit product model --> */}

              {/* <!-- start delete product modal --> */}

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
                    <th scope="col">Category</th>
                    <th scope="col">status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((item, i) => (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{item._id}</td>
                        <td>{item.title}</td>
                        <td>
                          <img
                            src={item.img.secure_url}
                            alt=""
                            style={{ width: "50px", height: "auto" }}
                          />
                        </td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.status ? "Active" : "Inactive"}</td>
                        <td>
                          <EditModel editdata={item} />
                          <DeleteModel editdata={item} />
                          {/* Edit <i className="bi bi-pencil-square"></i> */}

                          <Link
                            to={`product-detail/${item._id}`}
                            className="mx-2"
                          >
                            <button type="button" className="btn btn-info">
                              Details{" "}
                              <i className="bi bi-box-arrow-up-right"></i>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
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
