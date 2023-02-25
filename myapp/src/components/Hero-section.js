import React from "react";

function HeroSection(props) {
    return (
        <div>
            <div className="grid grid-column-two">
                <div className="hero-section-data">
                    <p>WELCOME TO</p>
                    <h1>{props.name}</h1>
                    <p>Lorem skjfbkwjefbkwjfbk sjdchbs skjdh ksdubabscj
                        dfbsejf sjhsdhfv djfhsjdhfs shdgfv sjhf jef wv abvf agwvf asg</p>
                    <button className="button">Shop Now</button>
                </div>
                <div className="hero-section-image">
                    <figure className="figure">
                        <img
                            className="img-style" src="/images/photo1.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;