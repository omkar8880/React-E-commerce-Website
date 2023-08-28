import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection(props) {
    return (
        <div className="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to</p>
                    <h1 className="brand-name">{props.name}</h1>
                    <p className="lorem-data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                        atque temporibus veniam doloribus libero ad error omnis voluptates
                        animi! Suscipit sapiente.</p>
                    <NavLink>
                        <button className="btn">Shop Now</button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        <img src="./images/photo1.jpg" alt="" className="img-style"/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;