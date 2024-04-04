import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import '../css/login.css';
import img_1 from '../img/img_1.png';
import lupa from '../img/lupa.png';

const Navbar = () => {
    const username = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar datos del localStorage
        localStorage.removeItem('userData');
        // Redirigir a otra página
        navigate('/Login');
    };

    //    <span className="navbar-text text-labels">
    //      {username && `¡Hola, ${username}!`}
    //    </span>

    return (
        <div className='Nav-Bar'>
            <nav className="navbar navbar-expand-lg text-labels">
                <div className='col-2'>
                    <img src={img_1} alt="" style={{ width:'15%', height:'auto' }}/>
                    <a className="navbar-brand text-labels" href="/">Tilted Reviews</a>
                </div>

                <div className='col-8 col-sm-6  d-flex justify-content-center align-items-center ' style={{ paddingLeft: '15%' }} >
                    <input type="text" name="" id="" className='input-search-nav' style={{ width: '80%' }} placeholder='¿Buscando algún juego o usuario en especifico?'/>
                    <button type="button" className='button-search-nav'>
                        <img src={lupa} alt="" style={{ width:'100%', height:'auto' }} />
                    </button>
                </div>

                
                <div className='d-flex col-2 col-sm-4 justify-content-end'>
                    <button className="btn_submit mx-2" onClick=''>Mi perfil</button>
                    <button className="btn_submit mx-2" onClick={handleLogout}>Cerrar Sesión</button>
                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;
