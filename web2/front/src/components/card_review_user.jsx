import React from 'react';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";

const Card_Review_User  = (props) => 
{
    return(
        <div className='card-game-review mt-2' style={{ marginBottom: '20px' }}>
            <div className='row justify-content-center align-items-center mx-auto' style={{ width: '97%'}}>
                <div className='col-md-6 mt-2'>
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" 
                    style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'>Team Fortress 2</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis' }}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h5 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>5</h5>
                        <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>By: Sexcretos de Insomnia</h6>
                </div>
                <div className='col-md-12 mt-3 text-center mb-3'>
                    <a href="" style={{textDecoration: 'none'}}><h4 className='ver-mas-text fs-5'>Ver Más</h4></a>
                </div>
            </div>
        </div>
    );
};

export default Card_Review_User 