import React, { useState } from 'react';
import '../styles/style.css'
import { Link, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const { uid, token } = useParams();

    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });
    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/login' />    
    }
    

    return (
        <>
            <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
                <div className='form_container p-5 rounded bg-white'>
                    <form onSubmit={e => onSubmit(e)}>
                        <h3>პაროლის შეცვლა</h3>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">ახალი პაროლი:</label>
                            <input 
                                className='form-control'
                                type='password'
                                placeholder='New Password'
                                name='new_password'
                                value={new_password}
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
                                placeholder='Confirm News Password'
                                name='re_new_password'
                                value={re_new_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required
                            />
                        </div>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary">შეცვლა</button>
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);