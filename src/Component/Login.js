import React from 'react'
import '../Assets/Login.css'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import inventory from "../Assets/inventory.png"
export default function Login(){
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    const landing=()=>{navigate("/land")}

    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        
        navigate('/land', { state: { username } });
    };

    return(
        <div class="page">
        <div class="container">
            <div class="login">
                <form>
                    <h1>Inventory</h1>
                    <hr/><br/>
                    <p>WELCOME BACK!</p><br/>
                    <label>UserName</label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username"></input>
                    <br/><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password"></input>
                    <button type="submit" onClick={handleLogin}>Login</button>
                    <p>
                        <a>Forgot Password?
                        <button class="sign" onClick={signup}>Don't have an account?Sign Up</button>
                        </a>
                    </p>
                </form>
            </div>
            <div class="pic">
            <img src={inventory}/>
            </div>
        </div>
        </div>
    )
}