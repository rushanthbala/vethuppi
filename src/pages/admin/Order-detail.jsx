import React from 'react'

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
                    <h1>Order Detail</h1>
                    
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item"><a href="customer.html">Orders</a></li>
                            <li className="breadcrumb-item active">Order Detail</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- end pagetitle --> */}
                
                {/* <!-- start dashboard section --> */}
                <section className="section dashboard">
                    
                    {/* <!-- start product table section --> */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Details</h5>
                            
                            {/* <!-- start accept order modal --> */}
                            <div className="modal fade" id="accept-order" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h5 className="modal-title">Do you accept this order?</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div className="modal-body">
                                            <p>Order ID: <span>001</span></p>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                            <button type="button" className="btn btn-primary">Yes</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end accept order modal --> */}
                            
                            {/* <!-- start decline order modal --> */}
                            <div className="modal fade" id="decline-order" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h5 className="modal-title">Do you decline this order?</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div className="modal-body">
                                            <p>Order ID: <span>001</span></p>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                            <button type="button" className="btn btn-primary">Yes</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end decline order modal --> */}
                            
                            {/* <!-- start order table section --> */}
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Order ID</th>
                                        <td>1111</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">User</th>
                                        <td><a href="customer-detail.html">1111</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Products</th>
                                        <td>
                                            <table className="table table-hover">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product ID</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="product-detail.html">1111</a></td>
                                                    <td>23</td>
                                                    <td>90.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="product-detail.html">1111</a></td>
                                                    <td>23</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="product-detail.html">1111</a></td>
                                                    <td>23</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td>900.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Order Date Time</th>
                                        <td>08.08.2022 12.00 p.m</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Delivery Date Time</th>
                                        <td>18.08.2022 12.00 p.m</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Delivery Address</th>
                                        <td>Address</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Order Status</th>
                                        <td>Active</td>
                                        <td>
                                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#accept-order">Accept</button>
                                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#decline-order">Decline</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Delivery Status</th>
                                        <td>Shipped</td>
                                        <td>
                                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#shipped-order">Shipped</button>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#delivered-order">Delivered</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- end order table section --> */}

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