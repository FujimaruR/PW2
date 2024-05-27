import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LabelText from '../components/label_text';
import Navbar from '../components/navbar';
import hampterTriste from '../img/HampterTriste.jpg';

const Error404 = ({ errorFeo }) => {
    if (!errorFeo) {
        errorFeo = "Lo sentimos, hubo un error.";
    }

    return (
        <div className='' style={{ width: '100%', height: '100vh', margin: '0px', padding: '0px' }}>
            <div className='row mx-auto' style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div className="row position-absolute" style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px' }}>
                </div>

                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 1, width: '45%', minWidth: '500px' }}>
                    <center className='mt-5'>
                        <LabelText text={errorFeo} id="text-edit-title" />
                    </center>
                    <div>
                        <center>
                            <img src={hampterTriste} alt="Error Image" style={{ maxWidth: '100%', height: 'auto' }} />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;
