import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/DigitalAcex_Logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" id="navlogo" />
            <p>DigitalAcex</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link to='/' className="nav-menu-link">Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shop")}}><Link to='/shop' className="nav-menu-link">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("reviews")}}><Link to='/reviews' className="nav-menu-link">Reviews</Link>{menu==="reviews"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("aboutus")}}><Link to='/aboutus' className="nav-menu-link">About Us</Link>{menu==="aboutus"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>
            <div className="nav-count-cart">0</div>
        </div>
    </div>
  )
}

export default Navbar
