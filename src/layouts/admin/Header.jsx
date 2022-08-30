import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <div className="bg-logo"></div>
                    <Link to='/admin' className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block">Vethuppi</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                
                {/* <!-- start navbar --> */}
                {/* <!-- end navbar --> */}

            </header>
        </>
    )
}