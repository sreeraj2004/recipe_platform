import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar'; 
import Login from './components/Login'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); 
    const location = useLocation();

    const handleLogin = (userData) => {
        setIsLoggedIn(true);
        setUser(userData); 
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null); 
    };

    return (
        <div>
            {isLoggedIn && location.pathname !== '/login' && (
                <NavBar user={user} onLogout={handleLogout} />
            )}
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
        </div>
    );
}

export default function Main() {
    return (
        <Router>
            <App />
        </Router>
    );
}
