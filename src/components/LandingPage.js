import React from 'react'
import { Jumbotron,Container } from 'react-bootstrap'
const LandingPage = () => {
  return (
    <>
      <Jumbotron className = "bg-dark text-white d-flex text-center align-items-center" style={{height: "90vh"}}>
        <Container className="text-container">
          <h1>Challenge Your Destiny.</h1>
          <p>Add the Lucius bot to Discord to easily keep track of fate decks, control hands, and character details</p>
          <a className="btn btn-primary btn-hero" href="https://discord.com/oauth2/authorize?client_id=800485041159012372&scope=bot&permissions=658496" target="_blank" rel='noreferrer'>Add Lucius to Discord</a>
        </Container>
      </Jumbotron>  
    </>
  )
}

export default LandingPage