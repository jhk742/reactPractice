import React from 'react'

import star from '../../public/img/star.png'

export default function Card(props) {
    let badgeText = props.openSpots === 0 ? "SOLD OUT" : props.location === "Online" ? "ONLINE" : null;
    return (
        <div className="card--container">
            <div className="div--card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`../../public/img/${props.coverImg}`} alt="lady in wedding dress" className="card--img"/>
                <div className="card--text">
                    <img src={star} alt="star rating" />
                    <span>{props.stats.rating}</span>
                    <span className="gray space">({props.stats.reviewCount}) - </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    )
}