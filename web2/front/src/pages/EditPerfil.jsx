import React from 'react';
import Edituser_card from '../components/edituser_card';
import LabelText from '../components/label_text';

const EditPerfil = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
            <div className='row mx-auto' style={{height: '100%', position: 'relative'}}>

                <div className='col-12 col-md-6' style={{padding: '0px', backgroundColor: '#4d4e63', position: 'absolute', top: 0, left: 0, width: '50%', height: '100%'}}></div>
                <div className='col-12 col-md-6' style={{padding: '0px', backgroundColor: '#2c2b3d', position: 'absolute', top: 0, right: 0, width: '50%', height: '100%'}}></div>

                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 1, width: '45%', minWidth: '500px' }}>
                    <center>
                        <LabelText text="Editar Perfil:" id="text-edit-title"/>
                    </center>
                    <Edituser_card/>
                </div>
            </div>
        </div>
    );
};

export default EditPerfil