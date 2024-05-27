import React from 'react';
import Blackcard_review from '../components/blackcard_review';
import Navbar from '../components/navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Error404 from './Error404.jsx';

const VoteReview = () => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");


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

    if (id) {
        return (

            <div className='' style={{ width: '100%', height: '100vh', margin: '0px', padding: '0px' }}>
                <Navbar></Navbar>
                <Blackcard_review id={id} />
            </div>
        );
    }
    else {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Navbar />
                <Error404 errorFeo="No se encontró la reseña proporcionada." />
            </div>
        );
    }
};

export default VoteReview