import React from 'react'
import "./footer.css"
import Logo from "./images/logo.png"

function footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img src={Logo} alt="footer logo"></img>
                <span>Tüm Hakları Saklıdır.</span>
            </div>
            <div className="footer__info">
                <p>info@direktsell.com</p>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default footer
