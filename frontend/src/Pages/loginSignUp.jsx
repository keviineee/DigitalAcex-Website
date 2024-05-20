import React from 'react'
import './CSS/loginSignUp.css'

const loginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email Address'/>
          <input type="password" placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default loginSignUp