import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../css/review.css';
import '../css/login.css';
import '../css/resultadosBusquedaAdmin.css';

const Card_Game_Lista = (props) => {

    return (
        <div className='card-game-admin' style={{ width: '100%', height: '100%', marginBottom: '' }}>
            <div className='row justify-content-center align-items-center mx-auto'>
                <div className='col-md-6 mt-2 justify-content-center align-items-center d-flex'>
                    <img src={"https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg"} 
                    alt={''} style={{ width: '90%', height: 'auto', borderRadius: '5px', maxWidth: '150px' }} />
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'> FIFA 2017 </h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Descripción: Juego divertidisimo </p>
                    <div className='col-md-12 mt-2 '>
                        <h6 className='basic-text'>By: EA SPORTS</h6>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center mt-2 mb-2 mx-auto'>
                <div className='col-md-6 text-center mb-1'>
                    {/* Usamos un botón de HTML en lugar de ButtonSubmit */}
                    <button type="button" id={''} onClick={''} className="btn_submit">Ver más detalles</button>
                </div>
                <div className='col-md-6 text-center mb-1'>
                    {/* Usamos un botón de HTML en lugar de ButtonSubmit */}
                    <button type="button" id={''} onClick={''} className="btn_submit">Eliminar de lista</button>
                </div>
            </div>
        </div>
    );
}

export default Card_Game_Lista;
