import React from 'react';
import EditGame_Card from '../components/edit_game_card';
import LabelText from '../components/label_text';
import Navbar from '../components/navbar';

const EditarJuego = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
            
         

            <div className='row mx-auto' style={{width: '100%', height: '100%', position: 'relative'}}>
            
                <div className="row position-absolute " style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px'}}>
                    <Navbar></Navbar>
                </div>
                
                <div className='col-12 col-md-6' style={{padding: '0px', backgroundColor: '#4d4e63', position: 'absolute', top: 0, left: 0, width: '50%', height: '100%'}}></div>
                <div className='col-12 col-md-6' style={{padding: '0px', backgroundColor: '#2c2b3d', position: 'absolute', top: 0, right: 0, width: '50%', height: '100%'}}></div>

                <div className=" position-absolute top-50 start-50 translate-middle" style={{ zIndex: 1, width: '45%', minWidth: '500px' }}>
                    <center className='mt-5'>
                        <LabelText text="Editar un Juego:" id="text-edit-title"/>
                    </center>
                    <EditGame_Card/>
                </div>
            </div>
            
        </div>
    );
};

export default EditarJuego