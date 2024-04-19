import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ColumnaBusqueda from '../components/search_results_juego';
import Navbar from '../components/navbar';
import Card_Game_Admin from '../components/card_game_admin.jsx'
import axios from 'axios';

const BusquedaJuego = () => 
{
    const [games, setGames] = useState([]);
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get("juego");
    
    useEffect(() => {
        // Realizar la solicitud al servidor para obtener los juegos que coincidan con el parámetro de búsqueda
        axios.get(`http://localhost:3001/busqueda?juego=${searchParam}`)
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('Error al cargar los juegos:', error);
            });
    }, [searchParam]);

    return (
        <div className='' style={{ height: '100%', width: '100%'}}>
            <Navbar></Navbar>
            <div className='container d-flex justify-content-center' style={{ height: '100%', width: '100%', minHeight: '800px', minWidth: '0px', padding: '0px', marginTop:'1rem' }}>
                <div className='col-5 fondo-busqueda'>
                    <h1 className='label-text-login mb-4'> Resultados de la busquéda: </h1>
                    <div className='container cards-C'>
                        {games.map(game => (
                            <div key={game.ID_Juego} className='card-C d-flex justify-content-center'>
                                <Card_Game_Admin game={game} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusquedaJuego