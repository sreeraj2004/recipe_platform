import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'; 
import { UserProvider } from './components/UserContext';
import Login from './components/Login'; 

function App() {
    return (
        <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<NavBar />} />
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default App;
