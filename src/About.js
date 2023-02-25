import React from "react";
import HeroSection from "./components/Hero-section";
import { useProductContext } from "./context/productcontex";

function About() {
    const { myName } = useProductContext();
    return (
        <div>
            {myName}
            <HeroSection
                name="Omkar Mart E-commerce" />
        </div>
    )
}

export default About;