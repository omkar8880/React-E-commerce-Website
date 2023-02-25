import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-h2">Feel Free to Contact Us!</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6424967318358!2d73.12577741417174!3d19.254406351345537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7967b93e4464d%3A0x9f48d5ef6b06e199!2sTriveni%20Garden!5e0!3m2!1sen!2sin!4v1671356847435!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form action="https://formspree.io/f/xdovnaqo" method="POST" className="form">
        <input type="text" placeholder="Username" autoComplete="off" required name="Username" className="input"></input>
        <input type="email" placeholder="Email" autoComplete="off" required name="Email-Id" className="input"></input>
        <textarea rows='10' cols='46' placeholder="Message" autoComplete="off" required name="Message" className="textarea"></textarea>
        <button className="button button-2">Send</button>
      </form>
    </div>
  )
}

export default Contact;