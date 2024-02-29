import React from 'react';
import LoginCard from '../components/login_card';
import SideCards from '../components/side_cards';

const Login = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
            <div className='row mx-auto' style={{height: '100vh'}}>
                <div className='col-12 col-md-6' style={{padding: '0px'}} id="side">
                    <SideCards></SideCards>  
                </div>
                <div className='col-12 col-md-6' style={{padding: '0px'}} id="content">
                    <LoginCard></LoginCard> 
                </div>
            </div>
        </div>
    );
};

export default Login