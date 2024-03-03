/* button_submit.jsx */
import React from 'react';
import '../css/login.css'

const ButtonSubmit  = (props) => 
{
    return(
        <div className='div_container'>
            <input type={props.type} name={props.name} id={props.id} value={props.value} className='btn_submit'/>    
        </div>
    );
};

export default ButtonSubmit 