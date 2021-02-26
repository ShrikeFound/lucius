import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
const CharacterForm = ({ character, index }) => {
  const { currentUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting character changes...")
    console.log(currentUser.uid)
  }
  return (
    <Card className="bg-secondary text-white">
      <Card.Body >
        <h3 className="text-center mb-4">{character.name}</h3>
        <Form>
          <Form.Group>
            <Form.Label>Character Name:</Form.Label>
            <Form.Control type="text" defaultValue={character.name}></Form.Control>
          </Form.Group>

          {/* Physical Aspects */}
          <Form.Group>
            <Form.Label>Might</Form.Label>
            <Form.Control type="text" defaultValue={character.might}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Grace</Form.Label>
            <Form.Control type="text" defaultValue={character.grace}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Speed</Form.Label>
            <Form.Control type="text" defaultValue={character.speed}></Form.Control>
          </Form.Group>


          <Form.Group>
            <Form.Label>Resilience</Form.Label>
            <Form.Control type="text" defaultValue={character.resilience}></Form.Control>
          </Form.Group>

          {/* Mental Aspects */}
          <Form.Group>
            <Form.Label>Intellect</Form.Label>
            <Form.Control type="text" defaultValue={character.intellect}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Charm</Form.Label>
            <Form.Control type="text" defaultValue={character.charm}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Cunning</Form.Label>
            <Form.Control type="text" defaultValue={character.cunning}></Form.Control>
          </Form.Group>


          <Form.Group>
            <Form.Label>Tenacity</Form.Label>
            <Form.Control type="text" defaultValue={character.tenacity}></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit} >Update Name</Button>
          
          <Form.Text className="danger"></Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CharacterForm