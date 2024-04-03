import React from 'react';
import '../css/review.css';
import '../css/login.css';
import trash from '../img/trash-can.png';

const List_card = () => //componente de registro
{
    return(
        <div className='text-center mx-auto justify-content-center d-flex row' style={{ marginBottom: '20px', width: '80%'}}>
            <h3 className='basic-text fs-5 col-md-12 mt-1'>Nombre de lista: </h3>
            <button className='col-md-2 btn-delete-list d-flex mx-auto justify-content-center mt-2' type="button">
                <img src={trash} alt="" style={{ width: '22px', height: 'auto' }} />
            </button>
            <div className='list-card-user-a col-md-10 mt-2' >
                <div className='list-card-user d-flex mx-auto justify-content-center align-items-center' style={{ }}>
                    <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" alt="" 
                    style={{ borderRadius: '40px', width: '90%', height: 'auto', marginTop: '10px', marginBottom: '10px' }}/>
                </div>
            </div>
        </div>
    );
};

export default List_card