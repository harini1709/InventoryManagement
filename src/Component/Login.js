import React from 'react'
import { useNavigate } from 'react-router-dom'
import inventory from "./Assets/inventory.png"
export default function Login(){
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    
    return(
        <div class="container">
            <div class="login">
                <form>
                    <h1>Inventory</h1>
                    <hr/><br/>
                    <p>WELCOME BACK!</p><br/>
                    <label>Email</label>
                    <input type="text" placeholder="abc@exampl.com"></input>
                    <br/><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password"></input>
                    <button>Login</button>
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
    )
}