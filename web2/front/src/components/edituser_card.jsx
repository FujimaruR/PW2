import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import axios from 'axios';


const Edituser_card = () => {
    const navigate = useNavigate();
    const [imagenPerfil, setImagenPerfil] = useState(null); 

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

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100%', width: '100%' }}>
            <div className='' style={{ height: '30px' }}></div>
            <div className='container login_card'>
                <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }}>
                    <div className='col-md-5 text-left mt-3'>
                        <div className='mb-5'>
                            <LabelText text="Cambiar foto de perfil:" id="text-pc" />
                            <label htmlFor="img" style={{ cursor: 'pointer' }} id="text-pc">
                                <img src={img4} style={{ width: '40%', height: 'auto', marginRight: '30px' }} />
                                <img src={img2} style={{ width: '25%', height: 'auto', marginLeft: '30px' }} />
                            </label>
                            <input type="file" name="img" id="img" style={{ display: 'none' }} onChange={ChangeImagen} />
                        </div>
                        <LabelText text="Nombre de usuario:" id="text-pc" />
                        <LabelText text="Contraseña:" id="text-pc" />
                        <LabelText text="Nombre:" id="text-pc" />
                        <LabelText text="Apellido Paterno:" id="text-pc" />
                        <LabelText text="Apellido Materno:" id="text-pc" />
                        <LabelText text="Fecha de Nacimiento:" id="text-pc" />
                        <LabelText text="Correo Electrónico:" id="text-pc" />
                        <LabelText text="Género:" id="text-pc" />
                    </div>
                    <div className='col-md-6 mt-3'>
                        <LabelText text="Foto de Perfil:" id="text-mb" />
                        <div className='d-flex justify-content-center align-items-center'>

                        <label htmlFor="img" style={{ cursor: 'pointer', minWidth: '45%' }} className='d-flex justify-content-center align-items-center'>
                         <img src={imagenPerfil ? imagenPerfil : img3} style={{ width: '50%', height: 'auto' }} className='mb-3' />
                        </label>

                        </div>
                        <LabelText text="Nombre de usuario:" id="text-mb" />
                        <InputText type="text" name="user" id="user"  />
                        <LabelText text="Contraseña:" id="text-mb" />
                        <InputText type="password" name="pass" id="pass" />
                        <LabelText text="Nombre:" id="text-mb" />
                        <InputText type="text" name="name" id="name" />

                        
                          {/*Agregué el apellido paterno y materno */}
                        {/*Aguas a la hora de mandar a la BD */}


                        <LabelText text="Apellido Paterno:" id="text-mb" />
                        <InputText type="text" name="lastname" id="lastname"  />

                        <LabelText text="Apellido Materno:" id="text-mb" />
                        <InputText type="text" name="lastname" id="lastname"  />

                        <LabelText text="Fecha de Nacimiento:" id="text-mb" />
                        <InputText type="date" name="date" id="date" />
                        <LabelText text="Correo electronico:" id="text-mb" />
                        <InputText type="text" name="correo" id="correo" />
                        
                        <select className='Combo-Box' >
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>

                    </div>
                    <div className='col-md-12 text-center mb-3 mt-5'>
                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Editar" />
                    </div>|
                </form>
            </div>
        </div>
    );
};

export default Edituser_card;