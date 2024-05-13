import React, { useState, useEffect } from 'react';
import '../css/review.css';
import '../css/login.css';
import trash from '../img/trash-can.png';
import axios from 'axios';

const List_card = ({ number }) => //componente de registro
{
    const [imagenLis, setImagenLis] = useState(null);
    const [userDataGamesLis, setUserDataGamesLis] = useState([]);

    useEffect(() => {
        const idUs = localStorage.getItem('userId');
        const idTipo = number;

            axios.get(`http://localhost:3001/listaUsuario?id=${idUs}&idTipo=${idTipo}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const userDataGamesFromAPI = response.data[0];
                setUserDataGamesLis(userDataGamesFromAPI);

                const decodedImageString = userDataGamesFromAPI.Imagen ? decodeURIComponent(escape(atob(userDataGamesFromAPI.Imagen))) : null;
                setImagenLis(decodedImageString);
            })
            .catch(error => {
                console.error('Error al obtener la información del perfil del usuario:', error);
            });

            /*axios.get(`http://localhost:3001/listaUsuario?id=${id, idTip}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const userDataFromAPI = response.data[0];
                setUserData(userDataFromAPI);

                // Decodificar la imagen después de que los datos del usuario se hayan cargado completamente
                const decodedImageString = decodeURIComponent(escape(atob(userDataFromAPI.img)));
                setImagenPerfil(decodedImageString);

                const formattedDate = new Date(userDataFromAPI.Fecha_Nacimiento).toISOString().split('T')[0];
                setfechaNac(formattedDate);
            })
            .catch(error => {
                console.error('Error al obtener la información del perfil del usuario:', error);
            });*/
    }, []);
    return(
        <div className='text-center mx-auto justify-content-center d-flex row' style={{ marginBottom: '20px', width: '80%'}}>
            <h3 className='basic-text fs-5 col-md-12 mt-1'>{userDataGamesLis && userDataGamesLis.Nombre_Tipo ? userDataGamesLis.Nombre_Tipo : 'Lista indefinida'}: </h3>
            
            <div className='list-card-user-a col-md-10 mt-2' >
                <div className='list-card-user d-flex mx-auto justify-content-center align-items-center' style={{ }}>
                    <img src={imagenLis} alt={userDataGamesLis && userDataGamesLis.Titulo ? userDataGamesLis.Titulo : 'Lista indefinida'} 
                    style={{ borderRadius: '40px', width: '90%', height: 'auto', marginTop: '10px', marginBottom: '10px' }}/>
                </div>
            </div>

            <div className='col-12 mt-3 '>
                <a style={{textDecoration: 'none'}}><h4 className='ver-mas-text fs-4'>Ver Lista</h4></a>
            </div>
            
        </div>
    );
};

export default List_card