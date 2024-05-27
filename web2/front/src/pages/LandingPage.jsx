import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Card_Game from '../components/card_game';
import Card_Game_Likes from '../components/card_game_likes';
import Sidebar_games from '../components/sidebar_games';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LandingPage = () => {
    const [games, setGames] = useState([]);
    const [gamesLikes, setGamesLikes] = useState([]);
    const [gamesCalif, setGamesCalif] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/landingGames')
            .then(response => {
                setGames(response.data); // Asumimos que la respuesta es un array de juegos
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });


            axios.get('http://localhost:3001/landingGamesLikes')
            .then(response => {
                setGamesLikes(response.data); // Asumimos que la respuesta es un array de juegos
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });

            axios.get('http://localhost:3001/landingGamesCalif')
            .then(response => {
                setGamesCalif(response.data); // Asumimos que la respuesta es un array de juegos
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });
    }, []);

    return(
        <div className='col-12 col-md-12 Fondo row' style={{ margin: '0px' }}>
            <Navbar />
            <div className='container col-md-9 d-flex flex-column'>
                
                <h4 className='basic-text mt-3'>Reseñas más recientes: </h4>
                <div className='row mt-3'>
                    {games.map((game, index) => (
                        <Card_Game key={index} game={game} className='col-md-4 mt-3' />
                    ))}
                </div>

                <h4 className='basic-text mt-3'>Reseñas más populares: </h4>
                <div className='row mt-3'>
                    {gamesLikes.map((gamelike, indexu) => (
                        <Card_Game_Likes key={indexu} gamelike={gamelike} className='col-md-4 mt-3' />
                    ))}
                </div>
            </div>

            <div className='col-md-3 d-flex' style={{ padding: '0px', margin:'0px', height:'941px'}}>
                <div className="flex-grow-1">
                    <Sidebar_games gamesCalif={gamesCalif} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;