import React from 'react'
import "./Friend.css"
import Logo from "./images/logo.png"


function Friend() {
    return (
        <div className="friend">
            <img src={Logo} alt="company_logo"></img>
            <h3>Company Name</h3>
        </div>
    )
}

export default Friend
