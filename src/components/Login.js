import React, { useState, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from "./UserContext";
import '../stylesSheets/Login.css';

export default function Login() {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const nameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const logemailref = useRef();
    const logpassref = useRef();
    const signinpara = useRef();
    const signuppara = useRef();
    const navigate = useNavigate(); 
    const [users, setUsers] = useState([]);
    const { setUser } = useContext(UserContext);  // Access setUser from context

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    function add(event) {
        event.preventDefault();
        const newUser = {
            name: nameref.current.value,
            email: emailref.current.value,
            password: passwordref.current.value
        };   
        signuppara.current.textContent = "";

        // Validation logic
        if (!/\S+@\S+\.\S+/.test(newUser.email)) {
            signuppara.current.textContent = "Email is not according to the format";
            signuppara.current.style.color = 'red';
        } else if (newUser.password.length < 8) {
            signuppara.current.textContent = "Password should be at least 8 characters long";
            signuppara.current.style.color = 'red';
        } else if (!/[A-Z]/.test(newUser.password)) {
            signuppara.current.textContent = "Password should contain at least one uppercase letter";
            signuppara.current.style.color = 'red';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newUser.password)) {
            signuppara.current.textContent = "Password should contain at least one special character";
            signuppara.current.style.color = 'red';
        } else if (users.some(element => element.name === newUser.name)) {
            signuppara.current.textContent = "User with the same name already exists";
            signuppara.current.style.color = 'red';
        } else if (users.some(element => element.email === newUser.email)) {
            signuppara.current.textContent = "Email already exists";
            signuppara.current.style.color = 'red';
        } else {
            setUsers(prev => [...prev, newUser]);
            alert("User with name " + newUser.name + " has been added successfully");
        }
    }
    
    function Log(event) {
        event.preventDefault();
        const email = logemailref.current.value;
        const pass = logpassref.current.value;
        const foundUser = users.find(user => user.email === email && user.password === pass);
        signinpara.current.textContent = "";
        if (foundUser) {
            setUser({ name: foundUser.name, email: foundUser.email });  // Set both name and email
            navigate('/home');  // Navigate to home on successful login
        } else {
            signinpara.current.textContent = 'Email or Password is incorrect';
            signinpara.current.style.color = 'red';
        }
    }

    return (
        <div className="Parent">
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
                <div className="sign-up">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span className="social-container">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                        </span>

                        <input type="text" ref={nameref} placeholder="Name" required />
                        <input type="email" ref={emailref} placeholder="Email" required />
                        <input type="password" ref={passwordref} placeholder="Password" required />
                        <p ref={signuppara}></p>
                        <button type="submit" onClick={add} className="login-btn">Sign Up</button>
                    </form>
                </div>

                <div className="sign-in">
                    <form action="#">
                        <h1>Sign In</h1>
                        <span className="social-container">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                        </span>

                        <input type="email" ref={logemailref} placeholder="Email" required />
                        <input type="password" ref={logpassref} placeholder="Password" required />
                        <p ref={signinpara}></p>
                        <button type="submit" onClick={Log} className="login-btn">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us, please log in with your personal info</p>
                            <button onClick={handleSignInClick} className="login-btn" style={{border: '3px solid #ccc'}}>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button onClick={handleSignUpClick} className="login-btn" style={{border: '3px solid #ccc'}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
