import React, { useState } from 'react';
import '../styles/style.css'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });
    const { name, email, password, re_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }
        
    };

    if (isAuthenticated) {
        return <Navigate to='/' />    
    }
    if (accountCreated) {
        return <Navigate to='/login' />    
    }
    

    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={e => onSubmit(e)}>
                        <h3>რეგისტრაცია</h3>
                        <div className="mb-3 mt-3">
                            <label htmlFor="text" className="form-label">მომხმარებლის სახელი:</label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='Username*'
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">ელ-ფოსტა:</label>
                            <input 
                                className='form-control'
                                type='email'
                                placeholder='Email*'
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
                                placeholder='Password*'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">გაიმეორეთ პაროლი:</label>
                            <input 
                                className='form-control'
                                type='password'
                                placeholder='Confirm Password*'
                                name='re_password'
                                value={re_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                        </div>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">რეგისტრაცია</button>
                        </div>
                        <div className='p-2'>
                            <p className='text-end mt-2'>
                                <Link to='/login'>ავტორიზაცია</Link>
                            </p>
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

export default connect(mapStateToProps, { signup })(Signup);