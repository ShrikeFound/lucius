import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

const Dashboard = () => {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async() => {
    setError("");
    try {
      await logout()
      history.push('/login');
    } catch (error) {
      setError(`Log out failed: ${error}`);
      console.log(error);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Characters</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>for {currentUser && currentUser.email}</p>
          <Link to ="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
    </>
  )
}

export default Dashboard
