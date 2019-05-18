import React from 'react'
import './LandingPage.scss'

function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="LandingPage__search">
                <h3>What issues are important to you?</h3>
                <input className="form-control" type="text" placeholder="Search" />
                
            </div>
        </div>
    );
}

export default LandingPage;