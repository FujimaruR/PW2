import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/review.css';
import '../css/login.css';
import '../css/resultadosBusquedaAdmin.css';
import axios from 'axios';

const Card_Game_Lista = ({ game }) => {

    const history = useNavigate();
    const location = useLocation();

    const decodedImageString = decodeURIComponent(escape(atob(game.Imagen)));

    const [listData, setListData] = useState({
        id: localStorage.getItem('userId'),
        idjuego: '',
        tipo: new URLSearchParams(location.search).get("Type")
    });

    const handleEditClick = () => {
        history(`/DetallesJuego?id=${game.ID_Juego}`);
    };
    const handleDeleteClick = () => {
        const idGame = game.ID_Juego;
        setListData(prevListData => ({
            ...prevListData,
            idjuego: idGame
        }));
        deleteLis();
    };

    // Generamos un id único para el botón de edición
    const verMas = `btn_editar_${game.ID_Juego}`;
    const eliminarLista = `btn_eliminar_${game.ID_Juego}`;

    const deleteLis = () => {
        axios.post('http://localhost:3001/deleteLista', listData)
            .then((response) => {
                console.log(response);
                alert("Juego borrado de la lista con éxito.");
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data;
                    alert(errorMessage);
                } else {
                    alert('Hubo un error al borrar de la lista. Por favor, intenta de nuevo más tarde.');
                }
            });
    };

    return (
        <div className='card-game-admin' style={{ width: '100%', height: '100%', marginBottom: '' }}>
            <div className='row justify-content-center align-items-center mx-auto'>
                <div className='col-md-6 mt-2 justify-content-center align-items-center d-flex'>
                    <img src={decodedImageString} 
                    alt={game.Titulo} style={{ width: '90%', height: 'auto', borderRadius: '5px', maxWidth: '150px' }} />
                </div>
                <div className='col-md-6 mt-3'>
                    <h5 className='basic-text fs-5'>{game.Titulo} </h5>
                    <p className='basic-text' style={{ fontWeight: '100', fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Descripción: {game.Descripcion} </p>
                    <div className='col-md-12 mt-2 '>
                        <h6 className='basic-text'>By: {game.Desarrolladora}</h6>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center mt-2 mb-2 mx-auto'>
                <div className='col-md-6 text-center mb-1'>
                    {/* Usamos un botón de HTML en lugar de ButtonSubmit */}
                    <button type="button" id={verMas} onClick={handleEditClick} className="btn_submit">Ver más detalles</button>
                </div>
                <div className='col-md-6 text-center mb-1'>
                    {/* Usamos un botón de HTML en lugar de ButtonSubmit */}
                    <button type="button" id={eliminarLista} onClick={handleDeleteClick} className="btn_submit">Eliminar de lista</button>
                </div>
            </div>
        </div>
    );
}

export default Card_Game_Lista;
