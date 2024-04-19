// ESTO NO ESTA CONENCTADO A NINGUN LADO :(
//TODO:BORRAR ESTE ARCHIVO

import React from 'react';
import './Login.css'; // Importa el archivo CSS
import imagenIzquierda from './img/Vacio.png'; // Importa la imagen izquierda
import imagenDerecha from './img/Usuario.png'; // Importa la imagen derecha
import { useNavigate  } from 'react-router-dom';


function handleRegisterClick() {
  const history = useNavigate();
  history('/register');
}


function Login() {
  return (
    <div className="container-fluid vh-100">
      
      {/* RENGLON */}
      <div className="row ">

        {/* IZQUIERDA */}  
        <div className="col-md-6 bg-izquierdo d-flex align-items-center justify-content-center">
          <div>
            <img src={imagenIzquierda} className="img-fluid" alt="Imagen Izquierda" />
          </div>
        </div>
      
        {/* DERECHA */}
        <div className="col-md-6 bg-derecho d-flex align-items-center justify-content-center">
      
          <div>
            
            {/* CONTENIDO */}
            <div className="card Login-Fondo" style={{ width: '18rem' }}>
              
              {/* IMAGEN */}
              <img src={imagenDerecha} className="card-img-top" alt="Imagen Derecha" />
              
              {/* CARD BODY */}
              <div className="card-body">
                <h5 className="card-title">Iniciar Sesión</h5>
          
                {/* FORMULARIO */}
                <form>
          
                  {/* USUARIO */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
          
                  {/* CONTRASEÑA */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
          
                  {/* BOTONES */}
                  <button type="submit" className="btn btn-primary me-2">Iniciar Sesión</button>
                  <button type="button" className="btn btn-secondary" onClick={handleRegisterClick}>Registro</button>
                </form>
          
              </div>

            </div>
          
          </div>
        
        </div>
        {/* END DERECHA */}

      </div>
    </div>
  );
}

export default Login;