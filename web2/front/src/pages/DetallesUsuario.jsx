import React from 'react';
import detallesUsuario_Card from '../components/detalles_usuario_card';
import Navbar from '../components/navbar';

const DetallesUsuario = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>

            <div className=' mx-auto' style={{width: '100%', height: '100%', position: 'relative'}}>
            
                <div className="row  " style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px'}}>
                    <Navbar></Navbar>
                </div>

                <div className='row mt-5 mb-5 d-flex align-items-center justify-content-center' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>
                    
                    <detallesUsuario_Card></detallesUsuario_Card>
                    
                </div>


            </div>
            
        </div>
    );
};

export default DetallesUsuario