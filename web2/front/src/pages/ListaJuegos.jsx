import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ColumnaBusqueda from '../components/search_results_juego';
import Navbar from '../components/navbar';
import Card_Game_Lista from '../components/card_game_lista.jsx'
import axios from 'axios';

const ListaJuegos = () => {

    const [imagenLis, setImagenLis] = useState(null);
    const [userDataGamesLis, setUserDataGamesLis] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        const idUs = localStorage.getItem('userId');
        const searchParam = new URLSearchParams(location.search).get("Type");

        axios.get(`http://localhost:3001/listaUsuarioBusqueda?id=${idUs}&idTipo=${searchParam}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const userDataGamesFromAPI = response.data;
                setUserDataGamesLis(userDataGamesFromAPI);

                const decodedImageString = userDataGamesFromAPI.Imagen ? decodeURIComponent(escape(atob(userDataGamesFromAPI.Imagen))) : null;
                setImagenLis(decodedImageString);
            })
            .catch(error => {
                console.error('Error al obtener la información del perfil del usuario:', error);
            });
    }, []);

    return (
        <div className='' style={{ height: '100%', width: '100%' }}>
            <Navbar></Navbar>
            <div className='container d-flex justify-content-center' style={{ height: '100%', width: '100%', minHeight: '800px', minWidth: '0px', padding: '0px', marginTop: '1rem' }}>
                <div className='col-5 fondo-busqueda'>
                    <h1 className='label-text-login mb-0'> Lista de Juegos: </h1>
                    <h1 className='label-text-login mb-4'> Terminados </h1>
                    <div className='container cards-C'>

                        <div className='card-C d-flex justify-content-center'>
                            {userDataGamesLis.map(game => (
                                <div key={game.ID_Juego} className='card-C d-flex justify-content-center'>
                                    <Card_Game_Lista game={game} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaJuegos