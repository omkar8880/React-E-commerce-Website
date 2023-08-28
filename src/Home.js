import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeaturedProduct from "./FeaturedProduct";

function Home(){
    return(
        <div>
            <HeroSection name = "Omkar Mart"/>
            <Services />
            <FeaturedProduct />
            <Trusted />
        </div>
    );
}

export default Home;
