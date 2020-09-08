import React from 'react'
import "./Chat.css"
import Logo from "./images/logo.png"

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <img src={Logo} alt="company_logo"></img>
                <h3>Company Name</h3>
            </div>
            <div className="chat__body">
                <p>Naber</p>
                <p>Naber</p>
            </div>

        </div>
    )
}

export default Chat
