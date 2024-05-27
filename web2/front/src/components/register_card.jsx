import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterCard = () => {
    const navigate = useNavigate();
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [correo, setCorreo] = useState('');
    const [gender, setGender] = useState('Masculino');

    const handleRegister = (e) => {
        e.preventDefault();

        if (!username || !password || !name || !lastName || !dateOfBirth || !correo) {
            setErrorMessage('Por favor, completa todos los campos.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
            setErrorMessage("La contraseña debe contener al menos una mayúscula y un número.");
            return;
        }

        const currentDate = new Date();
        const selectedDate = new Date(dateOfBirth);
        if (selectedDate >= currentDate) {
            setErrorMessage('La fecha de nacimiento debe ser anterior a la fecha actual.');
            return;
        }

        if (!correo.includes('@') || !correo.includes('.com')) {
            setErrorMessage('Por favor, introduce un correo electrónico válido.');
            return;
        }


        if (!imagenPerfil) {
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, selecciona una imagen para el juego.',
                icon: 'error'
            });
            return;
        }

        setErrorMessage('');
        registerUser();
    };

    const registerUser = () => {
        axios.post('http://localhost:3001/register', {
            usuario: username,
            contraseña: password,
            nombre: name,
            apellidoP: lastName,
            fechaNacimiento: dateOfBirth,
            genero: gender,
            correo: correo,
            imagenPerfil: imagenPerfil
        })
        .then((response) => {
            console.log(response);
            if (response.data.alert === 'Success') {
                const { username, id } = response.data;
                localStorage.setItem('userData', JSON.stringify(username));
                localStorage.setItem('userId', JSON.stringify(id));
                navigate('/LandingPage');
            } else {
                //alert(response.data.alert);
                Swal.fire({
                    title: '¡Error!',
                    text: response.data.alert,
                    icon: 'error'
                });
            }
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
                //alert('Hubo un error al registrar el usuario. Por favor, intenta de nuevo más tarde.');
                Swal.fire({
                    title: '¡Error!',
                    text: 'Hubo un error al registrar el usuario. Por favor, intenta de nuevo más tarde.',
                    icon: 'error'
                });
            }
        });
    };

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            navigate('/LandingPage');
        }
    }, []);

    const ChangeImagen = (event) => {
        const archivo = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64Image = reader.result;
            setImagenPerfil(base64Image);
        };

        if (archivo) {
            reader.readAsDataURL(archivo);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#2c2b3d', height: '100%', width: '100%' }}>
            <div className='' style={{ height: '30px' }}></div>
            <div className='container login_card'>
                <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }} onSubmit={handleRegister}>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <LabelText text="Foto de Perfil:" id="text-pc" />
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
                            <LabelText text="Apellidos:" id="text-pc" />
                            <LabelText text="Fecha de Nacimiento:" id="text-pc" />
                            <LabelText text="Correo Electrónico:" id="text-pc" />
                            <LabelText text="Género:" id="text-pc" />
                        </div>
                        <div className='col-md-6 mt-0'>
                            <LabelText text="Nombre de usuario:" id="text-mb" />
                            <InputText type="text" name="user" id="user" placeholder="Inserte su nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <LabelText text="Contraseña:" id="text-mb" />
                            <InputText type="password" name="pass" id="pass" placeholder="Inserte su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <LabelText text="Nombre:" id="text-mb" />
                            <InputText type="text" name="name" id="name" placeholder="Inserte su nombre" value={name} onChange={(e) => setName(e.target.value)} />
                            <LabelText text="Apellidos:" id="text-mb" />
                            <InputText type="text" name="lastname" id="lastname" placeholder="Inserte sus apellidos" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <LabelText text="Fecha de Nacimiento:" id="text-mb" />
                            <InputText type="date" name="date" id="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                            <LabelText text="Correo electrónico:" id="text-mb" />
                            <InputText type="text" name="correo" id="correo" placeholder="Inserte su correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <select className='Combo-Box' value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-12 text-center mb-3 mt-5'>
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Registrarse" />
                    </div>
                    {errorMessage && <div className="col-md-12 text-center text-danger">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default RegisterCard;
