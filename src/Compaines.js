import React from "react";
import { AiOutlineAmazon } from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";

function Companies() {
    return (
        <div >
            <div className="companies">
                <div>
                    <h3>Trusted by 1000+ Companies</h3>
                </div>
                <div className="grid-3 grid-column-five">
                    <AiOutlineAmazon className="icon icon-2" />
                    <SiFlipkart className="icon icon-2" />
                    <SiThenorthface className="icon icon-2" />
                    <SiNike className="icon icon-2" />
                    <SiJordan className="icon icon-2" />
                </div>
            </div>
        </div>
    )
}

export default Companies;