import React from "react";
import chef from '../images/about-chef.png'
import '../stylesSheets/About.css';

export default function About(){
    return(
        <>
            <div className="about-container" id="About">
                <div className="about-container1">
                    <h4>Hello!!</h4>
                    <p>I'm the chef and creative mind behind the recipes on this website. Every recipe you find here has been crafted and tested by me with a vision to bring the world's flavors right to your home. My goal is simple: to make a diverse range of global recipes accessible to everyone, all in one place, so that each kitchen feels like it’s equipped for a master chef.

The heart of this website is built on the belief that food is more than just nourishment; it’s an experience that connects us, lifts our spirits, and brings joy. Whether it’s a comforting dish after a long day or a healthful meal to fuel our bodies, food has the unique power to influence our mood, our health, and our lives. That’s why I strive to make every recipe delicious, easy to follow, and a source of happiness for families and friends who gather around the table.

My aim is to help turn every kitchen into a hub of creativity and culinary joy, where even the simplest ingredients can transform into something extraordinary. With these recipes, I hope to inspire you to experiment, to explore new flavors, and to bring a little more excitement and warmth to your meals. So, let's cook, share, and enjoy the journey of delicious food together. Welcome to a world of flavors, and thank you for allowing me to be a part of your kitchen!</p>
                </div>
                <div className="about-container2">
                    <img src={chef} alt="chef-img"></img>
                </div>
            </div>
        </>
    )
}