import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up!</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Submit</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here!</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
