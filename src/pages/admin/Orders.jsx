import React from 'react'
import { Link } from 'react-router-dom'

// components here
import Header from '../../layouts/admin/Header'
import Aside from '../../layouts/admin/Aside'
import Footer from '../../layouts/admin/Footer'

export default function products() {
    return (
        <>
            <Header />
            <Aside />

            {/* <!-- start main section --> */}
            <main id="main" className="main">

                {/* <!-- start pagetitle --> */}
                <div className="pagetitle">
                    <h1>Orders</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Orders</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- end pagetitle --> */}

                {/* <!-- start dashboard section --> */}
                <section className="section dashboard">
                    
                    {/* <!-- start product table section --> */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Orders</h5>
                            
                            {/* <!-- start order table section --> */}
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Delivery Date</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Delivery Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1111</td>
                                        <td>1111</td>
                                        <td>12.07.2022</td>
                                        <td>14.07.2022</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                        <td>
                                            <Link to='order-detail'><button type="button" className="btn btn-primary">View Full Details <i className="bi bi-box-arrow-up-right"></i></button></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1111</td>
                                        <td>1111</td>
                                        <td>12.07.2022</td>
                                        <td>14.07.2022</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                        <td>
                                            <a href="order-detail.html"><button type="button" className="btn btn-primary">View Full Details <i className="bi bi-box-arrow-up-right"></i></button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1111</td>
                                        <td>1111</td>
                                        <td>12.07.2022</td>
                                        <td>14.07.2022</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                        <td>
                                            <a href="order-detail.html"><button type="button" className="btn btn-primary">View Full Details <i className="bi bi-box-arrow-up-right"></i></button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1111</td>
                                        <td>1111</td>
                                        <td>12.07.2022</td>
                                        <td>14.07.2022</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                        <td>
                                            <a href="order-detail.html"><button type="button" className="btn btn-primary">View Full Details <i className="bi bi-box-arrow-up-right"></i></button></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- end order table section--> */}

                        </div>
                    </div>
                    {/* <!-- end product table section --> */}
                    
                </section>
                {/* <!-- end dashboard section --> */}
            
            </main>
            {/* <!-- end main section --> */}

            <Footer />
        </>
    )
}