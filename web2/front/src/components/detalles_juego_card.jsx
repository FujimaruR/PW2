import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import Card_Game from './card_game';
import star from "../img/star.png";
import '../css/login.css';
import '../css/detallesJuego.css';
import axios from 'axios';


const NewGame_Card = () => {

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%', margin:'0px', padding:'0px'}}>
            
            <div className='container detail_card'style={{ height: '100%', width: '100%', margin:'0', padding:'0' }} >
                <div className='row h-100 justify-content-center align-items-center' style={{ height: '100%', width: '100%', minHeight: '100%', maxHeight: '100%', margin:'0', padding:'0' }}>
                    
                    <div className='col-4 mt-2 mb-2'>


                        <div className='container side-content-details justify-content-center align-items-center ' style={{ height: 'auto', width: '100%', minWidth: '50%', maxWidth:'90%'}}>
                    
                            <div className='row justify-content-center align-items-center mx-auto mt-3'>
                                <img className='side-image' src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" />
                            </div>
                        
                            <div className='row mt-5'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h4 className='basic-text mt-2' style={{ fontWeight: '400', margin: '0px' }}>5</h4>
                                    <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }}/>
                                </div>
                            </div>

                            <div className='row mt-4 d-flex justify-content-center align-items-center'>
                                <div className='col-12  text-center mb-2'>
                                    <ButtonSubmit type="button" name="btn_resenia" id="btn_resenia" value="Reseñar" />
                                </div>
                            </div>

                            <div className='row mt-2  text-center'>
                                <h2 className='basic-text ' style={{ fontSize: '120%', fontWeight:'bold'}} >Agregar a lista:</h2>
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


                        
                        <div className='container justify-content-center align-items-center' style={{ height: '100%', width: '100%', minHeight: '550px', maxHeight: '850px', margin:'0', padding:'0' }}>
                        
                            <div className='row mt-3'>
                                
                                <p className='basic-text ' style={{ fontSize: '80%'}}>
                                    VIOLENCE
                                </p>

                            </div>

                            <div className='row'>
                                
                                <h1 className='basic-text' style={{fontWeight:'bolder'}}>Team Fortress 2</h1>

                            </div>

                            <div className='row'>
                                
                                <h1 className='basic-text' style={{ fontSize: '80%'}}>MICROSOFT</h1>

                            </div>

                            <div className='row mt-3'>
                                
                                <h2 className='basic-text ' style={{ fontSize: '120%'}} >Red Dead Redemption: en 1911, agentes del gobierno secuestran a la esposa y al hijo de John Marston, un antiguo bandido. 
                                Para poder reunirse con ellos de nuevo, debe matar a tres miembros de su antigua banda que consiguieron eludir a la justicia.</h2>

                            </div>

                            <div className='row mt-3'>
                                <div className='row mb-0'>
                                    <h4 className='basic-text' style={{fontWeight:'bold'}}>Algunas Reseñas:</h4>
                                </div>

                                <div className='container mb-2 cards'>
                                    <div className='card '>
                                    </div>
                                    <div className='card '>
                                    </div>
                                    <div className='card '>
                                    </div>
                                    <div className='card '>
                                    </div>
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