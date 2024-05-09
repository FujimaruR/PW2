import React from 'react';
import '../css/review.css';
import { useHistory, useNavigate } from 'react-router-dom';
import '../css/login.css';
import star from "../img/star.png";
import { Link } from 'react-router-dom';

const Card_Review_User  = ({ gamelike }) => 
{
    const history = useNavigate();

    const decodedImageString = decodeURIComponent(escape(atob(gamelike.Imagen)));

    const handleReview = () => {
        history(`/DetallesJuego?id=${gamelike.ID_Review}`);
    };

    const verMas = `btn_editar_${gamelike.ID_Juego}`;

    return(
        <div className='card-game-review mt-2' style={{ marginBottom: '20px' }}>
            <div className='row justify-content-center align-items-center mx-auto' style={{ width: '97%'}}>
                <div className='col-md-6 mt-2'>
                    <img src={decodedImageString} alt={gamelike.Titulo_Juego}
                    style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'>{gamelike.Titulo_Juego}</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis' }}>
                    {gamelike.Descripcion}
                    </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h5 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>{gamelike.Valor_Calificacion}</h5>
                        <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>By: {gamelike.Desarrolladora}</h6>
                </div>
                <div className='col-md-12 mt-3 text-center mb-3'>
                    <Link to={`/DetallesJuego?id=${gamelike.ID_Juego}`} className='ver-mas-text fs-5' style={{ textDecoration: 'none'}}>
                        Ver Más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card_Review_User 