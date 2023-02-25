import React from "react";
import Companies from "./Compaines";
import HeroSection from "./components/Hero-section";
import Services from "./Service";
import FeatureProduct from "./FeatureProduct"
function Home() {
    return (
        <div>
            <div>
                <HeroSection
                    name="Omkar Mart" />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <FeatureProduct />
            </div>
            <div>
                <Companies />
            </div>
        </div>
    )
}

export default Home;