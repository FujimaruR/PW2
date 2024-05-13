import React from 'react';
import '../css/review.css';
import { useHistory, useNavigate } from 'react-router-dom';
import '../css/login.css';
import { Link } from 'react-router-dom';

const Img_Card_User = ({ game }) => //componente de registro
{
    console.log("game recibido:", game);
    const decodedImageString = decodeURIComponent(escape(atob(game.Imagen)));

    return(
        <div className='img-card-user d-flex mx-auto justify-content-center align-items-center' style={{ marginBottom: '20px'}}>
           <img src={decodedImageString} alt={game.Titulo}
           style={{ borderRadius: '15px', width: '90%', height: 'auto', marginTop: '10px', marginBottom: '10px' }}/>
        </div>
    );
};

export default Img_Card_User