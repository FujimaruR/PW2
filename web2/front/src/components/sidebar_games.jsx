import React from 'react';
import '../css/review.css';
import '../css/login.css';
import star from "../img/star.png";

const Sidebar_games = ({ gamecalif }) => {

    const decodedImageString = decodeURIComponent(escape(atob(gamecalif.Imagen)));

    return (
        <div className='side-bar-games' style={{ height: '100%' }}>
            <div className='row justify-content-center align-items-center mx-auto'>
                <h4 className='basic-text mt-3' style={{ marginBottom: '10px' }}>Videojuegos mejor calificados: </h4>
                <div className='card-game-2-landing mt-4' style={{ width: '100%', height: '100%', marginBottom: '20px' }}>
                    <div className='row justify-content-center align-items-center mx-auto'>
                        <div className='col-md-6 mt-2 justify-content-center align-items-center d-flex'>
                            <img src={decodedImageString} alt={gamecalif.Titulo}
                                style={{ width: '90%', height: 'auto', borderRadius: '5px', maxWidth: '150px' }} />
                        </div>
                        <div className='col-md-6 mt-3'>
                            <h5 className='basic-text fs-5'>{gamecalif.Titulo}</h5>
                            <p className='basic-text' style={{ fontWeight: '100', fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                {gamecalif.Descripcion}
                            </p>
                            <div className='d-flex justify-content-center align-items-center' style={{ marginBottom: '5px' }}>
                                <h5 className='basic-text' style={{ fontWeight: '400', margin: '0px' }}>{gamecalif.Valor_Calificacion}</h5>
                                <img src={star} alt="Star" width={'20'} height={'20'} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar_games