import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <div>
            <h2 style = {{fontSize : '5rem'}}>404</h2>
            <h3 style = {{fontSize : '2.5rem' , color : 'black' , marginTop: '-2.6rem'}}>UH OH! You're lost.</h3>
            <p style = {{margin : '2rem 0'}}>
                The page you are looking for does not exist. How you got here is a
                mystery. But you can click the button below to go back to the
                homepage.
            </p>

            <NavLink to="/">
                <button className = "btn">Go Back to Home</button>
            </NavLink>
        </div>
    );
}

export default Error;