import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>CryptoStats</span>
        </div>
        <div className="nav-right">
            <select name="" id="">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
    </nav>
  )
}
