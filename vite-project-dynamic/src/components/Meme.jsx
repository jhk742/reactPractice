import React, {useState} from 'react'
import memesData from '../data/memesData'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    console.log(meme)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[Math.floor(Math.random() * memesArray.length)].url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main className="form">
            <form className="form--input--container">
                <div className="form--input">
                    <p>Top text</p>
                    <input 
                        type="text" 
                        placeholder="Enter text here..." 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div className="form--input">
                    <p>Bottom text</p>
                    <input 
                        type="text" 
                        placeholder="Enter text here..." 
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div className="meme--container">
                <button 
                    className="form--btn--submit"
                    onClick={getMemeImage}
                >Get a new meme image</button>
                {meme.randomImage && <img src={meme.randomImage} alt="meme" className="meme"></img>}
                {meme.randomImage && <h2 className="meme--text top">{meme.topText}</h2>}
                {meme.randomImage && <h2 className="meme--text bottom">{meme.bottomText}</h2>}
            </div>
        </main>
    )
}
/** 
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    
    const [thingsArray, setThingsArray] = React.useState([])
    
    function addThing() {
        setThingsArray(prev => [...prev, `Thing ${thingsArray.length + 1}`])
    }
    
    const things = thingsArray.map(thing => <p>{thing}</p>)
    
    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {things}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
 */

/* UPDATING STATE WHEN STATE IS AN OBJECT
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {...prevContact, isFavorite: !prevContact.isFavorite}
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
*/