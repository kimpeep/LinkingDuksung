import React from 'react';
import "../css/LandingPage.css"

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
            <button className="landingButton">
                Data UnLock!
            </button>
        </div>
    )

}

export default LandingPage