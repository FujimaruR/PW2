import React from 'react';
import Card_Game_2 from '../components/card_game_2';

const Sidebar_games = ({ gamesCalif }) => 
{
    return(
        <div className='side-bar-games' style={{ height: '100%' }}>
            <div className='row justify-content-center align-items-center mx-auto'>
                <h4 className='basic-text mt-3' style={{ marginBottom: '10px' }}>Ultimas Mejores Calificaciones: </h4>
                {gamesCalif.map((gamecalif, index) => (
                    <Card_Game_2 key={index} gamecalif={gamecalif} />
                ))}
            </div>
        </div>
    );    
}

export default Sidebar_games