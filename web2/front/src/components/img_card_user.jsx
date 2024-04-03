import React from 'react';
import '../css/review.css';
import '../css/login.css';

const Img_Card_User = () => //componente de registro
{
    return(
        <div className='img-card-user d-flex mx-auto justify-content-center align-items-center' style={{ marginBottom: '20px'}}>
           <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" 
           style={{ borderRadius: '15px', width: '90%', height: 'auto', marginTop: '10px', marginBottom: '10px' }}/>
        </div>
    );
};

export default Img_Card_User