import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import undrawTabs from '../images/undraw_tabs.svg'
import undrawMessages from '../images/undraw_messages.svg'
import luciusImage from '../images/lucius.png'
const LandingPage = () => {
  return (
    <>
      <Jumbotron className = "bg-dark text-white d-flex text-center align-items-center" style={{minHeight: "60vh",backgroundImage:`url(${luciusImage})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"80% 50%"}}>
        <div className="bg-overlay d-flex text-center align-items-center">
        <Container className="text-container">
          {/* <img className="lucius-logo" src={luciusImage} alt="Lucius leaping away from the viewer, cards in hand"/> */}
          <h1>Challenge Your Destiny.</h1>
          <p>Add the Lucius bot to Discord to easily keep track of fate decks, control hands, and character details. Mix and match features to play the game you want.</p>
          <a className="btn btn-primary btn-hero" href="https://discord.com/oauth2/authorize?client_id=800485041159012372&scope=bot&permissions=658496" target="_blank" rel='noreferrer'>Add Lucius to Discord</a>
          </Container>
          </div>
      </Jumbotron>  

      <Container>
        <Row className="align-items-center">
          <div className="col-lg">
              <h2>Fully Featured Card Dealer</h2>
            <p>
              The discord bot itself has all of the features you'd want from a digital fate deck,
              including the basics: flipping, unflipping, and shuffling. 
            </p>
            <p>
              It also features a twist deck feature that each player in the channel can use to create, update, and customize their twist decks according to their character's abilities.
            </p>
          </div>
          <div className="col-md-7 column-image">
            <img alt ="lucius logo" src={undrawMessages}/>
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <div className="col-lg order-12">
            <h2>Convenient Character Sheet</h2>
            <p>For more features, you can sign up for free and create a character on our website. Link your character sheet to your discord channel and you can flip using your aspects and skills to make action resolution faster and clearer.</p>
          </div>
          <div className="col-lg-7 column-image order-1">
            <img alt="lucius logo" src={undrawTabs} />
          </div>
        </Row>

      </Container>


    </>
  )
}

export default LandingPage