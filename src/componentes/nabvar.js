import React from 'react';
import './navbar.css';
import logo from '../assets/img/logo.png'

function Navbar(){
    
    return(
        
        <div className="navBar">
            <div className='contenedorNav'>
            <img id='logo' src={logo} alt='logo'/>

            <div className='secciones'>             
            <h2 className='seccionesNav'>Inicio</h2>
            <h2 className='seccionesNav'>Servicios</h2>
            <h2 className='seccionesNav'>Nosotros</h2>
            <h2 className='seccionesNav'>Blog</h2>
            </div>           
            </div>           
        </div>
    )
    
}

export default Navbar;