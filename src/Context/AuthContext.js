import React, { useContext, useEffect, useState } from 'react'
import Parse from 'parse/dist/parse.min.js';

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'

const AuthContext = React.createContext()
const user = new Parse.User();

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState() //no user
  const [loading, setLoading] = useState(false)
  const CurrentUser = Parse.User.current();
  async function signup(username, password, email) {
    console.log(email);
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    try {
      await user.signUp();
      console.log("success")
    } catch (error) {
      console.log(error, "sign up error");
    }
  }
  async function login(email, password) {
    var user = Parse.User
      .logIn(email, password).then(function (user) {
        console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
      }).catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
      });
  }
  async function logout() {
    Parse.User.logOut().then(() => {
      console.log("logged out");
      // this will now be null
    });



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
    //  getPosts

  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


