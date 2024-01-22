import React from 'react'
import reactLlogo from '../../imgs/react-logo.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="navLogo">
                <img src={reactLlogo} alt="react logo"></img>
                <h3 className="navWordLogo">ReactFacts</h3>
            </div>
            <h4 className="navTitle">React Course - Project 1</h4>
        </nav>
    )
}