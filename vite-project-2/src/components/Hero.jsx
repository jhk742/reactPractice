import React from 'react'
import groupImg from '../../public/img/groupImg.png'

export default function Hero() {
    return (
        <div className="div--hero">
            <img src={groupImg} alt="cluster of different images" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}