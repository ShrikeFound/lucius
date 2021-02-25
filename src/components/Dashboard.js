import React, { useState,useRef } from 'react'
import { Button, Card, Form} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import app from "../firebase.js"
import FormContainer from './FormContainer'
const Dashboard = () => {
  const { currentUser } = useAuth();
  const db = app.database()
  const [error, setError] = useState("");

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

  const userRef = db.ref('users/' + currentUser.uid)
  const charactersRef = db.ref('users/'+currentUser.uid+'/characters')
  console.log(userRef,charactersRef)

  const createCharacter = (e) => {
    e.preventDefault();
    setError("");
    if (nameRef.current.value.length > 0) {
      const newCharacter = charactersRef.push({name: nameRef.current.value});
      console.log(newCharacter);      
    } else {
      setError("please enter a name.");
    }

  }




  return (

      <Card className="container">
      <h2 className="text-center mb-4">Characters</h2>
      <Card.Body className="bg-secondary text-white w-50 mx-auto">
          <h2 className="text-center mb-4">New Character</h2>
          <Form>
            <Form.Group>
              <Form.Label>Character Name:</Form.Label>
              <Form.Control type="text" ref={nameRef} placeholder="character name"></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={createCharacter}>Create New Character</Button>
          <Form.Text className="danger">{error}</Form.Text>
          </Form>
        </Card.Body>
        </Card>

  )
}

export default Dashboard
