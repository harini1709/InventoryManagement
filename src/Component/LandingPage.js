import React from 'react'
import '../Assets/LandingPage.css'
import profile from '../Assets/profile.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function LandingPage() {
    const location = useLocation();
    const { state } = location;
    const username = state?.username;
    return (
        <div>
        <div class="pro">
        <Navbar/>
        <div class="message">
            <h1 >Welcome {username}!</h1>
            <button class="btn">Get Started</button>
        </div>
        </div>
        <Footer/>
        </div>
  )
}
function Navbar(){
    const navigate=useNavigate();
    const login=()=>{navigate("/")}
    const dash=()=>{navigate("/dash")}
    const location = useLocation();
    const { state } = location;
    const username = state?.username;
    return(
        <div class="land">
            <header>
                <div class="left_area">
                    <h3>bit<span>rixx</span></h3>
                </div>
                <div class="right_area">
                    <a onClick={login} class="logout_btn">Logout</a>
                </div>
            </header>
            <div class="sidebar">
                <center>
                    <img src={profile} class="profile_image"></img>
                    <h4>{username}</h4>
                </center>
                <a onClick={dash}>Dashboard</a>
                <a>Reports</a>
                <a>About</a>
                <a>Settings</a>
            </div>
        </div>
    )
}

