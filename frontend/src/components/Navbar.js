import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import logo from '../assets/brand/bootstrap-logo.svg';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    function toggleSidebar(){
        setShowSidebar(!showSidebar);
    }

    const logout_user = () => {
        logout();
        setRedirect(false);
    };

    const guestLinks = () => (
        <Fragment>
            <li className="nav-item mx-2">
                <Link className="nav-link nav-link-light" to="/login">Login</Link>
            </li>
            <li className="nav-item mx-2">
                <Link className="nav-link" to="/signup">Signup</Link>
            </li>
        </Fragment>
    );

    const authLinks = () => (
        <li className="nav-item">
            <a className="nav-link" href="#!" onClick={logout_user}>Logout</a>
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
                    
                        {/* toggle button */}
                        <button className='navbar-toggler shadow-none border-0' type='button' onClick={toggleSidebar}>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        {/* sidebar */}
                        <div className={`sidebar offcanvas offcanvas-start ${showSidebar ? 'show': ''}`} tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' style={{backgroundColor:'rgba(255, 255, 255, 0.1)', backdropFilter:'blur(10px)'}}>
                            <div className='offcanvas-header border-bottom'>
                                <Link className='nav-link' aria-current="page" to='/'>GNSMC</Link>
                                <button className='btn-close btn-close shadow-none' onClick={toggleSidebar} aria-label='Close'></button>
                            </div>
                            {/* navbar links */}
                            <div className='offcanvas-body d-flex flex-column flex-lg-row p-4'>
                                <ul className='navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3'>
                                    <li className='nav-item mx-2'>
                                        <Link className='nav-link' aria-current="page" to='/'>Home</Link>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <Link className='nav-link' aria-current="page" to='/'>About</Link>
                                    </li>
                                    {isAuthenticated ? authLinks() : guestLinks()}
                                </ul>
                            </div>
                        </div>
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