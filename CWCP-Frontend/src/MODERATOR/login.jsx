import React from 'react'
import "./login.css"
const login = () => {
    return (
        <div className='loginbody'>
            <div className="left">
                <div className="logo">
                    <img src="CWCP-LOGO.svg" />

                </div>
                <h2>City Wide Concern Portal</h2>
                <p>Keeping communities safe and connected</p>
            </div>


            <div className="right">
                <div className="login-box">
                    <h2>Moderator Log In</h2>

                    <label>USERNAME/EMAIL</label>
                    <input type="text" id="username" name="username" />

                    <label >PASSWORD</label>
                    <input type="password" id="password" name="password" />

                    <button >Login</button>



                </div>
            </div>
        </div>
    )
}

export default login