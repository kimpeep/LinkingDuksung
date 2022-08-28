import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/LandingPage.css"
import button from "../img/button.png"

const LandingPage = () => {
    return(
        <div className='landing'>
            <div className='Text'>
                <div className='bigText'> 
                    Linking 
                </div>
                <div className='smallText'>
                    <p>Global Convergence</p>
                    <p>Science&Technology</p>
                    <p>Art&Design</p>
                </div>
                <div className='bigText'> 
                    at Duksung!
                </div>
            </div>
            <NavLink to="/dataunlock">
            <button className="landingButton">
                Data UnLock!
            </button>
            </NavLink>

        </div>
    )

}

export default LandingPage