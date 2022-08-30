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
                    <h1>Customer Detail</h1>
                    
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item"><a href="customer.html">Customers</a></li>
                            <li className="breadcrumb-item active">Customer Detail</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- end pagetitle --> */}
                
                {/* <!-- start dashboard section --> */}
                <section className="section dashboard">
                    
                    {/* <!-- start user detail section --> */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Details</h5>

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="user-detail-tab" data-bs-toggle="tab" data-bs-target="#user-detail" type="button" role="tab" aria-controls="user-detail" aria-selected="true">User Detail</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order" type="button" role="tab" aria-controls="order" aria-selected="false">Order</button>
                                </li>
                            </ul>
                            
                            <div className="tab-content pt-2" id="myTabContent">

                                {/* <!-- start user status change modal --> */}
                                <div className="modal fade" id="status-user" tabindex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h5 className="modal-title">Are You Block This User?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div className="modal-body">
                                                <p>User ID: <span>001</span></p>
                                                <p>User Full Name: <span>Full Name</span></p>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                <button type="button" className="btn btn-primary">Yes</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end user status change modal --> */}
                
                                {/* <!-- start delete user modal --> */}
                                <div className="modal fade" id="delete-user" tabindex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h5 className="modal-title">Are You Delete This User?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div className="modal-body">
                                                <p>User ID: <span>001</span></p>
                                                <p>User Full Name: <span>Full Name</span></p>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                <button type="button" className="btn btn-primary">Yes</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end delete user modal --> */}

                                {/* <!-- start user detail panel --> */}
                                <div className="tab-pane fade show active" id="user-detail" role="tabpanel" aria-labelledby="user-detail-tab">
                                    
                                    <table className="table table-striped my-3">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Full Name:</th>
                                                <td>Brandon Jacob</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Phone No:</th>
                                                <td>1234567890</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Address:</th>
                                                <td>address</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Avatar:</th>
                                                <td><img src="../../assets/img/messages-3.jpg" alt="" /></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Created At:</th>
                                                <td>08.082022 12.00 p.m</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Action: </th>
                                                <td>
                                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#status-user">Block <i className="bi bi-hand-thumbs-down"></i></button>
                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-user">Delete <i className="bi bi-trash"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                {/* <!-- end user detail panel --> */}

                                {/* <!-- start order detail panel --> */}
                                <div className="tab-pane fade" id="order" role="tabpanel" aria-labelledby="order-tab">
                                    <table className="table table-striped my-3">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Order Id</th>
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
                                                <td><a href="order-detail.html">1234567</a></td>
                                                <td>11.08.2022</td>
                                                <td>17.08.2022</td>
                                                <td>Pending</td>
                                                <td>Pending</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- end order detail panel --> */}

                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- end user detail section --> */}
        
                </section>
                {/* <!-- end dashboard section --> */}
  
            </main>
            {/* <!-- end main section --> */}
            
            <Footer />
        </>
    )
}