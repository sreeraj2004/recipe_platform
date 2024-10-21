import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../stylesSheets/Navbar.css';

export default function NavBar() {
    
    const navigate = useNavigate(); 

    function Move() {
        navigate('/login'); 
    }

    return (
        <>
            <nav className='nav'>
                <h3 className='logo'>LOGO</h3>
                <ul className='ul'>
                    <li className='li'>Home</li>
                    <li className='li'>Recipe</li>
                    <li className='li'>About us</li> 
                </ul>
                <button className='btn' onClick={Move}>Login</button>
            </nav>
        </>
    );
}
