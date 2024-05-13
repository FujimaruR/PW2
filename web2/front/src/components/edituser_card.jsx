import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Edituser_card = () => {
    const navigate = useNavigate();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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
        // Hacer la solicitud GET al endpoint para obtener los datos del perfil
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

    const ChangeImagen = (event) => {
        const archivo = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64Image = reader.result;
            console.log(base64Image);
            setImagenPerfil(base64Image);
        };

        if (archivo) {
            reader.readAsDataURL(archivo);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar que todos los campos de texto necesarios estén llenos
        const allFieldsFilled = Object.values(userData).every(value => value !== '');
        if (!allFieldsFilled) {
            setShowErrorMessage(true);
            return;
        }
        // Crear un objeto con los datos actualizados del usuario
        const updatedUserData = {
            ...userData,
            img: imagenPerfil,
        };

        // Enviar una solicitud POST al servidor con los datos actualizados
        axios.post('http://localhost:3001/editarUsuario', updatedUserData)
            .then(response => {
                console.log('Datos de usuario editados con éxito:', response.data);
                //alert("Se ha modificado el perfil exitosamente");
                Swal.fire({
                    title: "¡Perfil modificado!",
                    text: "Se ha modificado el perfil exitosamente",
                    icon: "success"
                });
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data;
                    //alert(errorMessage);
                    Swal.fire({
                        title: '¡Error!',
                        text: errorMessage,
                        icon: 'error'
                    });
                } else {
                    //alert('Hubo un error al modificar el usuario. Por favor, intenta de nuevo más tarde.');
                    Swal.fire({
                        title: '¡Error!',
                        text: 'Hubo un error al modificar el usuario. Por favor, intenta de nuevo más tarde.',
                        icon: 'error'
                    });
                }
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>
            <div className='' style={{ height: '30px' }}></div>
            <div className='container login_card'>
                <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }} onSubmit={handleSubmit}>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <LabelText text="Cambiar foto de perfil:" id="text-pc" />
                        </div>
                        <div className='col-6'>
                            <LabelText text="Foto de Perfil:" id="text-mb" />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='col-md-6 text-left mt-3'>
                            <div className='mb-6'>
                                <label htmlFor="img" style={{ cursor: 'pointer' }} id="text-pc">
                                    <img src={img4} style={{ width: '40%', height: 'auto', marginRight: '30px' }} />
                                    <img src={img2} style={{ width: '25%', height: 'auto', marginLeft: '30px' }} />
                                </label>
                                <input type="file" name="img" id="img" style={{ display: 'none' }} onChange={ChangeImagen} />
                            </div>
                        </div>
                        <div className='col-md-6 mt-0'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <label htmlFor="img" style={{ cursor: 'pointer', minWidth: '45%' }} className='d-flex justify-content-center align-items-center'>
                                    <img src={imagenPerfil ? imagenPerfil : img3} style={{ width: '50%', height: 'auto' }} className='mb-3' />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-0'>
                        <div className='col-md-6 text-left mt-0'>
                            <LabelText text="Nombre de usuario:" id="text-pc" />
                            <LabelText text="Contraseña:" id="text-pc" />
                            <LabelText text="Nombre:" id="text-pc" />
                            <LabelText text="Apellidos :" id="text-pc" />
                            <LabelText text="Fecha de Nacimiento:" id="text-pc" />
                            <LabelText text="Correo Electrónico:" id="text-pc" />
                            <LabelText text="Género:" id="text-pc" />
                        </div>
                        <div className='col-md-6 mt-0'>
                            <LabelText text="Nombre de usuario:" id="text-mb" />
                            <InputText
                                type="text"
                                name="user"
                                id="user"
                                value={userData.Usuario}
                                onChange={(e) => setUserData({ ...userData, Usuario: e.target.value })}
                            />
                            <LabelText text="Contraseña:" id="text-mb" />
                            <InputText
                                type="password"
                                name="pass"
                                id="pass"
                                value={userData.Contraseña}
                                onChange={(e) => setUserData({ ...userData, Contraseña: e.target.value })}
                            />
                            <LabelText text="Nombre:" id="text-mb" />
                            <InputText
                                type="text"
                                name="name"
                                id="name"
                                value={userData.Nombre}
                                onChange={(e) => setUserData({ ...userData, Nombre: e.target.value })}
                            />

                            <LabelText text="Apellidos" id="text-mb" />
                            <InputText
                                type="text"
                                name="lastname"
                                id="lastname"
                                value={userData.Apellido_P}
                                onChange={(e) => setUserData({ ...userData, Apellido_P: e.target.value })}
                            />


                            <LabelText text="Fecha de Nacimiento:" id="text-mb" />
                            <InputText
                                type="date"
                                name="date"
                                id="date"
                                value={userData.Fecha_Nacimiento ? userData.Fecha_Nacimiento.substring(0, 10) : ''}
                                onChange={(e) => setUserData({ ...userData, Fecha_Nacimiento: e.target.value })}
                            />

                            <LabelText text="Correo electronico:" id="text-mb" />
                            <InputText
                                type="text"
                                name="correo"
                                id="correo"
                                value={userData.Correo_Electronico}
                                onChange={(e) => setUserData({ ...userData, Correo_Electronico: e.target.value })}
                            />

                            <select
                                className='Combo-Box'
                                value={userData.Genero}
                                onChange={(e) => setUserData({ ...userData, Genero: e.target.value })}
                            >
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>

                        </div>
                    </div>

                    <div className='col-md-12 text-center mb-0 mt-3'>
                        {showErrorMessage && <p style={{ color: 'red' }}>Por favor llene todos los campos</p>}
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Editar" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edituser_card;
