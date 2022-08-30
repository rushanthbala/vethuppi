import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
    
                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link to='/admin' className="nav-link">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/admin/products' className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Products</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/admin/customers' className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Customers</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/admin/orders' className="nav-link collapsed">
                            <i className="bi bi-grid"></i>
                            <span>Orders</span>
                        </Link>
                    </li>
                    
                </ul>
    
            </aside>
        </>
    )
}