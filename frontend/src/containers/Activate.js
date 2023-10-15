import React, { useState } from 'react';
import '../styles/style.css'
import { Link, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify }) => {
    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams();

    const verified_account = e => {
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/login' />    
    }
    

    return (
        <>
            <div className='container verify'>
                <div className='d-flex flex-column justify-content-center align-items-center form_container'
                    style={{ margin: '200px' }}
                >
                    <h1>Verify your Account:</h1>
                    <button
                        onClick={verified_account}
                        style={{marginTop: '50px'}}
                        type='button'
                        className='btn btn-primary'
                    >
                        Verify
                    </button>
                </div>
            </div>

        </>
    );
};

export default connect(null, { verify })(Activate);