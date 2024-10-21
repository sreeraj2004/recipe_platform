import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesSheets/Navbar.css';

export default function NavBar({ user, onLogout }) {
    const navigate = useNavigate();

    function handleLoginClick() {
        navigate('/login');
    }

    function handleLogoutClick() {
        onLogout(); 
    }

    return (
        <nav className="nav">
            <h3 className="logo">LOGO</h3>
            <ul className="ul">
                <li className="li">Home</li>
                <li className="li">Recipe</li>
                <li className="li">About Us</li>
            </ul>
            {user ? (
                <div className="user-menu">
                    <button onClick={handleLogoutClick}>{user.name}</button> 
                </div>
            ) : (
                <button className="btn" onClick={handleLoginClick}>Login</button>
            )}
        </nav>
    );
}
