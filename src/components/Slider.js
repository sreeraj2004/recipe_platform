import React from "react";
import chesse from '../images/cheeseCake.jpg';
import chicken from '../images/chickenBiriyani.jpg';
import chocolate from '../images/chocolateBrownie.jpg';
import pizza from '../images/cpizza.jpg';
import fried from '../images/friedEggsAvacado.jpg';
import pan from '../images/pancake.jpg';
import ramen from '../images/ramen.jpg';
import '../stylesSheets/Slider.css';

export default function Slider(){
    return(
        <>
            <h1 className="heading">Popular Recipes</h1>
            <div className="slider">
                <img src={chesse} alt="image1" id="one"></img>
                <img src={chicken} alt="image2" id="two"></img>
                <img src={chocolate} alt="image3" id="three"></img>
                <img src={pizza} alt="image4" id="four"></img>
                <img src={fried} alt="image5" id="five"></img>
                <img src={pan} alt="image6" id="six"></img>
                <img src={ramen} alt="image7" id="seven"></img>
            </div>
        </>
    )
}