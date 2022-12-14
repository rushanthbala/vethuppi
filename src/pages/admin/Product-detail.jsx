import React, { useEffect, useState } from "react";

import axios from "../../axios";
// components here
import { Route, Link, Routes, useParams } from "react-router-dom";

// components here
import Header from "../../layouts/admin/Header";
import Aside from "../../layouts/admin/Aside";
import Footer from "../../layouts/admin/Footer";

export default function ProductsDetails() {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("iddddd", id);
    setLoading(true);
    axios
      .get("/api/v1/product/" + id)
      .then((res) => {
        setData(res.data.product);
        console.log(res.data.product);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
          <h1>Product Detail</h1>

          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li class="breadcrumb-item">
                <a href="product.html">Products</a>
              </li>
              <li class="breadcrumb-item active">product Detail</li>
            </ol>
          </nav>
        </div>
        {/* <!-- end pagetitle --> */}

        {/* <!-- start dashboard section --> */}
        <section className="section dashboard">
          {/* <!-- start product detail section --> */}
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Product Details</h5>

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="product-detail-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#product-detail"
                    type="button"
                    role="tab"
                    aria-controls="product-detail"
                    aria-selected="true"
                  >
                    Product Detail
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="order-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#order"
                    type="button"
                    role="tab"
                    aria-controls="order"
                    aria-selected="false"
                  >
                    Order
                  </button>
                </li>
              </ul>

              <div class="tab-content pt-2" id="myTabContent">
                {/* <!-- start product detail panel --> */}
                <div
                  class="tab-pane fade show active"
                  id="product-detail"
                  role="tabpanel"
                  aria-labelledby="product-detail-tab"
                >
                  <table class="table table-striped my-3">
                    {data && (
                      <tbody>
                        <tr>
                          <th scope="row">ID:</th>
                          <td>{data._id}</td>
                        </tr>
                        <tr>
                          <th scope="row">Title:</th>
                          <td>{data.title}</td>
                        </tr>
                        <tr>
                          <th scope="row">Image:</th>
                          <td>
                            <img
                              src={data.img ? data.img.secure_url : ""}
                              alt=""
                              style={{ width: "50px", height: "auto" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Price:</th>
                          <td>{data.price}</td>
                        </tr>
                        <tr>
                          <th scope="row">Category:</th>
                          <td>{data.category}</td>
                        </tr>
                        {/* <tr>
                          <th scope="row">Created At:</th>
                          <td>08.08.2022 12.00 p.m</td>
                        </tr> */}
                      </tbody>
                    )}
                  </table>
                </div>
                {/* <!-- end product detail panel --> */}

                {/* <!-- start order detail panel --> */}
                <div
                  class="tab-pane fade"
                  id="order"
                  role="tabpanel"
                  aria-labelledby="order-tab"
                >
                  <table class="table table-striped my-3">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Id</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Order Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <a href="order-detail.html">1234567</a>
                        </td>
                        <td>12</td>
                        <td>17.08.2022</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <a href="order-detail.html">1234567</a>
                        </td>
                        <td>12</td>
                        <td>17.08.2022</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- end order detail panel --> */}
              </div>
            </div>
          </div>
          {/* <!-- end product detail section --> */}
        </section>
        {/* <!-- end dashboard section --> */}
      </main>
      {/* <!-- end main section --> */}

      <Footer />
    </>
  );
}
