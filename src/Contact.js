import React from "react";

function Contact() {
    return (
        <>
            <h2 className="common-heading">Feel free to Contact Us!</h2>

            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6379776632175!2d73.12529077342!3d19.2546031463448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7967b9196fcfd%3A0x91b5c1b2bf6f7ee9!2sTriveni%20Garden%2C%20Sambhaji%20Nagar%2C%20Adharwadi%2C%20Khadakpada%2C%20Kalyan%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1692180768081!5m2!1sen!2sin" 
            width="100%" height="300" style={{ border:0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" className="iframe">
            </iframe>
            <div className="container-3">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xzblewwj"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            placeholder="username"
                            name="Username"
                            required
                            autoComplete="off"
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="Message"
                            cols="30"
                            rows="10"
                            required
                            autoComplete="off"
                            placeholder="Enter you message"></textarea>

                        <input type="submit" value="Send" className="btn"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;