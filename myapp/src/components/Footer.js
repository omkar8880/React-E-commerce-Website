import react from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

function Footer() {
    return (
        <div className="mainfooter">
            {/* Contact-Footer */}
            <div className="footer">
                <div className="name-footer">
                    <h3>Omkar Bhamare <br />Full-Stack Developer </h3>
                </div>
                <div className="subscribe-footer">
                    <h3>Subscribe to get important updates</h3>
                    <form action="#" className="sub-form">
                        <input className="sub-form-1" type="text" placeholder="Your Email"></input>
                        <button className="button">Subscribe</button>
                    </form>
                </div>
                <div className="follow-us">
                    <h3>Follow Us!</h3>
                    <div className="social">
                        <AiOutlineLinkedin className="icon-2" />
                        <AiOutlineInstagram className="icon-2" />
                        <AiOutlineTwitter className="icon-2" />
                    </div>
                </div>
                <div className="call-footer">
                    <h3>Call Us <br /> +91 8452986515</h3>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Footer;