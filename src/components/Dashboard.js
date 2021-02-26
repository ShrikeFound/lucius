import React, { useState, useRef } from 'react'
import { useList } from "react-firebase-hooks/database";
import { Button, Card, Container, Form} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import app from "../firebase.js"
import CharacterForm from './CharacterForm';
const Dashboard = () => {
  const { currentUser } = useAuth();
  const db = app.database()
  const [inputError, setInputError] = useState("");
  const nameRef = useRef();
  
  db.ref('users/' + currentUser.uid).on("value", (snapshot) => {
    const user = snapshot.val()
    if (user) {
    } else {
      console.log("no user!");
      db.ref('users/' + currentUser.uid).set({
          id: currentUser.uid,
          email: currentUser.email,
      })
    }
  })

  // const userRef = db.ref('users/' + currentUser.uid)
  const charactersRef = db.ref('users/' + currentUser.uid + '/characters')
  const [snapshots, loading] = useList(charactersRef);
  
  const createCharacter = (e) => {
    e.preventDefault();
    setInputError("");
    if (nameRef.current.value.length > 0) {
      const newCharacter = charactersRef.push({name: nameRef.current.value});
      console.log(newCharacter);   
      nameRef.current.value = null
    } else {
      setInputError("please enter a name.");
    }

  }




  return (
      <Container>
      <h2 className="text-center mb-4">Characters</h2>
      <Card className="bg-secondary text-white w-50 mx-auto">
      <Card.Body>
          <h2 className="text-center mb-4">New Character</h2>
          <Form>
            <Form.Group>
              <Form.Label>Character Name:</Form.Label>
              <Form.Control type="text" ref={nameRef} placeholder="character name"></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={createCharacter}>Create New Character</Button>
          <Form.Text className="danger">{inputError}</Form.Text>
          </Form>
      </Card.Body>
      <Container>
        
      </Container>
      </Card>


      <h3>Characters</h3>
      {!loading && snapshots &&
        snapshots.map((character, index) => (
          <CharacterForm character={character.val()} index={index}/>
    ))}

        </Container>
  )
}

export default Dashboard
