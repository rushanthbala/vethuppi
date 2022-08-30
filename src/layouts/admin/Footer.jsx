import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
        
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>vethuppi</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <Link to='#'>vethuppi</Link>
                </div>
            </footer>
            
        </>
    )
}