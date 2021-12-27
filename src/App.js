import React from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"


function App() {
  const cardElements = data.map(card => {
    return <Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      key={card.id}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  );
}

export default App;
