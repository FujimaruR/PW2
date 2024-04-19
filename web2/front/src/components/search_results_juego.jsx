import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import Card_Game_Admin from './card_game_admin';
import '../css/login.css';
import '../css/detallesJuego.css';
import '../css/resultadosBusqueda.css';
import '../css/resultadosBusquedaAdmin.css';
import axios from 'axios';


const Busqueda_Juegos = () => {

    return (
        <div className='' style={{height: '100%', width: '100%'}}>
            
            <div className='container d-flex justify-content-center ' style={{height: '100%', width: '100%', minHeight:'800px', minWidth:'0px',  padding:'0px'}}>

                <div className='col-5 fondo-busqueda'>
                    <h1 className='label-text-login mb-4' > Videojuegos: </h1>

                    <div className='container cards-C '> 
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                        <div className='card-C d-flex justify-content-center' >
                            <Card_Game_Admin/>
                        </div>
                    </div>

                </div>

            </div>

                 
        </div>
    );
};

export default Busqueda_Juegos;