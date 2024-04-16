import React from 'react';
import ColumnaBusqueda from '../components/search_results_juego';
import Navbar from '../components/navbar';

const BusquedaJuego = () => 
{
    return(
        <div className='' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>

            <div className='' style={{width: '100%', height: '100%'}}>
            
                <div className="row  " style={{ zIndex: 1, width: '100%', margin: '0px', padding: '0px'}}>
                    <Navbar></Navbar>
                </div>

                <div className='row mt-5 mb-5 d-flex align-items-center justify-content-center' style={{width: '100%', height: '100%', margin: '0px', padding: '0px'}}>
                    
                    <ColumnaBusqueda/>
                    
                </div>


            </div>
            
        </div>
    );
};

export default BusquedaJuego