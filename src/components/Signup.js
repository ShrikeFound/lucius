import React, { useRef,useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
const Signup = () => {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();
  

  const handleSubmit = async (e) => {
    console.log("submitting!");
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      console.log("trying!");
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/character-sheet");

    } catch (error) {
      setError("Sign up failed.");
    }
    setLoading(false);
  }


  return (
    <>
      <Card className="bg-secondary text-white">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required/>
            </Form.Group>

            <Button disabled={loading} className = "w-100" type="submit">
              Sign Up
            </Button>

          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 text-white">
         Need an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}

export default Signup
