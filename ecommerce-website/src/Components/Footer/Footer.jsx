import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>  
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="#insta"><img src={instagram_icon} alt="instagram" /></a>
        </div>
        <div className="footer-icons-container">
          <a href="#pinterest"><img src={pinterest_icon} alt="pinterest" /></a>
        </div>
        <div className="footer-icons-container">
          <a href="#fb"><img src={facebook_icon} alt="facebook" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 Daniel James Anaya - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
