import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../css/review.css';
import '../css/login.css';
import '../css/resultadosBusquedaAdmin.css';

const Card_Game_Search = ({ game }) => {
    const history = useNavigate();

    const decodedImageString = decodeURIComponent(escape(atob(game.Imagen)));

    const handleEditClick = () => {
        history(`/DetallesJuego?id=${game.ID_Juego}`);
    };

    // Generamos un id único para el botón de edición
    const verMas = `btn_editar_${game.ID_Juego}`;

    return (
        <div className='card-game-admin' style={{ width: '100%', height: '100%', marginBottom: '', minHeight:'250px' }}>
            <div className='row justify-content-center align-items-center mx-auto'>
                <div className='col-md-6 mt-2 justify-content-center align-items-center d-flex'>
                    <img src={decodedImageString} alt={game.Titulo} style={{ width: '90%', height: 'auto', borderRadius: '5px', maxWidth: '150px', minHeight:'150px', maxHeight:'200px' }} />
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'>{game.Titulo}</h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Descripción: {game.Descripcion}</p>
                    <div className='col-md-12 mt-2 '>
                        <h6 className='basic-text'>By: {game.Desarrolladora}</h6>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center mt-2 mb-2 mx-auto'>
                <div className='col-md-12 text-center mb-1'>
                    {/* Usamos un botón de HTML en lugar de ButtonSubmit */}
                    <button type="button" id={verMas} onClick={handleEditClick} className="btn btn-secondary">Ver Más</button>
                </div>
            </div>
        </div>
    );
}

export default Card_Game_Search;
