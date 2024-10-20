import React, { useState , useRef } from "react";
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
    const [user , setUser] = useState([]);
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
    
        if (!/\S+@\S+\.\S+/.test(newUser.email)) {
            signuppara.current.textContent = "Email is not according to the format";
            signuppara.current.style.color = 'red';
        }
        else if (newUser.password.length < 8) {
            signuppara.current.textContent = "Password should be at least 8 characters long";
            signuppara.current.style.color = 'red';
        }
        else if (!/[A-Z]/.test(newUser.password)) {
            signuppara.current.textContent = "Password should contain at least one uppercase letter";
            signuppara.current.style.color = 'red';
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newUser.password)) {
            signuppara.current.textContent = "Password should contain at least one special character";
            signuppara.current.style.color = 'red';
        } 
        else {
            setUser(prev => {
                const updatedUsers = [...prev, newUser];
                console.log(updatedUsers);
                return updatedUsers;
            });
    
            alert("User with name " + newUser.name + " has been added successfully");
        }
    }
    
    

    function Log(event){
        event.preventDefault();
        const email = logemailref.current.value;
        const pass = logpassref.current.value;
        let found = user.some(Element =>Element.email === email && Element.password === pass);
        signinpara.current.textContent="";
        if(found){
            alert("Login Successfull");
        }
        else{
            signinpara.current.textContent = 'Email or Password is incorrect';
            signinpara.current.style.color = 'red';
        }
    }

    return (
        <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
            <div className="sign-up">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <p>or use your email for registration</p>
                    <input type="text"ref={nameref} name="txt" placeholder="Name" required />
                    <input type="email" ref={emailref} name="email" placeholder="Email" required />
                    <input type="password" ref={passwordref} name="pwsd" placeholder="Password" required />
                    <p ref={signuppara}></p>
                    <button type="submit" onClick={add}>Sign Up</button>
                </form>
            </div>

            <div className="sign-in">
                <form action="#">
                    <h1>Sign In</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <p>or use your account</p>
                    <input type="email" ref={logemailref} name="email" placeholder="Email" required />
                    <input type="password" ref={logpassref} name="pwsd" placeholder="Password" required />
                    <p ref={signinpara}></p>
                    <a href="#">Forgot your password?</a>
                    <button type="submit" onClick={Log}>Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us, please log in with your personal info</p>
                        <button onClick={handleSignInClick} style={{ border: '1px solid #ccc' }}>Sign In</button>
                    </div>
                    <div className="overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button onClick={handleSignUpClick} style={{ border: '1px solid #ccc' }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
