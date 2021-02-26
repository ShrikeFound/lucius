import React, { useRef } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
const CharacterForm = ({ character, id,db }) => {
  const { currentUser } = useAuth();

  const might = useRef();
  const grace = useRef();
  const speed = useRef();
  const resilience = useRef();
  const intellect = useRef();
  const charm = useRef();
  const cunning = useRef();
  const tenacity = useRef();
  const name = useRef();


  const updateCharacter = (e) => {
    e.preventDefault();
    console.log("submitting character changes...")
    console.log(currentUser.uid)
    const characterRef = db.ref('users/' + currentUser.uid + '/characters/' + id)
    const characterAspects = {
      name: name.current.value,
      might: Number(might.current.value),
      grace: Number(grace.current.value),
      speed: Number(speed.current.value),
      resilience: Number(resilience.current.value),
      intellect: Number(intellect.current.value), 
      charm: Number(charm.current.value),
      cunning: Number(cunning.current.value),
      tenacity: Number(tenacity.current.value)
    } 
    characterRef.update(characterAspects)
  }

  const deleteCharacter = (e) => {
    e.preventDefault();
    const characterRef = db.ref('users/' + currentUser.uid + '/characters/' + id)
    characterRef.remove();
    console.log("deleting...");
  }


  return (
    <Card className="bg-secondary text-white">
      <Card.Body >
        <h2 className="text-center mb-4">{character.name}</h2>
        <Button className = "delete-button btn-danger" onClick={deleteCharacter}>X</Button>
        <Form>
          <Form.Group>
            <Form.Label>Character Name:</Form.Label>
            <Form.Control type="text" defaultValue={character.name} ref={name}></Form.Control>
          </Form.Group>

          {/* Physical Aspects */}
          <Form.Group>
            <Form.Label>Might</Form.Label>
            <Form.Control type="number" defaultValue={character.might} ref={might} ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Grace</Form.Label>
            <Form.Control type="number" defaultValue={character.grace} ref={grace}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Speed</Form.Label>
            <Form.Control type="number" defaultValue={character.speed} ref={speed}></Form.Control>
          </Form.Group>


          <Form.Group>
            <Form.Label>Resilience</Form.Label>
            <Form.Control type="number" defaultValue={character.resilience} ref={resilience}></Form.Control>
          </Form.Group>

          {/* Mental Aspects */}
          <Form.Group>
            <Form.Label>Intellect</Form.Label>
            <Form.Control type="number" defaultValue={character.intellect} ref={intellect}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Charm</Form.Label>
            <Form.Control type="number" defaultValue={character.charm} ref={charm}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Cunning</Form.Label>
            <Form.Control type="number" defaultValue={character.cunning} ref={cunning}></Form.Control>
          </Form.Group>


          <Form.Group>
            <Form.Label>Tenacity</Form.Label>
            <Form.Control type="number" defaultValue={character.tenacity} ref={tenacity}></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={updateCharacter} >Update Name</Button>
          
          <Form.Text className="danger"></Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CharacterForm