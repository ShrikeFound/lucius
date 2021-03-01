import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const FateDeck = () => {
  return (
    <Container>
      <h1>Using the Lucius Bot</h1>
      <p>
        A fate deck is automatically created for your use when you add Lucius to your Discord guild. Each user can add and control their respective control hands. You can use the commands shown below to control the deck and control hands.
      </p>
      <p>
        Once you sign up on the website you can create an update a through the breach character. Once you link it to a guild, you can view your twist deck and conveniently draw,cheat, and discard.
      </p>
      
      <h3 className="mt-5">Commands</h3>
      

      <ListGroup className = "no-side-borders">

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Help</h5>
            <small>All</small>
          </div>
          <p>
            Lists the available commands in a private message to you.
          </p>
          <small><code>!help</code></small>
        </ListGroup.Item>
        
        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Flip</h5>
            <small>Fate Deck</small>
          </div>
          <p>
            Flips a number of cards from the fate deck. Add '+' or '-' as an argument to modify the flip or enter a number to flip that many cards.
          </p>
          <small><code>!flip [++]</code>/<code>!flip [--]</code> or <code>!flip [number]</code>/<code>!flip [-number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Unflip</h5>
            <small>Fate Deck</small>
          </div>
          <p>
            Places a number of cards from the discard pile back unto the fate deck. Useful for when we flip a card too many but don't want to waste a Joker. Omitting a number will unflip one (1) card by default.
          </p>
          <small><code>!unflip [number]</code></small>
        </ListGroup.Item>


        <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <h5>Shuffle</h5>
          <small>Control Hand | Fate Deck</small>
        </div>
        <p>
          This command shuffles either the fate deck or your twist deck.
        </p>
        <small>control hand: <code>!shuffle_twist</code>     |    fate deck: <code>!shuffle_fate</code></small>
      </ListGroup.Item>


        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Create</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Creates a twist deck from the four suits given. Abbreviations are ok, so <code>!create t c r m</code> will  
            work just as well as <code>!create Tomes Crows Rams Masks</code>. The suits should be ordered in descending order.
          </p>
          <small><code>!create [defining suit] [ascendant suit] [center suit] [descendant suit]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Add</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Add a card with the chosen values to the bottom of your twist deck.
          </p>
          <small><code>!add [value] [suit]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Remove</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Remove card with the chosen values from your twist deck. You can select by value or, if there are multiple cards with the same value, value and suit.
          </p>
          <small><code>!remove [value] [suit]</code></small>
        </ListGroup.Item>


        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Cheat</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Cheats in a card with the given value from your control hand.
          </p>
          <small><code>!cheat [value]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Draw</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Draws a number of cards from your twist deck to your control hand. Omitting a numberwill draw one (1) card by default.
          </p>
          <small><code>!draw [number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Undraw</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Places a a number of cards back unto the twist deck from your control hand. For when you draw too many cards.
          </p>
          <small><code>!undraw [number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Discard</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Discards a card with the given value from your control hand.
          </p>
          <small><code>!discard [value]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Resurrect</h5>
            <small>Control Hand</small>
          </div>
          <p>
            places a number of cards from your graveyard back into your hand. For when you cheat a little too early.
          </p>
          <small><code>!res [number]</code></small>
        </ListGroup.Item>



      </ListGroup>

    </Container>
  )
}

export default FateDeck
