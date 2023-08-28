import React from "react";

import { AiOutlineAmazon } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";

function Trusted() {
    return (
        <div className="container-2">
            <h3 style = {{color: "#817777"}}>Trusted By 1000+ Companies</h3>
            <div className="brand-section-slider">
                {/* my 1st img  */}
                <div className="slide">
                    <AiOutlineAmazon className="icon icon-2" />
                </div>
                <div className="slide">
                    <SiFlipkart className="icon icon-2" />
                </div>
                <div className="slide">
                    <SiThenorthface className="icon icon-2" />
                </div>
                <div className="slide">
                    <SiNike className="icon icon-2" />
                </div>
                <div className="slide">
                    <SiJordan className="icon icon-2" />
                </div>
            </div>
        </div>
    );
}

export default Trusted;