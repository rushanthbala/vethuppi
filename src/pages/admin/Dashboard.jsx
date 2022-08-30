import React, { useEffect, useState } from "react";
// import { userNavigate, Link } from 'react-router-dom'
import axios from "../../axios";

// components here
import Header from "../../layouts/admin/Header";
import Aside from "../../layouts/admin/Aside";
import Footer from "../../layouts/admin/Footer";

export default function Dashboard() {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("==========;========");
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGUwMGFlZGZkOTBkNTdlYzQ2ZjVhYSIsImlhdCI6MTY2MTg2MjIwNSwiZXhwIjoxNjYxOTQ4NjA1fQ.OeYPmKkfu1LWh8G5OcqSZ4I4rif99uomxDc3SdnIxLk",
    };
    axios
      .get("/api/v1/product", { headers })
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
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* <!-- end pagetitle --> */}

        {/* <!-- start dashboard section --> */}
        <section className="section dashboard">
          {/* <!-- start card section --> */}
          <div className="row">
            {/* <!-- start product card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card product-card">
                <div className="card-body">
                  <h5 className="card-title">Products</h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end product card --> */}

            {/* <!-- start revenue Card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                {/* <!-- start filter --> */}
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="../">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end filer --> */}

                <div className="card-body">
                  <h5 className="card-title">
                    Revenue <span>| This Month</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>$3,264</h6>
                      <span className="text-success small pt-1 fw-bold">
                        8%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end revenue card --> */}

            {/* <!-- start customer card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card customer-card">
                {/* <!-- start filter --> */}
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a className="dropdown-item" href="../">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end filter --> */}

                <div className="card-body">
                  <h5 className="card-title">
                    Customers <span>| This Year</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        decrease
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end customer card --> */}
          </div>
          {/* <!-- end card section --> */}

          {/* <!-- start report section --> */}
          <div className="row">
            {/* <!-- start left side panel --> */}
            <div className="col-lg-8">
              {/* <!-- start recent sales --> */}
              <div className="col-lg-12">
                <div className="card recent-sales overflow-auto">
                  <div className="card-body">
                    <h5 className="card-title">Recent Sales</h5>

                    <table className="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Img</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      
                      {data.length > 0 &&
                        data.map((item, i) => (
                          <tbody>
                            <tr>
                              <th scope="row">
                                <a href="../">{item._id}</a>
                              </th>
                              <td>{item.title}</td>
                              <td>
                                <img src="" alt="product" />
                              </td>
                              <td>{item.title}</td>
                              <td>
                                <span className="badge bg-success">
                                  {item.status}
                                </span>
                              </td>
                              <td>{item.price}</td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
              {/* <!-- end recent sales --> */}

              {/* <!-- start top selling --> */}
           
              {/* <!-- end top selling --> */}
            </div>
            {/* <!-- end left side panel --> */}

           
          </div>
          {/* <!-- end report section --> */}
        </section>
        {/* <!-- end dashboard section --> */}
      </main>
      {/* <!-- end main section --> */}

      <Footer />
    </>
  );
}
