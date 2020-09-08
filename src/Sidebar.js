import React from 'react'
import "./Sidebar.css"
import Friend from "./Friend";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__friends">
                 <Friend/>
                 <Friend/>
                 <Friend/>
                 <Friend/>
                 <Friend/>
            </div>
        </div>
    )
}

export default Sidebar
