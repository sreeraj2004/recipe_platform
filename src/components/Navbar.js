import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../stylesSheets/Navbar.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

    function Move() {
        navigate('/login');
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen); 
    }

    return (
        <>
            <nav className="nav">
                <h3 className="logo">LOGO</h3>
                <ul className={`ul ${menuOpen ? 'open' : ''}`}>
                    <li className="li">Home</li>
                    <li className="li">Recipe</li>
                    <li className="li">About us</li>
                </ul>
                <button className="btn" onClick={Move}>{user ? user : 'Login'}</button>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    );
}
