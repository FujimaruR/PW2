/* imput_text.jsx */
import React from 'react';
import '../css/login.css'

const InputText  = (props) => 
{
    return(
        <div className='div_container mb-3'>
            <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange} className='input_text_login'/>    
        </div>
    );
};

export default InputText 