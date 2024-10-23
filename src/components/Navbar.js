import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../stylesSheets/Navbar.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 0) {
                nav.style.backgroundColor = 'white';
                nav.style.color = 'black';
            } else {
                nav.style.backgroundColor = 'rgb(198, 222, 230)';
                nav.style.color = 'black';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleLoginClick() {
        navigate('/login'); 
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false); 
    }

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen); 
        setMenuOpen(false); 
    }

    function handleLogout() {
        setUser(null); 
        setDropdownOpen(false); 
        window.location.reload(); 
    }

    return (
        <nav className="nav">
            <h3 className="logo">LOGO</h3>

            <ul className="ul">
                <li className="li">Home</li>
                <li className="li">Recipe</li>
                <li className="li">About us</li>
            </ul>

            <button className="btn" onClick={user ? toggleDropdown : handleLoginClick}>
                {user ? <i className="fas fa-user"></i> : 'Login'}
            </button>

            {user && dropdownOpen && ( 
                <div className={`user-dropdown show`}>
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

            {menuOpen && (
                <ul className="dropdown">
                    <li className="li">Home</li>
                    <li className="li">Recipe</li>
                    <li className="li">About us</li>
                </ul>
            )}
        </nav>
    );
}
