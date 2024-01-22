import React from 'react'
import airBnbLogo from '../../public/img/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className="navBar">
            <img src={airBnbLogo} alt="air bnb logo" className="airbnblogo" />
        </nav>
    )
}