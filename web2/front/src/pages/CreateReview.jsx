import React, { useState, useEffect } from 'react';
import '../css/review.css';
import img1 from '../img/img_1.png';
import ButtonSubmit from '../components/button_submit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LabelText from '../components/label_text';

const CreateReview = () => {
    const navigate = useNavigate();
    const [resena, setResena] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [juego, setJuego] = useState('9');
    const [username, setUsername] = useState('');
    const [dateOfReview, setDateOfReview] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!username || !juego) {
            return;
        }

        // Limpia el mensaje de error
        //setErrorMessage('');

        // Llama a la función para registrar al usuario
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
                alert("Reseña registrada con éxito.");
                navigate('/LandingPage');
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data;
                    alert(errorMessage);
                } else {
                    alert('Hubo un error al registrar la reseña. Por favor, intenta de nuevo más tarde.');
                }
            });
    };

    const isTextEmpty = (text) => {
        return text.trim() === '';
    };

    const isPositiveInteger = (text) => {
        const number = parseInt(text, 10);
        return /^\d+$/.test(text) && number >= 1 && number <= 10;
    };

    useEffect(() => {
        const currentDate = new Date();
        setDateOfReview(currentDate);
        // Leer el username del localStorage
        const storedUsername = localStorage.getItem('userId');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);



    return (
        <div className='' style={{ width: '100%', height: '100vh', margin: '0px', padding: '0px' }}>
            <div className='container black-card-creview  mt-3'>
                <form onSubmit={handleRegister}>
                    <div className='row'>
                        <div className='col-md-12 row mt-4' >
                            <div className='col-md-8 d-flex justify-content-center align-items-center' >
                                <img src={img1} className='img-create-review' />
                                <div>
                                    <h3 className='create-review-t1'>Haz una reseña:</h3>
                                    <p className='create-review-text1'>¡El mundo quiere saber tu opinión!</p>
                                </div>

                            </div>
                            <div className='col-md-2'></div>
                            <div className='col-md-2 d-flex  justify-content-center align-items-center'>
                                <ButtonSubmit type="button" name="btn_volver" id="btn_volver" value="volver" />
                            </div>

                        </div>
                        <div className='col-md-12 d-flex justify-content-center align-items-center mb-3'>
                            <div className='container-create-review mt-3 row'>
                                <div className='col-md-3 mt-3 '>
                                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg"
                                        className='img-review mb-1' style={{ width: '95%', maxWidth: '150px' }} />
                                    <p style={{ color: 'white', fontFamily: 'Arial, Helvetica, sans-serif' }}>By: Valve</p>
                                </div>
                                <div className='col-md-9 mt-3'>
                                    <h3 className='create-review-t1'>Team Fortress 2</h3>
                                    <textarea name="" id="" className='input-create-review' placeholder='¡Ingresa tu reseña!' value={resena} onChange={(e) => setResena(e.target.value)}></textarea>
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
                                            // Remover caracteres no numéricos y números fuera del rango
                                            inputValue = inputValue.replace(/\D/g, ''); // Remover caracteres no numéricos
                                            if (inputValue !== '' && (inputValue < 1 || inputValue > 10)) {
                                                // Si el número está fuera del rango, establecer como vacío
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
                        </div>|
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateReview