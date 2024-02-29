import React from 'react';
import '../css/login.css'

const LabelText  = (props) => 
{
    return(
        <div className='div_container mb-3' id={props.id}>
            <span className='label-text-login fs-6'>{props.text}</span>   
        </div>
    );
};

export default LabelText 