import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import InputText  from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import img4 from '../img/img_4.png';

const LoginCard = () => {
    const history = useNavigate();
  
    useEffect(() => {
      const handleRegisterClick = () => {
        history('/register');
      };
  
      document.getElementById('btn_reg').addEventListener('click', handleRegisterClick);
  
      return () => {
      };
    }, [history]);
  
    return (
      <div className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#2c2b3d', height: '100%', width: '100%'}}>
        <div className='' style={{height: '30px'}}></div>
        <div className='container login_card'>
          <form className='row h-100 justify-content-center align-items-center' style={{minHeight: '200px'}}>
            <div className='col-md-9 text-left d-flex justify-content-center align-items-center'>
              <img src={img4} style={{width: '50%', height: 'auto', marginTop: '20px', marginBottom: '40px'}}/>
            </div>
            <div className='col-md-9 text-left'>
              <LabelText text="Nombre de usuario:" />
              <InputText type="text" name="user" id="user" />
            </div>
            <div className='col-md-9 text-left'>
              <LabelText text="Contraseña:" />
              <InputText type="password" name="pass" id="pass" /> 
            </div>
            <div className='col-md-6 text-center mb-3 mt-2'>
              <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Iniciar Sesión"/>
            </div>
            <div className='col-md-6 text-center mb-3 mt-2'>
              <ButtonSubmit type="button" name="btn_reg" id="btn_reg" value="Registrarse"/>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginCard;
  