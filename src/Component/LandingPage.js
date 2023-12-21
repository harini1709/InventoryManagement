import React from 'react'
import '../Assets/LandingPage.css'
import profile from '../Assets/profile.png'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function LandingPage() {
    const location = useLocation();
    const { state } = location;
    const username = state?.username;
    return (
        <div class="pro">
        <Navbar/>
        <div class="message">
            <h1 >Welcome {username}!</h1>
            <button class="btn">Get Started</button>
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
                    <h3>Inven<span>Tory</span></h3>
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

function Footer(){
    return(
        <div class="foot">
            <footer class="footer">
                <div class="contain">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a>about us</a></li>
                                <li><a>our services</a></li>
                                <li><a>privacy policy</a></li>
                                <li><a>affliate programs</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a>FAQ</a></li>
                                <li><a>shipping</a></li>
                                <li><a>returns</a></li>
                                <li><a>order status</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Online Orders</h4>
                            <ul>
                                <li><a>raw materials</a></li>
                                <li><a>carbon fibers</a></li>
                                <li><a>composite materials</a></li>
                                <li><a>silicons</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Follow us</h4>
                            <div className="social-links">
                                <a
                                href="https://www.youtube.com/c/jamesqquick"
                                className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="3x" />
                                </a>
                                <a
                                href="https://www.facebook.com/learnbuildteach/"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="3x" />
                                </a>
                                <a
                                href="http://www.instagram.com/larnbuildteach"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="3x" />
                                </a>
                                <a href="https://wwww.twitter.com" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="3x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}