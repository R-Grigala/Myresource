import React, { useState } from 'react';
import '../styles/style.css'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        
        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/reset-password' />    
    }
    

    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={e => onSubmit(e)}>
                        <h3>პაროლის შეცვლა</h3>
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
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">გაგზავნა</button>
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

export default connect(null, { reset_password })(ResetPassword);