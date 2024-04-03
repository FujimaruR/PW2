import React from 'react';
import '../css/review.css';
import star from "../img/star.png";
import LabelText from '../components/label_text';

const Blackcard_review = () => 
{
    return(
        <div className='blackcard container mt-3'>
            <div className='row mt-3 mb-3' style={{ marginLeft: '5px', marginRight: '5px' }}>
                <div className='col-md-4' >
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" 
                    className='img-review' />
                    <p className='text-review mt-2'>By: Miguel</p>
                    <a href="" className='link-review mt-4'>Reseñar</a>
                </div>
                <div className='col-md-8'>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            <h2 className='Title-review'>Team Fortress 2</h2>
                            <p className='text-review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className='text-review fs-5' style={{ margin: '0px' }}>5</p>
                            <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blackcard_review