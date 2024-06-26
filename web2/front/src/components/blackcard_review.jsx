import '../css/review.css';
import star from "../img/star.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import LabelText from '../components/label_text';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Error404 from '../pages/Error404';



const Blackcard_review = ({ id }) => {

    const [reviewData, setReviewData] = useState([]);
    const [imagenGame, setImagenGame] = useState([]);
    const [idReseña, setIDReseña] = useState({});
    const [error, setError] = useState(null);
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/VoteReview?id=${id}`);
                setReviewData(response.data);

                const decodedImageString = decodeURIComponent(escape(atob(response.data[0].Imagen)));
                setImagenGame(decodedImageString);

                if (response.data.length === 0) {
                    setError("No se ha encontrado información de esta reseña.");
                    return;
                }


            } catch (error) {
                console.error('Error fetching review data:', error);
                setError('Hubo un error al obtener la información de la reseña.'); 
            }
        };

        fetchData();
    }, [id]);

    const handleLikeClick = async (event) => {
        const idReseña = event.target.id;
        const userId = localStorage.getItem('userId');
    
        try {
            const response = await axios.post('http://localhost:3001/likeReview', {
                userId: userId,
                reviewId: idReseña
            });
            console.log('Respuesta del servidor:', response.data);
            Swal.fire({
                title: "¡Like registrado!",
                text: "¡Se ha registrado el like con éxito!",
                icon: "success"
            });
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error === "El usuario ya ha dado like a esta reseña") {
                Swal.fire({
                    title: '¡Error!',
                    text: "El usuario ya ha dado like a esta reseña",
                    icon: 'error'
                });
            } else {
                console.error('Error al enviar el like:', error);
                Swal.fire({
                    title: '¡Error!',
                    text: "Ha ocurrido un error al registrar el like, contacta a administración.",
                    icon: 'error'
                });
            }
        }
    };
    
    if (error) {
        return (
            <div className='' style={{ width: '100%', height: '100%', margin: '0px', padding: '0px' }}>
                <Error404 errorFeo={error} />
            </div>
        );
    }

    return (
        <div className='blackcard container mt-3'>
            {reviewData.length > 0 && (
                <div className='row mt-3 mb-3' style={{ marginLeft: '5px', marginRight: '5px' }}>
                    <div className='col-md-4'>
                        <img src={imagenGame} className='img-review' />
                        <p className='text-review mt-2'>Por: <Link to={`/DetallesUsuario?id=${reviewData[0].ID_Usuario}`} style={{ textDecoration: 'none', color: '#8ac6c2', weight: 'bold' }}>
                            {reviewData[0].Usuario}
                        </Link></p>
                        <a href="" className='link-review mt-4'> <Link to={`/CreateReview?id=${reviewData[0].ID_Juego}`} style={{ textDecoration: 'none', color: '#8ac6c2', weight: 'bold' }}>
                            {"Reseñar"}
                        </Link></a>
                    </div>
                    <div className='col-md-8'>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div>
                                <h2 className='Title-review'>Juego: {reviewData[0].Titulo}</h2>
                                <p className='text-review'> {reviewData[0].Reseña}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className='text-review fs-5' style={{ margin: '0px' }}>{parseFloat(reviewData[0].Valor_Calificacion).toFixed(1)}</p>
                                <img src={star} alt="Star" width={'25'} height={'25'} style={{ marginLeft: '5px' }} />
                            </div>
                        </div>
                    </div>

                    <center>
                        <p className='text-question mt-3'>¿Te gusta esta reseña?</p>
                        <button className='link-review mt-4' id={reviewData[0].ID_Review} onClick={handleLikeClick} style={{ background: 'transparent', marginBottom: '0.2rem', border: '0px' }}>
                            <img src="https://www.pngarts.com/files/16/Facebook-Like-Free-PNG-HQ-Image.png" id={reviewData[0].ID_Review} alt="Like" width="60" height="60" />
                        </button>

                    </center>

                </div>
            )}
        </div>
    );
};

export default Blackcard_review;
