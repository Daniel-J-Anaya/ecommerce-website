import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {

  const [menu,setmenu] = useState("shop");

  return (
    <div class='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart Icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
