import React from 'react'
import Signup from './Signup.js'
import { AuthProvider } from '../contexts/AuthContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage.js'
import Login from './Login.js'
import Dashboard from './Dashboard.js'
import PrivateRoute from './PrivateRoute.js'
import ForgotPassword from "./ForgotPassword.js"
import FormContainer from './FormContainer.js'
import Header from './Header'
import "../custom.scss"
import FateDeck from './FateDeck.js'
import Footer from './Footer.js'
const App = () => {
  return (
          <Router>
            
            <AuthProvider>
        <Header/>    
        <Switch>
                <Route exact path="/">
                  <LandingPage/>
                </Route>  
              
          <Route path="/signup">
            <FormContainer>
            <Signup />
            </FormContainer>      
          </Route>

          <Route path="/login">
            <FormContainer>
              <Login />
            </FormContainer>  
          </Route>

          <Route path="/forgot-password">
            <FormContainer>
              <ForgotPassword />
            </FormContainer>  
          </Route>

          <Route path="/using-lucius">
            <FateDeck/> 
          </Route>


          <PrivateRoute exact path="/character-sheet" component={Dashboard} />

        </Switch>
        <Footer/>
            </AuthProvider>
          </Router>  

  )
}

export default App
