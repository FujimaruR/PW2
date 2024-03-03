import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login(){

    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');
    const nav = useNavigate();

    useEffect(
        ()=>{
            localStorage.removeItem('auth');
    },[])

    const log = ()=>{
        Axios.post("http://localhost:3001/login",
        {usuario: user,
         contra: pass} 
        ).then((data)=>{
            if(data.data.alert === "Success"){
                localStorage.setItem('auth', JSON.stringify(data.data.user));
                console.log(data);
                nav("/lista");
            }else{
                alert('Usuario no encontrado')
            }
        }).catch((error)=>{
            console.log(error);
        })

    }

    return(
    <div className="registrationBox">
        <div className="mb-3 box1">
        <label className="form-label">Nombre de usuario</label>
        <input type="text" className="form-control" placeholder="Usuario" 
         onChange={(e)=>{setUser(e.target.value)}} value={user}  />

        <label className="form-label">Contraseña</label>
        <input type="password" className="form-control" placeholder="Contraseña"
         onChange={(e)=>{setPass(e.target.value)}}  value={pass} />

        <button className="btn btn-primary" onClick={log}>Ingresar</button>
        
        <Link to="/Signup" className="btn btn-outline-info">Registrarse</Link>
        </div>
    </div>
    )
}

export default Login