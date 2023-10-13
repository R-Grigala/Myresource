import React from 'react'
import logo from '../assets/brand/bootstrap-logo.svg';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="/home">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
                        Bootstrap
                </a>
            </div>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav px-5">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                    <   a className="nav-link" href="/home">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

);

export default Navbar;