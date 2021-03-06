import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext();

//lets us use a context
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  
  //signs user up using firebase
  const signup = (email,password) => {
    return auth.createUserWithEmailAndPassword(email,password)
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }


  useEffect(() => {
    //if user is signed up, set current user to user and unsubscribe
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    })    

    return unsubscribe
  },[])
  
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={ value }>
      {!loading && children}
    </AuthContext.Provider>
  )
}
