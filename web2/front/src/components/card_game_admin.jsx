import React from 'react';
import ButtonSubmit from '../components/button_submit';
import '../css/review.css';
import '../css/login.css';
import '../css/resultadosBusquedaAdmin.css';

const Card_Game_Admin  = (props) => 
{
    return(
        <div className=' card-game-admin ' style={{ width: '100%', height: '100%', marginBottom: '' }}>
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
                    <div className='col-md-12 mt-2 '>
                        <h6 className='basic-text'>By:Valve</h6>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center align-items-center mt-2 mb-2 mx-auto'>
                <div className='col-md-12 text-center mb-1'>
                    <ButtonSubmit type="button" name="btn_editar" id="btn_editar" value="Editar" />
                </div>
            </div>
            
        </div>
    );
}

export default Card_Game_Admin 