import React from "react";
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
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function Slider(props) {
     
    const user = props.user;
    const navigate = useNavigate();

    const handleImageClick = (imageId) => {
        if (user) {
            const formData = new FormData();
            formData.append('userEmail', user.email);
            formData.append('imageId', imageId);
            formData.append('name', user.name);
    
            axios.post('http://localhost/recipe_platform/src/PHP/email.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                toast.success('Email sent successfully!', { autoClose: 2000 }); 
            })
            .catch((err) => {
                console.error(err);
                toast.error('Failed to send email. Please try again.', { autoClose: 2000 }); 
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
                <img src={chesse} alt="Cheese Cake" id="one" onClick={() => handleImageClick('one')}  loading="lazy"/>
                <img src={chicken} alt="Chicken Biriyani" id="two" onClick={() => handleImageClick('two')}  loading="lazy"/>
                <img src={chocolate} alt="Chocolate Brownie" id="three" onClick={() => handleImageClick('three')} loading="lazy"/>
                <img src={pizza} alt="Pizza" id="four" onClick={() => handleImageClick('four')}  loading="lazy"/>
                <img src={fried} alt="Fried Eggs Avocado" id="five" onClick={() => handleImageClick('five')}  loading="lazy"/>
                <img src={pan} alt="Pancake" id="six" onClick={() => handleImageClick('six')} loading="lazy"/>
                <img src={ramen} alt="Ramen" id="seven" onClick={() => handleImageClick('seven')} loading="lazy"/>
            </div>
            <ToastContainer /> 
        </>
    );
}
