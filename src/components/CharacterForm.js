import React from 'react'
import { Button, Card, Form} from 'react-bootstrap'
const CharacterForm = ({ character,key,index }) => {
  return (
    <Card className="bg-secondary text-white">
      <Card.Body >
        <h5 className="text-center mb-4">{character.name},{index}</h5>
        <Form>
          <Form.Group className="d-flex">
            <Form.Label>Character Name:</Form.Label>
            <Form.Control type="text" value={character.name}></Form.Control>
            <Button variant="primary" type="submit" >Update Name</Button>
          </Form.Group>
          
          <Form.Text className="danger"></Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CharacterForm