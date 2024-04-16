import React from 'react';
import Blackcard_review from '../components/blackcard_review';

const VoteReview = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
            <Blackcard_review/>
            <center>
                <p className='text-question mt-3'>¿Te gusta esta reseña?</p>
                <img src="https://www.pngarts.com/files/16/Facebook-Like-Free-PNG-HQ-Image.png" alt="" width={'60'} height={'60'}
                style={{ marginBottom: '20px' }}/>
            </center>
        </div>
    );
};

export default VoteReview