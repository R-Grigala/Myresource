import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        login(email, password)
    };

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

                    </form> 
                </div>
            </div>

        </>
    );
};

const mapStateToProps = state => ({
    // is authenticated?
})

export default connect(null, { login })(Login);