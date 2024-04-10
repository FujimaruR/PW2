import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import Card_Game from './card_game';
import Card_Game_Info from './card_game_user';
import User_Name_Card from './user_name_card';
import '../css/login.css';
import '../css/detallesJuego.css';
import '../css/resultadosBusqueda.css';
import axios from 'axios';


const Columnas_Busqueda = () => {

    return (
        <div className='' style={{height: '100%', width: '100%'}}>
            
            <div className='container d-flex justify-content-center ' style={{height: '100%', width: '100%', minHeight:'800px', minWidth:'0px',  padding:'0px'}}>

                <div className='col-4 fondo-busqueda'>
                    <h1 className='label-text-login mb-4' > Videojuegos: </h1>

                    <div className='container cards-B '>
                        <div className='card-B d-flex justify-content-center' >
                            <Card_Game_Info/>
                        </div>
                    </div>

                </div>

                <div className='col-4 fondo-busqueda'>
                    <h1 className='label-text-login mb-4' > Reseñas: </h1>

                    <div className='container cards-B '>
                        <div className='card-B d-flex justify-content-center'>
                            <Card_Game></Card_Game>                                  
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <Card_Game></Card_Game>                                  
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <Card_Game></Card_Game>                                  
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <Card_Game></Card_Game>                                  
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <Card_Game></Card_Game>                                  
                        </div>
                    </div>
                </div>

                <div className='col-4 fondo-busqueda'>
                    <h1 className='label-text-login mb-4' > Usuarios: </h1>
                    <div className='container cards-B '>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                        <div className='card-B d-flex justify-content-center'>
                            <User_Name_Card/>
                        </div>
                    </div>
                </div>

            </div>

                 
        </div>
    );
};

export default Columnas_Busqueda;