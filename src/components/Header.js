import React, { useState } from 'react'
import { Navbar,Nav,Container,Button} from 'react-bootstrap'
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
        <Link className="nav-link" to="/login">Log in</Link>
        <Link className="nav-link" to="/signup">Sign Up</Link>
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
          <Link className="nav-link" to="/features">Features!</Link>
          <Link className="nav-link" to="/documentation">Documentation</Link>
        </Nav>

          <Nav>
        {authBotton()}
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
