import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import {BsGithub , BsLinkedin} from "react-icons/bs";


function Footer(){
    return(
        <>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3 className="contact-h3-1">Ready to get started?</h3>
              <h3 className="contact-h3-2">Talk to us today!</h3>
            </div>

            <div>
              <button className="btn hireme-btn">
                <NavLink to="/" className="hireme-btn-link"> Get Started </NavLink>
              </button>
            </div>
          </div>
        </section>
        /* footer section */

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3 className="footer-h3">Omkar Bhamare</h3>
              <p>MERN Stack Developer</p>
            </div>
            <div className="footer-subscribe">
              <h3 className="footer-h3">Subscribe to get important updates</h3>
              <form action="#" className="form-footer">
                <input type="email" name="email" placeholder="YOUR E-MAIL" style = {{width: '8rem'}}/>
                <button className="btn" style = {{marginTop: '1rem' , width: '8rem'}}>Subscribe</button>
                {/* <input type="submit" value="subscribe" className="footer-btn-subscribe" style = {{paddingLeft: "1.7rem"}}/> */}
              </form>
            </div>
            <div className="footer-social">
              <h3 style = {{ fontSize : '1.2rem'}}>Follow Us</h3>
              <div className="footer-social--icons grid-three-column">
                <div>
                  <a href="https://github.com/omkar8880" target="_blank">
                  <BsGithub className="icons" />
                  </a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/omkarbhamare/" target="_blank">
                  <BsLinkedin className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/me_omkarrr/"
                    target="_blank">
                    <FaInstagram className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3 style = {{ fontSize : '1.2rem'}}>Call Us</h3>
              <h3 style = {{ fontSize : '1.2rem'}}>+91 8452986515</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Omkar Bhamare. All Rights Reserved
              </p>
              <div>
                <p style={{fontSize : '0.9rem'}}>PRIVACY POLICY</p>
                <p style={{ marginTop: '-10px' , fontSize : '0.8rem' }}>TERMS & CONDITIONS</p> 
              </div>
            </div>
          </div>
        </footer>
        </>
    );
}

export default Footer;