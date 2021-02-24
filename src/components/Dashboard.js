import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import app from "../firebase.js"
const Dashboard = () => {
  const { currentUser } = useAuth();
  
  app.database().ref('users/' + currentUser.uid).on("value", (snapshot) => {
    const user = snapshot.val()
    if (user) {
      //do nothing
    } else {
      console.log("no user!");
      app.database().ref('users/' + currentUser.uid).set({
          id: currentUser.uid,
          email: currentUser.email,
      })
    }
  })
    

  const createCharacter = () => {

  }

  return (
    <>
      <Card className="container">
        <Card.Body>
          <h2 className="text-center mb-4">Characters</h2>
          <p>for {currentUser.email}</p>
          <Button onClick={createCharacter}>Click Me</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Dashboard
