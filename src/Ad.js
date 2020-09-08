import React from 'react'
import UserLogo from "./images/user.png"
import "./Ad.css"

function Ad() {
    return (
        <div className="ad">
            <h3>Turkey</h3>
            <div className="ad__Information">
                <div className="ad__Information__UserLogo">
                    <img alt="userLogo" src={UserLogo}></img>
                    <p>adasdadasad asa da sda dasadasadas dadasa dasada sdadas adas ad</p>
                </div>
                <div className="ad__Information__Date">
                    <label>buying</label>
                    <span>11 Agust</span>
                </div>
                
                
                
            </div>
            <div className="ad__button">
                <button>
                    Send Message
                </button>
                <button>
                    Call
                </button>
            </div>
            
            


        </div>
    )
}

export default Ad
