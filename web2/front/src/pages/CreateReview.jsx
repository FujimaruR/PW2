import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/review.css';
import img1 from '../img/img_1.png';
import ButtonSubmit from '../components/button_submit';
import axios from 'axios';
import LabelText from '../components/label_text';
import Navbar from '../components/navbar';
import Swal from 'sweetalert2';
import Error404 from './Error404';

const CreateReview = () => {

    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get("id");

    const navigate = useNavigate();
    const [resena, setResena] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [juego, setJuego] = useState(searchParam);
    const [username, setUsername] = useState('');
    const [dateOfReview, setDateOfReview] = useState('');
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [tituloJuego, settituloJuego] = useState(null);
    const [desarrolladora, setdesarrolladora] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [error, setError] = useState(null);


    const handleRegister = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!username || !juego || !resena) {
            Swal.fire({
                title: '¡Error!',
                text: 'Porfavor agrege texto en su reseña.',
                icon: 'error'
            });
            setShowErrorMessage(true);
            return;
        }

        if(!calificacion){
            Swal.fire({
                title: '¡Error!',
                text: 'Porfavor agregue una calificacion a su reseña.',
                icon: 'error'
            });
            setShowErrorMessage(true);
            return;
        }

        if(calificacion < 0 || calificacion > 10){
            Swal.fire({
                title: '¡Error!',
                text: 'Porfavor ingrese una calificacion entre 0 y 10.',
                icon: 'error'
            });
            setShowErrorMessage(true);
            return;
        }

        setShowErrorMessage(false);
        registerReview();
    };

    const registerReview = () => {
        axios.post('http://localhost:3001/createreview', {
            usuario: username,
            reseña: resena,
            calif: calificacion,
            game: juego,
            fecha: dateOfReview,
        })
            .then((response) => {
                console.log(response);
                //alert("Reseña registrada con éxito.");
                Swal.fire({
                    title: "¡Reseña registrada!",
                    text: "Reseña registrada con éxito.",
                    icon: "success"
                });
                navigate('/LandingPage');
                Swal.fire({
                    title: "¡Reseña registrada!",
                    text: "Reseña registrada con éxito.",
                    icon: "success"
                });
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
                    //alert('Hubo un error al registrar la reseña. Por favor, intenta de nuevo más tarde.');
                    Swal.fire({
                        title: '¡Error!',
                        text: 'Hubo un error al registrar la reseña. Por favor, intenta de nuevo más tarde.',
                        icon: 'error'
                    });
                }
            });
    };

    const handleBack = () => {
        navigate('/LandingPage');
    };

    useEffect(() => {
        const currentDate = new Date();
        setDateOfReview(currentDate);
        const storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            setUsername(storedUsername);
        }

        axios.get(`http://localhost:3001/ShowJuegoR?id=${searchParam}`)
            .then(response => {
                const gameDataFromAPI = response.data[0];
                if (response.data.length === 0) {
                    setError("No se ha encontrado información de este juego.");
                    return;
                }

                if(gameDataFromAPI.Estatus.data[0] == 0){
                    setError("Este juego ha sido eliminado entonces ya no se puede reseñar.");
                    return;
                }

                const decodedImageString = decodeURIComponent(escape(atob(gameDataFromAPI.Imagen)));
                setImagenPerfil(decodedImageString);
                settituloJuego(gameDataFromAPI.Titulo);
                setdesarrolladora(gameDataFromAPI.Desarrolladora);
            })
            .catch(error => {
                console.error('Error al obtener la información del juego:', error);
            });

    }, []);


    
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



    if (error) {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Navbar></Navbar>
                <Error404 errorFeo={error} />
            </div>
        );
    }


    if (searchParam) {
        return (
            <div className='' style={{ width: '100%', height: '100vh', margin: '0px', padding: '0px' }}>
                <Navbar></Navbar>
                <div className='container black-card-creview  mt-3'>
                    <form onSubmit={handleRegister}>
                        <div className='row'>
                            <div className='col-md-12 row mt-4' >
                                <div className='col-md-8 d-flex justify-content-center align-items-center' >
                                    <div>
                                        <h3 className='create-review-t1'>Haz una reseña:</h3>
                                        <p className='create-review-text1'>¡El mundo quiere saber tu opinión!</p>
                                    </div>
                                </div>
                                <div className='col-md-2'></div>
                                <div className='col-md-2 d-flex  justify-content-center align-items-center'>
                                    <button type="button" name="btn_volver" id="btn_volver" className="btn_submit mx-2" onClick={handleBack}>Volver</button>
                                </div>
                            </div>
                            <div className='col-md-12 d-flex justify-content-center align-items-center mb-3'>
                                <div className='container-create-review mt-3 row'>
                                    <div className='col-md-3 mt-3 '>
                                        <img src={imagenPerfil}
                                            className='img-review mb-1' style={{ width: '95%', maxWidth: '150px' }} />
                                        <p style={{ color: 'white', fontFamily: 'Arial, Helvetica, sans-serif' }}>By: {desarrolladora}</p>
                                    </div>
                                    <div className='col-md-9 mt-3'>
                                        <h3 className='create-review-t1'>{tituloJuego}</h3>
                                        <textarea name="" id="" className='input-create-review' placeholder='¡Ingresa tu reseña!' value={resena} onChange={(e) => setResena(e.target.value)}></textarea>
                                        {showErrorMessage && <p style={{ color: 'red' }}>Por favor llene todos los campos</p>}
                                    </div>
                                    <div className='col-md-6'></div>
                                    <div className='col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                        <p style={{ color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', margin: '0px' }}>Ingresa una puntuación:</p>
                                        <input
                                            type="text"
                                            name="score-review"
                                            id="score-review"
                                            className='score-review'
                                            value={calificacion}
                                            onChange={(e) => {
                                                let inputValue = e.target.value;
                                                inputValue = inputValue.replace(/\D/g, '');
                                                if (inputValue !== '' && (inputValue < 1 || inputValue > 10)) {
                                                    inputValue = '';
                                                }
                                                setCalificacion(inputValue);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 text-center mt-2'>
                                <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Reseñar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Navbar />
                <Error404 errorFeo="Ha habido un error, por favor contacta a administración." />
            </div>
        );
    }
};

export default CreateReview;
