import React from 'react'
import trollFace from '../../public/img/troll_face.png'

export default function Header() {
    return (
        <header className="navBar">
            <div className="navBar--logo">
                <img src={trollFace} alt="troll face logo" />
                <h1>Meme Generator</h1>
            </div>
            <h4 className="navBar--secondary--text">React Course - Project 3</h4>
        </header>
    )
}