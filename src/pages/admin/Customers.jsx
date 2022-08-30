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
                    <h1>Customers</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Customers</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- end pagetitle --> */}

                {/* <!-- start dashboard section --> */}
                <section className="section dashboard">
                    
                    {/* <!-- start product table section --> */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Customers</h5>

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
                            
                            {/* <!-- start customer table section --> */}
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Avatar</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone_no</th>
                                        <th scope="col">status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1111</td>
                                        <td>Full Name</td>
                                        <td><img src="assets/img/messages-3.jpg" alt="" style={{width: '50px', height: 'auto'}} /></td>
                                        <td>Address</td>
                                        <td>0123456789</td>
                                        <td>Active</td>
                                        <td>
                                            <button type="button" className="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#status-user">Block <i className="bi bi-hand-thumbs-down"></i></button>
                                            <button type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#delete-user">Delete <i className="bi bi-trash"></i></button>
                                            <Link to='customer-detail' className="mx-2"><button type="button" className="btn btn-primary">View Full Details <i className="bi bi-box-arrow-up-right"></i></button></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- End Table with hoverable rows --> */}

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