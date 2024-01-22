import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import data from './data.js'

export default function App() {
  const cards = data.map((card, key) => {
    return <Card 
              key={card.id}
              {...card} //returns the data as an object instead of listing every field out
          />
  })

  return (
    <div className="div--App">
      <Navbar />
      <Hero />
      <div className="card--container">
        {cards}
      </div>
    </div>
  )
}