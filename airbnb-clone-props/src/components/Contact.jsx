import React from 'react'
import mailIcon from '../img/email-icon.png'
import phoneIcon from '../img/phone-icon.png'

export default function Contact({img, name, phone, email}) { //destructuring the props object instead of just doing Contact(props) {...}
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={img} className="cat-img"/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src={phoneIcon} />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}
