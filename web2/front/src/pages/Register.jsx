import React from 'react';
import RegisterCard from '../components/register_card'; //Mandamos a llamar el componente de los botones, colores (recursos) para el diseño
import SideCards from '../components/side_cards';

//JSX pq es el estandar de react ajsjajasj plus sirve pa diferenciarlos con los js

const Register = () => //componente de registro
{
    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
            <div className='row mx-auto' style={{height: '100vh'}}>
                <div className='col-12 col-md-6' style={{padding: '0px'}} id="side">
                    <SideCards></SideCards>  
                </div>
                <div className='col-12 col-md-6' style={{padding: '0px'}} id="content">
                    <RegisterCard></RegisterCard> 
                </div>
            </div>
        </div>
    );
};

export default Register