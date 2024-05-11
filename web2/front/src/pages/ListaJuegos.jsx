import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ColumnaBusqueda from '../components/search_results_juego';
import Navbar from '../components/navbar';
import Card_Game_Lista from '../components/card_game_lista.jsx'
import axios from 'axios';

const ListaJuegos = () => 
{
    return (
        <div className='' style={{ height: '100%', width: '100%'}}>
            <Navbar></Navbar>
            <div className='container d-flex justify-content-center' style={{ height: '100%', width: '100%', minHeight: '800px', minWidth: '0px', padding: '0px', marginTop:'1rem' }}>
                <div className='col-5 fondo-busqueda'>
                    <h1 className='label-text-login mb-0'> Lista de Juegos: </h1>
                    <h1 className='label-text-login mb-4'> Terminados </h1>
                    <div className='container cards-C'>
                        
                        <div className='card-C d-flex justify-content-center'>
                            <Card_Game_Lista />
                        </div>

                        <div className='card-C d-flex justify-content-center'>
                            <Card_Game_Lista />
                        </div>

                        <div className='card-C d-flex justify-content-center'>
                            <Card_Game_Lista />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaJuegos