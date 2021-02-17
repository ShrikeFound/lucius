import React, { useRef,useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const emailRef = useRef();
  const { resetPassword } = useAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("")
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please Check your email for further instructions.")
    } catch (error) {
      setError("Reset failed.");
      console.log(error);
    }
    setLoading(false);
  }


  return (
    <>
      <Card className="bg-secondary text-white">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>


            <Button disabled={loading} className = "w-100" type="submit">
              Reset Password
            </Button>

          </Form>
          <div className = "w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 text-white">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default ForgotPassword
