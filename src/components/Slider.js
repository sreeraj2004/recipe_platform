import React, { useContext } from "react";
import { UserContext } from './UserContext'; // Import UserContext to access user information
import chesse from '../images/cheeseCake.jpg';
import chicken from '../images/chickenBiriyani.jpg';
import chocolate from '../images/chocolateBrownie.jpg';
import pizza from '../images/cpizza.jpg';
import fried from '../images/friedEggsAvacado.jpg';
import pan from '../images/pancake.jpg';
import ramen from '../images/ramen.jpg';
import '../stylesSheets/Slider.css';
import { useNavigate } from 'react-router-dom';

export default function Slider() {
    const { user } = useContext(UserContext);  // Get user from context
    const navigate = useNavigate();

    // Function to handle image click
    const handleImageClick = (imageId) => {
        if (user) {
            // User is logged in, show an alert with their email and image ID
            alert(`User Email: ${user.email}, Image ID: ${imageId}`);
        } else {
            // User is not logged in, navigate to login page
            alert('Please log in first!');
            navigate('/login');
        }
    };

    return (
        <>
            <h1 className="heading">Popular Recipes</h1>
            <div className="slider">
                <img src={chesse} alt="image1" id="one" onClick={() => handleImageClick('one')} />
                <img src={chicken} alt="image2" id="two" onClick={() => handleImageClick('two')} />
                <img src={chocolate} alt="image3" id="three" onClick={() => handleImageClick('three')} />
                <img src={pizza} alt="image4" id="four" onClick={() => handleImageClick('four')} />
                <img src={fried} alt="image5" id="five" onClick={() => handleImageClick('five')} />
                <img src={pan} alt="image6" id="six" onClick={() => handleImageClick('six')} />
                <img src={ramen} alt="image7" id="seven" onClick={() => handleImageClick('seven')} />
            </div>
        </>
    );
}
