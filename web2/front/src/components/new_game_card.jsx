import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import '../css/agregarJuego.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import axios from 'axios';


const NewGame_Card = () => {
    const navigate = useNavigate();
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [fechaLanzamiento, setFechaLanzamiento] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [nombreJuego, setNombreJuego] = useState('');
    const [descripcionJuego, setDescripcionJuego] = useState('');
    const [desarrolladora, setDesarrolladora] = useState('');
    const [selectedPublisher, setSelectedPublisher] = useState('');
    const [selectedCategoria, setSelectedCategoria] = useState('');

    const id = localStorage.getItem('id');


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

        axios.post('http://localhost:3001/newGame', {
            nombreJuego: nombreJuego,
            fechaLanzamiento: fechaLanzamiento,
            desarrolladora: desarrolladora,
            publisher: selectedPublisher,
            categoria: selectedCategoria,
            descripcionJuego: descripcionJuego,
            imagenPerfil: imagenPerfil,
            idUsuario: id
        })
            .then(response => {
                console.log(response.data);
                alert('Juego agregado exitosamente, para editarlo favor de buscarlo en la barra de navegación');
                window.location.reload();
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data;
                    alert(errorMessage);
                } else {
                    alert('Hubo un error al registrar el usuario. Por favor, intenta de nuevo más tarde.');
                }
            });
    };


    useEffect(() => {
        axios.get('http://localhost:3001/categorias')
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error('Error al cargar las categorías:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/publishers')
            .then(response => {
                setPublishers(response.data);
            })
            .catch(error => {
                console.error('Error al cargar los publishers:', error);
            });
    }, []);

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>

            <div className='container login_card'>
                <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }} onSubmit={handleSubmit}>

                    <div className='row mt-4'>
                        <LabelText text="Agregar imagen del juego:" id="text-pc" />
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
                                    <img src={imagenPerfil ? imagenPerfil : img3} style={{ width: '50%', height: 'auto' }} className=' mt-0' />
                                </label>

                            </div>

                        </div>

                    </div>


                    <div className='row mb-0'>

                        <div className='col-md-6 text-left mt-0'>
                            <LabelText text="Nombre del juego:" id="text-pc" />
                            <LabelText text="Descripción:" id="text-pc" />
                        </div>

                        <div className='col-md-6 mt-0'>
                            <InputText type="text" name="juego" id="juego" value={nombreJuego} onChange={(e) => setNombreJuego(e.target.value)} />

                            <textarea className="textarea_login mb-3" id="descripcion" name="descripcion" rows="2" onChange={(e) => setDescripcionJuego(e.target.value)} />
                        </div>



                    </div>

                    <div className='row mb-0'>


                        <div className='col-md-6 text-left mt-0'>
                            <LabelText text="Desarrolladora:" id="text-pc" />
                            <LabelText text="Publisher:" id="text-pc" />
                            <LabelText text="Fecha de Lanzamiento:" id="text-pc" />
                            <LabelText text="Categoria:" id="text-pc" />
                        </div>

                        <div className='col-md-6 mt-0'>
                            <InputText type="text" name="desarrolladora" id="desarrolladora" value={desarrolladora} onChange={(e) => setDesarrolladora(e.target.value)} />
                            <select className='Combo-Box mb-3' value={selectedPublisher} onChange={(e) => setSelectedPublisher(e.target.value)}>
                                {publishers.map(publisher => (
                                    <option key={publisher.ID_Publicadora} value={publisher.ID_Publicadora}>
                                        {publisher.Nombre}
                                    </option>
                                ))}
                            </select>
                            <InputText type="date" name="fechaLanzamiento" id="fechaLanzamiento" value={fechaLanzamiento} onChange={(e) => setFechaLanzamiento(e.target.value)} />
                            <select className='Combo-Box' value={selectedCategoria} onChange={(e) => setSelectedCategoria(e.target.value)}>
                                {categorias.map(categoria => (
                                    <option key={categoria.ID_Categoria} value={categoria.ID_Categoria}>
                                        {categoria.Nombre} - {categoria.Descripcion}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className='col-md-12 text-center mb-2 mt-2'>
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Agregar" />
                    </div>|

                </form>
            </div>
        </div>
    );
};

export default NewGame_Card;