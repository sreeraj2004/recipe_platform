import React, { useContext } from "react";
import { UserContext } from './UserContext'; 
import chesse from '../images/cheeseCake.jpg';
import chicken from '../images/chickenBiriyani.jpg';
import chocolate from '../images/chocolateBrownie.jpg';
import pizza from '../images/cpizza.jpg';
import fried from '../images/friedEggsAvacado.jpg';
import pan from '../images/pancake.jpg';
import ramen from '../images/ramen.jpg';
import '../stylesSheets/Slider.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Slider() {
    const { user } = useContext(UserContext);  
    const navigate = useNavigate();

    const handleImageClick = (imageId) => {
        if (user) {
            const formData = new FormData();
            formData.append('userEmail', user.email);
            formData.append('imageId', imageId);
            formData.append('name',user.name);
    
            axios.post('http://localhost/recipe_platform/src/PHP/email.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                console.error(err);
                alert('An error occurred while sending the email.');
            });
        } else {
            alert('Please log in first!');
            navigate('/login');
        }
    };

    return (
        <>
            <h1 className="heading">Popular Recipes</h1>
            <div className="slider">
                <img src={chesse} alt="Cheese Cake" id="one" onClick={() => handleImageClick('one')} />
                <img src={chicken} alt="Chicken Biriyani" id="two" onClick={() => handleImageClick('two')} />
                <img src={chocolate} alt="Chocolate Brownie" id="three" onClick={() => handleImageClick('three')} />
                <img src={pizza} alt="Pizza" id="four" onClick={() => handleImageClick('four')} />
                <img src={fried} alt="Fried Eggs Avocado" id="five" onClick={() => handleImageClick('five')} />
                <img src={pan} alt="Pancake" id="six" onClick={() => handleImageClick('six')} />
                <img src={ramen} alt="Ramen" id="seven" onClick={() => handleImageClick('seven')} />
            </div>
        </>
    );
}
