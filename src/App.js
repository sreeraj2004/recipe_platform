import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'; 
import Login from './components/Login'; 
function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<div>Welcome to home page</div>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
