import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../components/input_text';
import LabelText from '../components/label_text';
import ButtonSubmit from '../components/button_submit';
import img4 from '../img/img_4.png';
import axios from 'axios'; // Importa Axios

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Por favor, ingresa tu nombre de usuario y contraseña.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setErrorMessage('');

    axios.post('http://localhost:3001/login', {
      username: username,
      password: password
    })
      .then((response) => {
        console.log(response);
        if (response.data.alert === 'Success') {
          const { username, id, rol } = response.data;
          localStorage.setItem('userData', JSON.stringify(username));
          localStorage.setItem('userId', JSON.stringify(id));
          localStorage.setItem('Rol', JSON.stringify(rol));
          alert("Se ha iniciado sesión correctamente");
          if (response.data.rol == 1)
            navigate('/LandingPage');
          else {
            navigate('/AgregarJuego')
          }
        } else {
          // Manejar la situación cuando las credenciales no son correctas
          alert(response.data.alert);
        }
        /*localStorage.setItem('userData', JSON.stringify(username));
        localStorage.setItem('userId', JSON.stringify(id));
        alert("Se ha iniciado sesión correctamente")
        navigate('/LandingPage');*/
      })
      .catch((error) => {
        console.error(error);
        localStorage.clear();
        setErrorMessage('Las credenciales no son válidas, intenta nuevamente.');
      });
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  useEffect(() => {
    document.getElementById('btn_reg').addEventListener('click', handleRegisterClick);
  }, []);


  useEffect(() => {
    const rol = localStorage.getItem('Rol');

    if (rol != null) {
      if (rol == 1) {
        navigate('/LandingPage');
      }
      else {
        navigate('/AgregarJuego')
      }
    }

  }, [navigate]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#2c2b3d', height: '100%', width: '100%' }}>
      <div className='' style={{ height: '30px' }}></div>
      <div className='container login_card'>
        <form className='row h-100 justify-content-center align-items-center' style={{ minHeight: '200px' }} onSubmit={handleLogin}>
          <div className='col-md-9 text-left d-flex justify-content-center align-items-center'>
            <img src={img4} style={{ width: '50%', height: 'auto', marginTop: '20px', marginBottom: '40px' }} />
          </div>
          <div className='col-md-9 text-left'>
            <LabelText text="Nombre de usuario:" />
            <InputText type="text" name="user" id="user" value={username} onChange={(e) => {
              setUsername(e.target.value);
              console.log('Username updated:', e.target.value);
            }} />
          </div>
          <div className='col-md-9 text-left'>
            <LabelText text="Contraseña:" />
            <InputText type="password" name="pass" id="pass" value={password} onChange={(e) => {
              setPassword(e.target.value);
              console.log('Password updated:', e.target.value);
            }} />
          </div>
          <div className='col-md-6 text-center mb-3 mt-2'>
            <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Iniciar Sesión" />
          </div>
          <div className='col-md-6 text-center mb-3 mt-2'>
            <ButtonSubmit type="button" name="btn_reg" id="btn_reg" value="Registrarse" />
          </div>
          {errorMessage && <div className="col-md-12 text-center text-danger">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
