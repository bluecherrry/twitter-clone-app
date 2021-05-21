import React, { useContext, useEffect, useState } from 'react'
import { useParse } from './Parse';


const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState() //no user
  // const [loading, setLoading] = useState(false)
  const Parse = useParse().Parse
  const user = new Parse.User();
  function signup(username, password, email) {
    user.set("username", username);
    user.set("password", password);
    user.set("email", email)
    user.save()
      .then(() => {
        user.signUp();
      })

  }
  function login(email, password) {
    Parse.User
      .logIn(email, password).then(function (user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
      }).catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
      });
  }
  function logout() {
    Parse.User.logOut().then(() => {
      console.log("logged out");
      // this will now be null
    }) .catch((error)=> {
      alert(error)
  })
  }
  function getCurrentUsername() {
    return Parse.User.current()
  }
  useEffect(() => {
    const unsubscribe = Parse.User.current()
    return unsubscribe //unmount
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    getCurrentUsername,


  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


