import React from 'react';
import '../css/login.css';
import card1 from '../img/img_1.png';
import star1 from '../img/star.png';
import {Link} from 'react-router-dom';

const SideCards = () => 
{
    return(
        <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#4d4e63', height: '100%', width: '100%'}}>
            <div className='' style={{height: '30px'}}></div>
            <div className='side-card-4 '>
                <div className='side-card-3'>
                    <div className='side-card-2'>
                        <div className='side-card-1 row' style={{padding: '0px', margin: '0px'}}>
                            <div className='col-md-7 d-flex align-items-center'>
                                <img src={card1} className="img-side"/>
                            </div>
                            <div className='col-md-5 d-flex flex-column justify-content-center text-left'>
                                <h2 className="text-side">Titlted Reviews</h2><br />
                                <p className="text-side">Comparte tu opinión sobre videojuegos en el mundo.</p>
                            </div>
                            <div className='col-md-5 d-flex flex-column justify-content-center text-left'>
                                <p className="text-side">By: Tilted Team.</p>
                            </div>
                            <div className='col-md-7'></div>
                            <div className='col-md-4'></div>
                            <div className='col-md-4 d-flex justify-content-center align-items-center text-center mt-4'>
                                <h4 className="ver-mas-text">
                                    <Link to='/About' target="_blank" className="ver-mas-text">
                                        Ver más
                                    </Link>
                                </h4>
                            </div>
                            <div className='col-md-4 d-flex justify-content-center align-items-center mt-2'>
                                <h2 className="text-side mt-2" style={{display: 'inline'}}>5</h2>
                                <img src={star1} className="img-side-star" style={{display: 'inline'}}/>
                            </div>
                        </div>
                        <div className='text-center'>
                            <span className='side-card-big-text'>¡Comparte!</span>
                        </div>
                    </div>
                        <div className='text-center'>
                            <span className='side-card-big-text'>¡Descubre!</span>
                        </div>
                </div>
                    <div className='text-center'>
                        <span className='side-card-big-text'>¡Disfruta!</span>
                    </div>
            </div>
        </div>
        
    );
};

export default SideCards