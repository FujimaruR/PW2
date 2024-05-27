import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import '../css/agregarJuego.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const NewGame_Card = () => {

    const location = useLocation();
    const searchParam = new URLSearchParams(location.search).get("id");
    const idUsuario = localStorage.getItem('id');

    const navigate = useNavigate();
    const [imagenPerfil, setImagenPerfil] = useState(null);
    const [categorias, setCategorias] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [selectedPublisher, setSelectedPublisher] = useState('');
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [gameData, setUserData] = useState({
        Imagen: imagenPerfil,
        searchedGame: searchParam
    });



    useEffect(() => {
        // Hacer la solicitud GET al endpoint para obtener los datos del juego
        axios.get(`http://localhost:3001/EditJuego?id=${searchParam}`)
            .then(response => {
                // Al recibir los datos, establecerlos en el estado
                const gameDataFromAPI = response.data[0];
                setUserData(gameDataFromAPI);

                // Decodificar la imagen después de que los datos del usuario se hayan cargado completamente
                const decodedImageString = decodeURIComponent(escape(atob(gameDataFromAPI.Imagen)));
                setImagenPerfil(decodedImageString);

                setSelectedCategoria(gameDataFromAPI.ID_Categoria);
                setSelectedPublisher(gameDataFromAPI.ID_Publicadora);

            })
            .catch(error => {
                console.error('Error al obtener la información del juego:', error);
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


    const handleDelete = () => {

        const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este juego?');
        if (confirmed) {
            axios.post(`http://localhost:3001/DeleteGame?id=${searchParam}`)
            .then(response => {
                console.log(response.data);
                Swal.fire({
                    title: "¡Juego registrado!",
                    text: "¡Juego eliminado exitosamente!",
                    icon: "success"
                });
                //alert('Juego eliminado exitosamente');
                window.location.reload();
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data;
                    //alert(errorMessage);
                    Swal.fire({
                        title: '¡Error!',
                        text: errorMessage,
                        icon: 'error'
                      });
                } else {
                    Swal.fire({
                        title: '¡Error!',
                        text: 'Hubo un error al eliminar el juego. Por favor, intenta de nuevo más tarde.',
                        icon: 'error'
                      });
                   // alert('Hubo un error al eliminar el juego. Por favor, intenta de nuevo más tarde.');
                }
            });
        } else {
            console.log('La eliminación del juego fue cancelada');
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar que los campos no estén vacíos
        if (!gameData.Titulo) {
            //alert('Por favor, ingresa el nombre del juego.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, ingresa el nombre del juego.',
                icon: 'error'
            });
            return;
        }
        if (!gameData.Descripcion) {
            //alert('Por favor, ingresa la descripción del juego.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, ingresa la descripción del juego.',
                icon: 'error'
            });
            return;
        }
        if (!gameData.Desarrolladora) {
            //alert('Por favor, ingresa el nombre de la desarrolladora.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, ingresa el nombre de la desarrolladora.',
                icon: 'error'
            });
            return;
        }
        if (!selectedPublisher) {
            //alert('Por favor, selecciona una publisher.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, selecciona una publisher.',
                icon: 'error'
            });
            return;
        }
        if (!selectedCategoria) {
            //alert('Por favor, selecciona una categoría.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, selecciona una categoría.',
                icon: 'error'
            });
            return;
        }
        if (!gameData.Fecha_Lanzamiento) {
            //alert('Por favor, selecciona la fecha de lanzamiento.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, selecciona la fecha de lanzamiento.',
                icon: 'error'
            });
            return;
        }
        if (!imagenPerfil) {
            //alert('Por favor, selecciona una imagen para el juego.');
            Swal.fire({
                title: '¡Error!',
                text: 'Por favor, selecciona una imagen para el juego.',
                icon: 'error'
            });
            return;
        }

        const updatedGameData = {
            ...gameData,
            Imagen: imagenPerfil,
            id: searchParam,
            selectedPublisher: selectedPublisher,
            selectedCategoria: selectedCategoria,
            idUsuario: idUsuario
        };


        axios.post('http://localhost:3001/editGame', updatedGameData)
            .then(response => {
                console.log(response.data);
                //alert('Juego editado exitosamente, para editarlo de nuevo favor de buscarlo en la barra de navegación');
                Swal.fire({
                    title: "¡Juego editado!",
                    text: "Juego editado exitosamente, para editarlo de nuevo favor de buscarlo en la barra de navegación",
                    icon: "success"
                });
                window.location.reload();
            })
            .catch(error => {
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
                            <InputText
                                type="text"
                                name="user"
                                id="user"
                                value={gameData.Titulo}
                                onChange={(e) => setUserData({ ...gameData, Titulo: e.target.value })}
                            />

                            <textarea className="textarea_login mb-3" id="descripcion" name="descripcion" rows="2" value={gameData.Descripcion}
                                onChange={(e) => setUserData({ ...gameData, Descripcion: e.target.value })} />
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
                            <InputText type="text" name="desarrolladora" id="desarrolladora" value={gameData.Desarrolladora}
                                onChange={(e) => setUserData({ ...gameData, Desarrolladora: e.target.value })} />
                            <select className='Combo-Box mb-3' value={selectedPublisher} onChange={(e) => setSelectedPublisher(e.target.value)}>
                                {publishers.map(publisher => (
                                    <option key={publisher.ID_Publicadora} value={publisher.ID_Publicadora}>
                                        {publisher.Nombre}
                                    </option>
                                ))}
                            </select>
                            <InputText type="date" name="fechaLanzamiento" id="fechaLanzamiento" value={gameData.Fecha_Lanzamiento ? gameData.Fecha_Lanzamiento.substring(0, 10) : ''}
                                onChange={(e) => setUserData({ ...gameData, Fecha_Lanzamiento: e.target.value })} />
                            <select className='Combo-Box' value={selectedCategoria} onChange={(e) => setSelectedCategoria(e.target.value)}>
                                {categorias.map(categoria => (
                                    <option key={categoria.ID_Categoria} value={categoria.ID_Categoria}>
                                        {categoria.Nombre} - {categoria.Descripcion}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className='d-flex col-md-12 text-center mb-2 mt-2'>
                        <button type="button" name="btn_eliminar" id="btn_eliminar" value="Eliminar" onClick={handleDelete}  className='btn_submit '> Eliminar</button>
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Editar" />
                    </div>|

                </form>
            </div>
        </div>
    );
};

export default NewGame_Card;