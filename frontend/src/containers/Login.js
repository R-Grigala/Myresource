import React, { useState } from 'react';
import '../styles/style.css'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Navigate to='/' />    
    }
    

    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={e => onSubmit(e)}>
                        <h3>ავტორიზაცია</h3>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">ელ-ფოსტა:</label>
                            <input 
                                className='form-control'
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">პაროლი:</label>
                            <input 
                                className='form-control'
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                        </div>
                        <div className="form-check mb-3">
                            <input type='checkbox' className='custom-control custom-checkbox' id='check'/>
                            <label htmlFor='check' className='custom-input-label ms-2'>
                                დამახსოვრება
                            </label>
                        </div>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">შესვლა</button>
                        </div>
                        <div className='p-2'>
                            <p className='text-end mt-2'>
                                <Link to='/reset-password'>დაგავიწყდათ პაროლი?</Link>
                            </p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p>OR</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                                ავტორიზაცია Google -ის საშუალებით 
                            </button>
                        </div>
                    </form> 
                </div>
            </div>

        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);