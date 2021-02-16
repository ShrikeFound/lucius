import React from 'react'
import Signup from './Signup.js'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage.js'
import Login from './Login.js'
import Dashboard from './Dashboard.js'
import PrivateRoute from './PrivateRoute.js'
import ForgotPassword from "./ForgotPassword.js"
const App = () => {
  return (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className = "w-100" style={{maxWidth: '450px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/">
                  <LandingPage/>
                </Route>  
              
                <Route path="/signup">
                  <Signup />
                </Route>

                <Route path="/login">
                  <Login/>
                </Route>

                <Route path="/forgot-password">
                  <ForgotPassword/>
                </Route>


                <PrivateRoute exact path="/dashboard" component={Dashboard} />
          


              </Switch>
            </AuthProvider>
          </Router>  
          
          </div>

        </Container>
  )
}

export default App
