import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
    const navigate=useNavigate();
    const loginButton=()=>{navigate("/login")}
    const signup=()=>{navigate("/signup")}
  return (
    <div>
        <button onClick={loginButton}>Login Page</button>
        <button onClick={signup}>SignUp Page</button>
    </div>
  )
}
