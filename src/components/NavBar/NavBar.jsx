import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {CoinContext} from '../../context/CoinContext';
import { useContext } from 'react';

export const NavBar = () => {

    const {setCurrency} = useContext(CoinContext);
    const currentHandler = (event) =>{
        setCurrency({
            name:event.target.value,
            symbol:event.target.value === 'usd' ? '$' : event.target.value === 'eur' ? '€' : '₹'
        })
    }
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>CryptoStats</span>
        </div>
        <div className="nav-right">
            <select onChange={currentHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
        </div>
    </nav>
  )
}
