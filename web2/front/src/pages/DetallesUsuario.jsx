import React from 'react';
import DetallesUsuario_Card from '../components/detalles_usuario_card';
import Navbar from '../components/navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import Error404 from './Error404.jsx';

const DetallesUsuario = () => {

    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get("id");

    const navigate = useNavigate();

    const userRole = localStorage.getItem('Rol');

 
    if(!userRole){
        navigate('/Login')
    }

    if(userRole == 2){
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Navbar />
                <Error404 errorFeo="Tu eres un administrador, no deberias estar aquí" />
            </div>
        );
    }



    if (searchParam) {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <div className='mx-auto' style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div className="row" style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px' }}>
                        <Navbar/>
                    </div>
                    <div className='row mt-5 mb-5 d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                        <DetallesUsuario_Card />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Navbar/>
                <Error404 errorFeo="No se encontró el usuario con el ID proporcionado." />
            </div>
        );
    }
};

export default DetallesUsuario;
