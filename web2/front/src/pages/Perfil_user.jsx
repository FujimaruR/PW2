import React, { useState, useEffect } from 'react';
import Img_Card_User from '../components/img_card_user';
import Card_Review_User from '../components/card_review_user';
import List_card from '../components/list_card';
import img_1 from '../img/img_1.png';
import LabelText from '../components/label_text';
import InputText from '../components/input_text';
import ButtonSubmit from '../components/button_submit';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error404 from './Error404.jsx';

const StyledBody = styled.body`
    background-color: black !important;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Perfil_user = () =>
{
    /*const [showErrorMessage, setShowErrorMessage] = useState(false);*/
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [userData, setUserData] = useState({
        img: imagenPerfil,
        id: localStorage.getItem('userId'),
        Usuario: '',
        Contraseña: '',
        Nombre: '',
        Apellido_P: '',
        Fecha_Nacimiento: '',
        Correo_Electronico: '',
        Genero: ''
    });

    const id = localStorage.getItem('userId');


    useEffect(() => {
        axios.get(`http://localhost:3001/perfilUsuario?id=${id}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const userDataFromAPI = response.data[0];
                setUserData(userDataFromAPI);

                // Decodificar la imagen después de que los datos del usuario se hayan cargado completamente
                const decodedImageString = decodeURIComponent(escape(atob(userDataFromAPI.img)));
                setImagenPerfil(decodedImageString);
            })
            .catch(error => {
                console.error('Error al obtener la información del perfil del usuario:', error);
            });
    }, []);


     
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




    return(
        <StyledBody>
        <div className='' style={{width: '100%', height: '100%', margin: '0px !important;', padding: '0px'}}>
            <Navbar></Navbar>
            
            <div className='container justify-content-center align-items-center mx-auto porfile_card' style={{ padding: '0px', marginTop: '10px' }}>
                <div className='row justify-content-center mx-auto d-flex' style={{width: '100%',  padding: '0px', margin:'0px'}}>
                    
                    <div className='col-md-12 row mt-3'>
                        <div className='col-md-2 text-center mt-2'>
                            <img src={imagenPerfil ? imagenPerfil : img_1} style={{ width: '60%', height: 'auto' }} />
                        </div>
                        <div className='col-md-7 row mt-2'>
                            <div className='col-md-12 d-flex'>
                                <LabelText text='Nombre de Usuario:'/>
                                <InputText type='text' value={userData.Usuario} />
                            </div>
                           
                            <div className='col-md-12 d-flex'>
                                <LabelText text='Fecha de Nacimiento:'/>
                                <InputText type='date' value={userData.Fecha_Nacimiento} />
                            </div>

                            <div className='col-md-12 d-flex '>
                                <LabelText text='Sexo:'/>
                                <select className='Combo-Box' value={userData.Genero} >
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 text-center mt-2'>
                            <ButtonSubmit type='button' value='Editar'/><br />
                            <ButtonSubmit type='button' value='Volver'/>
                        </div>
                    </div>

                    <div className='col-md-3 mt-2' style={{ backgroundColor: '#2c2b3d', borderRadius: '20px', minHeight: '100%', marginBottom: '20px', marginRight: '2px', marginLeft: '7px' }}>
                        <h2 className='basic-text fs-4 mt-3' style={{marginBottom: '20px'}}>Reseña más reciente:</h2>
                        <div className='card-new-review-user justify-content-center align-items-center mx-auto d-flex row' >
                            <div className='col-md-12 justify-content-center align-items-center  d-flex'>
                                <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" 
                                style={{ width: '97%', height: 'auto', borderRadius:'10px', marginTop: '5px' }}/>
                            </div>
                            <div className='col-md-12'>
                                <h2 className='basic-text fs-4 mt-3'>Team Fortress 2</h2>
                                <p className='basic-text fs-5'>Buen juego...</p>
                                <p className='basic-text fs-5'>Reseña de: AAAAAAA-AAA</p>
                            </div>
                        </div>
                    </div>

                    <div  className='col-md-9 row mt-2' style={{ marginBottom: '20px', marginLeft: '3px'}}>
                        <div className='col-md-12 row section_perfil'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h2 className='basic-text fs-4 mt-3'>Juegos favoritos:</h2>
                                </div>
                                <div className='col-6'>
                                    <a style={{textDecoration: 'none'}}><h4 className='ver-mas-text fs-4'>Ver Más</h4></a>
                                </div>
                            </div>
                            
                            <div className='col-md-4'>
                                <Img_Card_User></Img_Card_User>
                            </div>
                            <div className='col-md-4'>
                                <Img_Card_User></Img_Card_User>
                            </div>
                            <div className='col-md-4'>
                                <Img_Card_User></Img_Card_User>
                            </div>
                        </div>

                        <div className='col-md-12 row section_perfil mt-3'>
                            <h2 className='basic-text fs-4 mt-3'>Reseñas favoritas:</h2>
                            <div className='col-md-4'>
                                <Card_Review_User></Card_Review_User>
                            </div>
                            <div className='col-md-4'>
                                <Card_Review_User></Card_Review_User>
                            </div>
                            <div className='col-md-4'>
                                <Card_Review_User></Card_Review_User>
                            </div>
                        </div>

                        <div className='col-md-12 row section_perfil mt-3'>
                            <h2 className='basic-text fs-4 mt-3'>Listas:</h2>
                            <div className='col-md-4'>
                                <List_card></List_card>
                            </div>
                            <div className='col-md-4'>
                                <List_card></List_card>
                            </div>
                            <div className='col-md-4'>
                                <List_card></List_card>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
           
        </div>
        </StyledBody>
    );
};

export default Perfil_user