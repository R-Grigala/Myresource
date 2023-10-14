import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/brand/bootstrap-logo.svg';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-3">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                        GNSMC
                </Link>
            </div>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav px-5">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Pricing</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

);

export default Navbar;