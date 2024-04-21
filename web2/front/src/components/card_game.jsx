import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";

const Card_Game = ({ game }) => {

    const history = useNavigate();

    const decodedImageString = decodeURIComponent(escape(atob(game.Imagen)));

    const handleEditClick = () => {
        history(`/CreateReview?id=${game.ID_Juego}`);
    };

    const editButtonId = `btn_editar_${game.ID_Juego}`;

    return (
        <div className='card-game-landing mt-2' style={{ margin:'10px', marginBottom: '10px' }}>
            <div className='row justify-content-center align-items-center mx-auto mt-4' style={{ width: '100%' }}>
                <div className='col-md-6 mt-2'>
                    <img src={decodedImageString} alt={game.Titulo} 
                         style={{ width: '90%', height: 'auto', borderRadius:'5px', maxWidth:'150px' }}/>
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-4'>{game.Titulo}</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '12px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow:'ellipsis' }}>
                        {game.Descripcion}
                    </p>
                    
                    <div className='d-flex justify-content-center align-items-center'>
                        <h4 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>{game.Valor_Calificacion}</h4>
                        <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>Reseña de: {game.Usuario}</h6>
                </div>
                <div className='col-md-12 mt-3'>
                    <h6 className='basic-text'>Reseña: {game.Reseña}</h6>
                </div>
                <div className='col-md-12 mt-3 text-center mb-3'>
                    <a onClick={handleEditClick} id={editButtonId} style={{textDecoration: 'none'}}><h4 className='ver-mas-text fs-4'>Reseñar</h4></a>
                </div>
            </div>
        </div>
    );
};

export default Card_Game;
