import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';

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
            <nav className="navbar navbar-expand-lg text-labels">
                <a className="navbar-brand text-labels" href="/">Tilted Reviews</a>
                <span className="navbar-text text-labels">
                    {username && `¡Hola, ${username}!`}
                </span>
                <button className="btn btn-primary" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
        </div>
    );
};

export default Navbar;
