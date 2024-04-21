import React from 'react';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";

const Card_Game_Likes = ({ gamelike }) => {

    const decodedImageString = decodeURIComponent(escape(atob(gamelike.Imagen)));

    return (
        <div className='card-game-landing mt-2' style={{ margin:'10px', marginBottom: '10px' }}>
            <div className='row justify-content-center align-items-center mx-auto mt-4' style={{ width: '100%' }}>
                <div className='col-md-6 mt-2'>
                    <img src={decodedImageString} alt={gamelike.Titulo} 
                         style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-4'>{gamelike.Titulo}</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis' }}>
                        {gamelike.Descripcion}
                    </p>
                    
                    <div className='d-flex justify-content-center align-items-center'>
                        <h4 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>{gamelike.Valor_Calificacion}</h4>
                        <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>Reseña de: {gamelike.Usuario}</h6>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>Reseña: {gamelike.Reseña}</h6>
                </div>
                <div className='col-md-12 mt-3 text-center mb-3'>
                    <a href="" style={{textDecoration: 'none'}}><h4 className='ver-mas-text fs-4'>Ver Más</h4></a>
                </div>
            </div>
        </div>
    );
};

export default Card_Game_Likes;