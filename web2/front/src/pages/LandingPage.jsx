import React from 'react';
import Navbar from '../components/navbar';
import Card_Game from '../components/card_game';
import Sidebar_games from '../components/sidebar_games';

const LandingPage = () => 
{
    return(
     <div className='col-12 col-md-12 Fondo row' style={{ margin: '0px' }}> 
        <Navbar></Navbar>
        <div className='container col-md-9 d-flex flex-column'>
            
            <h4 className='basic-text mt-3'>Reseñas más recientes: </h4>
            <div className='row mt-3'>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
            </div>

            <h4 className='basic-text mt-3'>Reseñas más populares: </h4>
            <div className='row mt-3'>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
                <Card_Game className='col-md-4 mt-3'></Card_Game>
            </div>
        </div>

        <div className='col-md-3 d-flex' style={{ padding: '0px',}}>
            <div className="flex-grow-1" style={{ }}>
                <Sidebar_games></Sidebar_games>
            </div>
        </div>
     
     </div>
    );
};

export default LandingPage