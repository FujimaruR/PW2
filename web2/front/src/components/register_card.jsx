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
    // Agregar un nuevo estado para el género
    const [gender, setGender] = useState('Masculino');

    const handleRegister = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!username || !password || !name || !lastName || !dateOfBirth) {
            setErrorMessage('Por favor, completa todos los campos.');
            return;
        }

        // Validar que la contraseña tenga una longitud mínima
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

        // Limpia el mensaje de error
        setErrorMessage('');

        // Llama a la función para registrar al usuario
        registerUser();
    };

    const registerUser = () => {
        axios.post('http://localhost:3001/register', {
            usuario: username,
            contraseña: password,
            nombre: name,
            apellidoP: lastName,
            fechaNacimiento: dateOfBirth,
            // Aqui iria el genero.
            genero: gender,
            // Aqui es lo de la imagen WIP 
            //imagenPerfil: imagenPerfil,
            // Aqui el correo, este debe ser unico asi que no puede quedarse hardcodeado, se agrega una nueva linea abajo y ya. 
            correo: correo,
            //TODO: ESTO QUE ES? imagenPerfil: imagenPerfil
        })
        .then((response) => {
            console.log(response);
            alert("Usuario registrado con éxito.");

            localStorage.setItem('userData', JSON.stringify(username));
            navigate('/LandingPage');


        })
        .catch((error) => {
            console.error(error);
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data;
                alert(errorMessage);
            } else {
                alert('Hubo un error al registrar el usuario. Por favor, intenta de nuevo más tarde.');
            }
        });
    };

    useEffect(() => {
        // Redirige al usuario a la página de inicio si ya está registrado
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
                    <div className='col-md-5 text-left mt-3'>
                        <div className='mb-5'>
                            <LabelText text="Foto de Perfil:" id="text-pc" />
                            <label htmlFor="img" style={{ cursor: 'pointer' }} id="text-pc">
                                <img src={img4} style={{ width: '40%', height: 'auto', marginRight: '30px' }} />
                                <img src={img2} style={{ width: '25%', height: 'auto', marginLeft: '30px' }} />
                            </label>
                            <input type="file" name="img" id="img" style={{ display: 'none' }} onChange={ChangeImagen} />
                        </div>
                        <LabelText text="Nombre de usuario:" id="text-pc" />
                        <LabelText text="Contraseña:" id="text-pc" />
                        <LabelText text="Nombre:" id="text-pc" />
                        <LabelText text="Apellido Paterno:" id="text-pc" />
                        <LabelText text="Apellido Materno:" id="text-pc" />
                        <LabelText text="Fecha de Nacimiento:" id="text-pc" />
                        <LabelText text="Correo Electrónico:" id="text-pc" />
                        <LabelText text="Género:" id="text-pc" />
                    </div>
                    <div className='col-md-6 mt-3'>
                        <LabelText text="Foto de Perfil:" id="text-mb" />
                        <div className='d-flex justify-content-center align-items-center'>

                        <label htmlFor="img" style={{ cursor: 'pointer', minWidth: '45%' }} className='d-flex justify-content-center align-items-center'>
                         <img src={imagenPerfil ? imagenPerfil : img3} style={{ width: '50%', height: 'auto' }} className='mb-3' />
                        </label>

                        </div>
                        <LabelText text="Nombre de usuario:" id="text-mb" />
                        <InputText type="text" name="user" id="user" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <LabelText text="Contraseña:" id="text-mb" />
                        <InputText type="password" name="pass" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <LabelText text="Nombre:" id="text-mb" />
                        <InputText type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                        
                          {/*Agregué el apellido paterno y materno */}
                        {/*Aguas a la hora de mandar a la BD */}


                        <LabelText text="Apellido Paterno:" id="text-mb" />
                        <InputText type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                        <LabelText text="Apellido Materno:" id="text-mb" />
                        <InputText type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                        <LabelText text="Fecha de Nacimiento:" id="text-mb" />
                        <InputText type="date" name="date" id="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        <LabelText text="Correo electronico:" id="text-mb" />
                        <InputText type="text" name="correo" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        
                        <select className='Combo-Box' value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>

                    </div>
                    <div className='col-md-12 text-center mb-3 mt-5'>
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Registrarse" />
                    </div>|
                    {errorMessage && <div className="col-md-12 text-center text-danger">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default RegisterCard;
