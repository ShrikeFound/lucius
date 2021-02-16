import React from 'react'
import { Card} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { currentUser} = useAuth();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Characters</h2>
          <p>for {currentUser && currentUser.email}</p>
          {/* <Link to ="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link> */}
        </Card.Body>
      </Card>
    </>
  )
}

export default Dashboard
