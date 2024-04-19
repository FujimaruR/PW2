import React from 'react';
import '../css/review.css';
import img1 from '../img/img_1.png';
import ButtonSubmit from '../components/button_submit';
import LabelText from '../components/label_text';

const CreateReview = () => 
{

    const isTextEmpty = (text) => {
        return text.trim() === '';
    };

    const isPositiveInteger = (text) => {
        return /^\d+$/.test(text) && parseInt(text, 10) >= 0;
    };

    return(
        <div className='' style={{width: '100%', height: '100vh', margin: '0px', padding: '0px'}}>
           <div className='container black-card-creview  mt-3'>
            <form action="">
                <div className='row'>
                    <div className='col-md-12 row mt-4' >
                        <div className='col-md-8 d-flex justify-content-center align-items-center' >
                            <img src={img1} className='img-create-review'/>
                            <div>
                                <h3 className='create-review-t1'>Haz una reseña:</h3>
                                <p className='create-review-text1'>¡El mundo quiere saber tu opinión!</p>
                            </div>
                            
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-2 d-flex  justify-content-center align-items-center'>
                            <ButtonSubmit type="button" name="btn_volver" id="btn_volver" value="volver" />
                        </div>

                    </div>
                    <div className='col-md-12 d-flex justify-content-center align-items-center mb-3'>
                        <div className='container-create-review mt-3 row'>
                            <div className='col-md-3 mt-3 '>
                                <img src="https://wiki.teamfortress.com/w/images/thumb/d/d9/TF2_Boxart.png/250px-TF2_Boxart.png.jpeg" 
                                className='img-review mb-1' style={{ width: '95%', maxWidth: '150px'}}/>
                                <p style={{ color: 'white', fontFamily: 'Arial, Helvetica, sans-serif'}}>By: Valve</p>
                            </div>
                            <div className='col-md-9 mt-3'>
                                <h3 className='create-review-t1'>Team Fortress 2</h3>
                                <textarea name="" id="" className='input-create-review' placeholder='¡Ingresa tu reseña!'></textarea>
                            </div>
                            <div className='col-md-6'></div>
                            <div className='col-md-6 d-flex align-items-center justify-content-center mt-2 mb-2'>
                                <p style={{ color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', margin: '0px'}}>Ingresa una puntuación:</p>
                                <input type="text" name="score-review" id="score-review" className='score-review'/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-12 text-center mt-2'>
                            <ButtonSubmit type="submit" name="btn_submit" id="btn_submit" value="Reseñar" />
                    </div>|
                </div>
            </form>
           </div>
        </div>
    );
};

export default CreateReview