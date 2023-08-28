import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./contex/ProductContex";

function About(){

    const {name} = useProductContext();
    return(
        <div>
            
            <HeroSection name = "Omkar E-commerce"/>
            {name}
        </div>
    );
}

export default About;