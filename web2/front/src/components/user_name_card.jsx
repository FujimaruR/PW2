import React from 'react';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";
import img4 from '../img/img_4.png';

const User_Name_Card  = (props) => 
{
    return(
        <div className='' style={{ width: '100%', height: '100%', marginBottom: '' }}>

            <div className='row justify-content-center align-items-center mx-auto'>

                <div className='col-md-6 mb-5 justify-content-center align-items-center d-flex'>
                    <img src={img4} alt="" 
                    style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>

                <div className='col-md-6 mb-5'>
                    <h5 className='basic-text fs-5'>Team Fortress 2</h5>
                </div>
                
            </div>

        </div>
    );
}

export default User_Name_Card