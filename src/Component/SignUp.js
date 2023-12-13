import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import inventory1 from "./Assets/inventory1.png"
export default function SignUp(){
    const navigate=useNavigate();
    const loginButton=()=>{navigate("/")}
    return(
        <div class="container">
            <div class="login">
                <form>
                    <h1>Sign Up</h1>
                    <hr/><br/>
                    <p>WELCOME</p><br/>
                    <label>UserName</label>
                    <input type="text" placeholder="Create a username"></input><br/>
                    <label>Email</label>
                    <input type="text" placeholder="abc@exampl.com"></input><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password"></input><br/>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Re-enter your Password"></input><br/>
                    <button>Submit</button>
                    <p>
                        <a>
                        <button class="sign" onClick={loginButton}>Already an user?Log In</button>
                        </a>
                    </p>
                    <p>
                        <a href="#">By clicking on the Submit button you agree to our terms and conditions and privacy policy</a>
                    </p>
                </form>
            </div>
            <div class="pic">
            <img src={inventory1}/>
            </div>
        </div>
    )
}