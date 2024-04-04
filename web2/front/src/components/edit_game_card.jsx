import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import '../css/login.css';
import '../css/agregarJuego.css';
import img2 from '../img/img_2.png';
import img3 from '../img/img_3.png';
import img4 from '../img/img_4.png';
import axios from 'axios';


const NewGame_Card = () => {
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
            
            <div className='container login_card'>
                <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }}>
                    
                    <div className='row mt-4'>
                        <LabelText text="Cambiar imagen del juego:" id="text-pc" />
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
                                    <img src={imagenPerfil ? imagenPerfil : img3} style={{ width: '50%', height: 'auto' }} className=' mt-0'/>
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
                            <InputText type="text" name="juego" id="juego"  />
                            
                            <textarea className="textarea_login mb-3" id="descripcion" name="descripcion" rows="2" />
                        </div>

                    </div>
                    
                    <div className='row mb-0'>


                        <div className='col-md-6 text-left mt-0'>
                            <LabelText text="Desarrolladora:" id="text-pc" />
                            <LabelText text="Publisher:" id="text-pc" />
                            <LabelText text="Categoria:" id="text-pc" />
                        </div>    

                        <div className='col-md-6 mt-0'>
                            <InputText type="text" name="desarrolladora" id="desarrolladora" />
                            <InputText type="text" name="publisher" id="publisher"  />  
                            <select className='Combo-Box' >
                                <option value="FPS">FPS</option>
                                <option value="Aventura">Aventura</option>
                                <option value="RPG">RPG</option>
                            </select>
                        </div>

                    </div>                   

                    <div className='d-flex col-md-12 text-center mb-2 mt-2'>
                        <ButtonSubmit type="button" name="btn_eliminar" id="btn_eliminar" value="Eliminar" />

                        <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Editar" />
                    </div>|
                    
                </form>
            </div>
        </div>
    );
};

export default NewGame_Card;