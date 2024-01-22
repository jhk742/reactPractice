import React from 'react'
import cows from '../../public/img/cows.jfif'

export default function App() {

  function handleClick() {
    console.log("I was clicked")
  }

  function handleOnMouseOver() {
    console.log("Hovering over the image!")
  }

  return (
    <div className='container'>
        <img onMouseOver={handleOnMouseOver} 
          src={cows} 
          alt="cows grazing" 
          className="container--img"
        />
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}