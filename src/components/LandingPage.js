import React from 'react'
import { Jumbotron,Image } from 'react-bootstrap'
const LandingPage = () => {
  return (
    <>
      <Jumbotron className = "bg-dark text-white bg-image" style={{height: "90vh"}}>
        <h1>Meet Your Destiny</h1>
        <p>Add the Philethis Discord bot and other online tools and enjoy  playing Tabletop RPGs at a safe distance</p>
      </Jumbotron>  
    </>
  )
}

export default LandingPage