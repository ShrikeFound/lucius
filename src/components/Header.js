import React, { useState } from 'react'
import { Navbar,Nav,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const handleLogout = async() => {
    setError("");
    try {
      await logout()
    } catch {
      setError(`Log out failed: ${error}`);
      console.log(error);
    }
  }

    const authBotton = () => {
    if (currentUser) {
      return <Button onClick={handleLogout}>Log Out</Button>
    } else {
      return (
        <>
          <Link className="btn btn-primary" to="/login">Log in</Link>
        </>
      )
    }
  }

  return (  
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Link className="navbar-brand" to="/">Lucius</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/using-lucius">Using Lucius</Link>
          {currentUser ? <Link className="nav-link" to="/character-sheet">Character Sheet</Link> : null}
        </Nav>

          <Nav>
        {authBotton()}
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
