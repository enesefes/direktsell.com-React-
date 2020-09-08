import React from 'react'
import "./Messages.css"
import Sidebar from './Sidebar'
import Chat from './Chat'

function Messages() {
    return (
        <div className="messages">
            <h1>Messages</h1>
            <div className="messages__body">

            
            <div className="messages__friends">
                <Sidebar/>
            </div>
            <div className="messages__chat">
                <Chat/>
            </div>
            </div>
        </div>
    )
}

export default Messages
