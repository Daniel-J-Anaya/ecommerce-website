import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import close_icon from '../Assets/cart_cross_icon.png'
import menu_icon from '../Assets/menu_icon.png'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  };

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  };

  return (
    <div className='navbar'>
      <div onClick={()=>{setMenu("shop")}} id='nav-logo'>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>SHOPPER</p>
          </div>
        </Link>
        {menu==="shop"?<hr/>:<></>}
      </div>
      <ul className="nav-menu hideOnMobile">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <ul className="sidebar" id='sidebar'>
        <img className='close-icon' src={close_icon} onClick={hideSidebar} alt='close'/>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <div className='nav-login-cart'><Link to='/login'><button>Login</button></Link></div>
      </ul>
      <img className='menu-icon' src={menu_icon} alt="menu" onClick={showSidebar}/>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
