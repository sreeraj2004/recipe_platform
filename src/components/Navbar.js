import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../stylesSheets/Navbar.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext); // Added setUser to log out

    function handleLoginClick() {
        navigate('/login'); // Navigate to login page
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    function handleLogout() {
        setUser(null); // Clear user context
        setMenuOpen(false); // Close the menu
        window.location.reload(); // Reload the page
    }

    return (
        <nav className="nav">
            <h3 className="logo">LOGO</h3>
            <ul className={`ul ${menuOpen ? 'open' : ''}`}>
                <li className="li">Home</li>
                <li className="li">Recipe</li>
                <li className="li">About us</li>
            </ul>
            <button className="btn" onClick={user ? toggleMenu : handleLoginClick}>
                {user ? <i className="fas fa-user"></i> : 'Login'}
            </button>
            {user && (
                <div className={`user-dropdown ${menuOpen ? 'show' : ''}`}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    );
}
