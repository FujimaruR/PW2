import React from 'react';
import Blackcard_review from '../components/blackcard_review';
import Navbar from '../components/navbar';
import { useLocation } from 'react-router-dom';

const VoteReview = () => 
{
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");

    return(
       
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
             <Navbar></Navbar>
             <Blackcard_review id={id} />
        </div>
    );
};

export default VoteReview