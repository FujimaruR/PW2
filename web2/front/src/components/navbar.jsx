import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
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

    return (
        <div className='Nav-Bar'>
            <nav className="navbar navbar-expand-lg text-labels ">
                <img src={img_1} alt="" style={{ width:'3%', height:'auto' }}/>
                <a className="navbar-brand text-labels" href="/">Tilted Reviews</a>

                <input type="text" name="" id="" className='input-search-nav' placeholder='¿Buscando algún juego o usuario en especifico?'/>
                <button type="button" className='button-search-nav'>
                    <img src={lupa} alt="" style={{ width:'100%', height:'auto' }} />
                </button>

                <span className="navbar-text text-labels">
                    {username && `¡Hola, ${username}!`}
                </span>
                <button className="btn btn-primary btn-search-1" onClick=''>Mi perfil</button>
                <button className="btn btn-primary btn-search-1" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
        </div>
    );
};

export default Navbar;
