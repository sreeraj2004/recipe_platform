import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar'; 
import { UserProvider } from './components/UserContext';
import Login from './components/Login'; 
import Home from './components/home';
import Slider from './components/Slider';


function Display(){
    return(
        <>
            <NavBar></NavBar>
            {/* <Home></Home>
            <Slider/> */}
        </>
    )
}


function App() {
    return (
        <Router>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Display />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Display />} />
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default App;
