/* navbar.jsx */
import React from 'react';
import '../css/navbar.css'

const Navbar = ({ username }) => (

    <div className='Nav-Bar'>
        <nav className="navbar navbar-expand-lg text-labels">
            <a className="navbar-brand text-labels" href="/">Tilted Reviews</a>
            <span className="navbar-text text-labels">
                ¡Hola, {username}!
            </span>
        </nav>
    </div>
    
);
  
export default Navbar;