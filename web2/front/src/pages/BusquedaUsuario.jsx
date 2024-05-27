import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ColumnasBusqueda from '../components/search_results_user';
import Navbar from '../components/navbar';
import axios from 'axios';
import Card_Game_Search from '../components/card_game_search';
import Card_User_Search from '../components/card_user_search';
import '../css/resultadosBusqueda.css';

const ResultadosBusqueda = () => 
{
    const [games, setGames] = useState([]);
    const [users, setUsers] = useState([]);
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


        axios.get(`http://localhost:3001/busquedaUsuario?juego=${searchParam}`)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error al cargar los juegos:', error);
            });
    }, [searchParam]);

    return(
        <div className='' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>

            <div className=' mx-auto' style={{width: '100%', height: '100%', position: 'relative'}}>
            
                <div className="row  " style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px'}}>
                    <Navbar></Navbar>
                </div>

                <div className='row mt-5 mb-5 d-flex align-items-top justify-content-center' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>
                
                    
                        
                        <div className='col-5 fondo-busqueda'>
                            <h1 className='label-text-login mb-4' > Juegos: </h1>

                            <div className='container cards-B '>

                                {games.map(game => (
                                    
                                    <div key={game.ID_Juego} className='card-B d-flex justify-content-center'>
                                        <Card_Game_Search game={game} />
                                    </div>
                                
                                ))}
                                
                            </div>

                        </div>

                        <div className='col-5 fondo-busqueda'>
                            <h1 className='label-text-login mb-4' > Usuarios: </h1>

                            <div className='container cards-B '>
                                
                                {users.map(users => (
                                    <div key={users.ID_Usuario} className='card-B d-flex justify-content-center'>
                                        <Card_User_Search users={users} />
                                    </div>
                                ))}
                                
                            </div>

                        </div>

                    
            
                </div>


            </div>
            
        </div>
    );
};

export default ResultadosBusqueda