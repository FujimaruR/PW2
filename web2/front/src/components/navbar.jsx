import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import '../css/login.css';
import img_1 from '../img/img_1.png';
import lupa from '../img/lupa.png';

const Navbar = () => {
    const username = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const Rol = localStorage.getItem('Rol');

    const handleLogout = () => {
        // Eliminar datos del localStorage
        localStorage.clear();
        // Redirigir a otra página
        navigate('/Login');
    };

    const handleSearch = () => {
        const searchText = document.getElementById('search').value
        // Redirigir a la página de búsqueda con el parámetro de búsqueda
       if( Rol == 2){
        navigate(`/BusquedaAdmin?juego=${searchText}`);
       }
    else
    {
        navigate(`/BusquedaUsuario?juego=${searchText}`);
    }
    };

    const handleProfile = () => {
        if (Rol == 2){
        navigate('/EditPerfil');
        }
        else{
            navigate('/Perfil_user')
        }
    };


    //    <span className="navbar-text text-labels">
    //      {username && `¡Hola, ${username}!`}
    //    </span>

    return (
        <div className='Nav-Bar'>
            <nav className="navbar navbar-expand-lg text-labels">
                <div className='col-2'>
                    <img src={img_1} alt="" style={{ width: '15%', height: 'auto' }} />
                    <a className="navbar-brand text-labels" href="/">Tilted Reviews</a>
                </div>

                <div className='col-8 col-sm-6  d-flex justify-content-center align-items-center ' style={{ paddingLeft: '15%' }} >

                    {localStorage.getItem('Rol') !== '1' ? (
                        <input
                            type="text"
                            name=""
                            id="search"
                            className="input-search-nav"
                            style={{ width: '80%' }}
                            placeholder="Buscar juego a editar o eliminar"
                        />
                    ) : (
                        <input
                            type="text"
                            name=""
                            id="search"
                            className="input-search-nav"
                            style={{ width: '80%' }}
                            placeholder="¿Buscando algún juego o usuario en específico?"
                        />
                    )}
                   <button type="button" className='button-search-nav' onClick={handleSearch}>
                        <img src={lupa} alt="" style={{ width: '100%', height: 'auto' }} />
                    </button>
                </div>


                <div className='d-flex col-2 col-sm-4 justify-content-end'>
                    
                {localStorage.getItem('Rol') !== '1' ? (
                       <button className="btn_submit mx-2" onClick={handleProfile}>Editar Perfil</button>
                    ) : (
                        <button className="btn_submit mx-2" onClick={handleProfile}>Mi Perfil</button>
                    )}
                    
                    
                    <button className="btn_submit mx-2" onClick={handleLogout}>Cerrar Sesión</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
