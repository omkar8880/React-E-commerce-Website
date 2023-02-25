import React from "react";
import { NavLink } from "react-router-dom";

function ContactFooter() {
    return (
        <div>
            <section className="contact-footer">
                <div className="grid-4 grid-column-two">
                    <div>
                        <h3>Ready to get started? <br />Talk to us today.</h3>
                    </div>
                    <div>
                        <button className="button">
                            <NavLink to={"/contact"} className="navlink-btn">Get Started</NavLink>
                        </button>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default ContactFooter;