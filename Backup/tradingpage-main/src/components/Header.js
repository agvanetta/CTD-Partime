import React from 'react'
import Logo from './robinlogo.svg'
import "./Header.css"
import { Link } from "react-router-dom";


function Header() {

    const handleLogout = () => {
        localStorage.removeItem("jwt")
           window.location.reload()
    }

  return (
    <div className='header__wrapper'>
        {/*logo*/}
        <div className='header__logo'>
            <img src={Logo} width={25} alt="logo" />
        </div>
        {/*search*/}
        <div className='header__search'>
            <div className='header_searchContainer'>
                <input placeholder='Search' type='text' />
            </div>
        </div>
        {/*menuitems*/}
        <div className='header__menuItems'>
             <Link to="/tradingpage" className="header__link">
                <div className="header__option">
                    <span className="header__optionTop">Home</span>
                </div>
            </Link>

            
            
            <Link to="/realtimechart" className="header__link">
                <div className="header__option">
                    <span className="header__optionTop">Trading</span>
                </div>
            </Link>
            
            <Link to="/account" className="header__link">
                <div className="header__option">
                    <span className="header__optionTop">Account</span>
                </div>
            </Link>

            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionTop" onClick={handleLogout}>Log out</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header