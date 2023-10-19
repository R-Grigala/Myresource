import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import logo from '../assets/brand/bootstrap-logo.svg';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    const guestLinks = () => (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li className="nav-item">
            <a className="nav-link" href="#!" onClick={logout}>Logout</a>
        </li>
    );

    return(
        <>
            <Fragment>
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
                            {isAuthenticated ? authLinks() : guestLinks()}
                        </ul>
                    </div>
                </nav>
                {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
            </Fragment>
        </>
)};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout} ) (Navbar);