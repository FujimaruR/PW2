import React from 'react';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";

const Card_Game_User  = (props) => 
{
    return(
        <div className='card-game-2-landing ' style={{ width: '100%', height: '100%', marginBottom: '' }}>
            <div className='row justify-content-center align-items-center mx-auto'>

                <div className='col-md-6 mt-2 justify-content-center align-items-center d-flex'>
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" 
                    style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'>Team Fortress 2</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis' }}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                    <div className='d-flex justify-content-center align-items-center' style={{marginBottom: '5px'}}>
                        <h5 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>5</h5>
                        <img src={star} alt="Star" width={'20'} height={'20'} style={{ marginLeft: '5px' }}/>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center align-items-center mx-auto'>
                <div className='col-md-12 mt-2 '>
                    <h6 className='basic-text'>By:Valve</h6>
                </div>
            </div>
            <div className='row justify-content-center align-items-center mx-auto'>
                <div className='col-md-12 text-center mb-1'>
                    <a href="" style={{textDecoration: 'none'}}><h4 className='ver-mas-text'>Ver Más</h4></a>
                </div>
            </div>
            
        </div>
    );
}

export default Card_Game_User 