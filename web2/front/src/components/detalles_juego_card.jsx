import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import Card_Game from './card_game';
import star from "../img/star.png";
import '../css/login.css';
import '../css/detallesJuego.css';

import axios from 'axios';


const NewGame_Card = () => {

    const history = useNavigate();

    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get("id");
    const idUsuario = localStorage.getItem('id');
    const [imagenGame, setImagenGame] = useState([]);
    const [gameData, setGameData] = useState({
        searchedGame: searchParam
    });

    const [reviewData, setReviewData] = useState([]);




    const handleReview = () => {
        history(`/CreateReview?id=${gameData.ID_Juego}`);
    };


    useEffect(() => {

        axios.get(`http://localhost:3001/lastReviewGame?id=${searchParam}`)
            .then(response => {
                setReviewData(response.data);
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });


        // Hacer la solicitud GET al endpoint para obtener los datos del juego
        axios.get(`http://localhost:3001/DetallesJuego?id=${searchParam}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const gameDataFromAPI = response.data[0];
                setGameData(gameDataFromAPI);

                // Decodificar la imagen después de que los datos del usuario se hayan cargado completamente
                const decodedImageString = decodeURIComponent(escape(atob(gameDataFromAPI.Imagen)));
                setImagenGame(decodedImageString);

            })
            .catch(error => {
                console.error('Error al obtener la información del juego:', error);
            });
    }, []);


    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%', margin: '0px', padding: '0px' }}>

            <div className='container detail_card' style={{ height: '100%', width: '100%', margin: '0', padding: '0' }} >
                <div className='row h-100 justify-content-center align-items-center' style={{ height: '100%', width: '100%', minHeight: '100%', maxHeight: '100%', margin: '0', padding: '0' }}>

                    <div className='col-4 mt-2 mb-2'>


                        <div className='container side-content-details justify-content-center align-items-center ' style={{ height: 'auto', width: '100%', minWidth: '50%', maxWidth: '90%' }}>

                            <div className='row justify-content-center align-items-center mx-auto mt-3'>
                                <img className='side-image' src={imagenGame} alt="" />
                            </div>

                            <div className='row mt-5'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='basic-text mt-2' style={{ fontWeight: '400', margin: '0px' }}>{parseFloat(gameData.Promedio_Calificacion).toFixed(1)}</h4>
                                    <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }} />
                                </div>
                            </div>

                            <div className='row mt-4 d-flex justify-content-center align-items-center'>
                                <div className='col-12  text-center mb-2'>
                                    <button type="button" name="btn_resenia" id="btn_resenia" value="Reseñar" className="btn_submit" onClick={handleReview}>  Reseñar </button>
                                </div>
                            </div>

                            <div className='row mt-2  text-center'>
                                <h2 className='basic-text ' style={{ fontSize: '120%', fontWeight: 'bold' }} >Agregar a lista:</h2>
                            </div>

                            <div className='row mt-1 d-flex justify-content-center align-items-center'>

                                <div className='col-6  text-center mb-0'>
                                    <ButtonSubmit type="submit" name="btn_agregarFav" id="btn_agregarFav" value="Favoritos" />
                                </div>
                                <div className='col-6  text-center mb-0'>
                                    <ButtonSubmit type="submit" name="btn_agregarTerminado" id="btn_agregarTerminado" value="Terminados" />
                                </div>

                            </div>


                            <div className='row mt-2 d-flex justify-content-center align-items-center'>

                                <div className='col-6  text-center mb-2'>
                                    <ButtonSubmit type="submit" name="btn_agregarBack" id="btn_agregarBack" value="Backlog" />
                                </div>

                                <div className='col-6  text-center mb-2'>
                                    <ButtonSubmit type="submit" name="btn_agregarAbandonado" id="btn_agregarAbandonado" value="Abandonados" />
                                </div>

                            </div>


                        </div>



                    </div>

                    <div className='col-8'>



                        <div className='container justify-content-center align-items-center' style={{ height: '100%', width: '100%', minHeight: '550px', maxHeight: '850px', margin: '0', padding: '0' }}>

                            <div className='row mt-3'>

                                <p className='basic-text ' style={{ fontSize: '80%' }}>
                                    Categoria:  <b>{gameData.Nombre_Categoria} </b>
                                </p>

                            </div>

                            <div className='row'>

                                <h1 className='basic-text' style={{ fontWeight: 'bolder' }}>{gameData.Titulo}</h1>

                            </div>

                            <div className='row'>

                                <h1 className='basic-text' style={{ fontSize: '80%' }}> Desarolladora: <b>{gameData.Desarrolladora}</b></h1>

                            </div>

                            <div className='row'>

                                <h1 className='basic-text' style={{ fontSize: '80%' }}> Publicadora: <b>{gameData.Nombre_Publicadora}</b></h1>

                            </div>

                            <div className='row mt-3'>

                                <h2 className='basic-text ' style={{ fontSize: '120%' }} >Descripción del juego: <b>{gameData.Descripcion}</b></h2>

                            </div>

                            <div className='row mt-3'>
                                <div className='row mb-0'>
                                    <h4 className='basic-text' style={{ fontWeight: 'bold' }}>Algunas Reseñas:</h4>
                                </div>

                                <div className='container mb-2 cards flex-row d-flex'>
                                    {reviewData.map(game => (
                                        <div key={game.ID_Juego} className='flex-row justify-content-center'>
                                            <Card_Game game={game} />
                                        </div>
                                    ))}
                                </div>

                            </div>





                        </div>



                    </div>






                </div>
            </div>
        </div>
    );
};

export default NewGame_Card;