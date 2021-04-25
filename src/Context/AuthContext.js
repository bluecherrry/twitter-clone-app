import React, { useContext, useEffect, useState } from 'react'
import { auth, database,timeStamp } from '../firebase/firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState() //no user
    const [loading, setLoading] = useState(true)
    const [error ,setError] = useState("")
    async function signup(username, email, password) {
        await auth.createUserWithEmailAndPassword(email, password)
        return auth.currentUser.updateProfile({
            displayName: username
        })
        //promise //register.js //resolve//reject
    }
   async function login(email, password) {
     let response = await auth.signInWithEmailAndPassword(email, password)
   .then((response) => {
    localStorage.setItem('user',JSON.stringify(value))
    console.log(response,"response login")})
   .catch((e)=> console.log(e.message))

    }
    async function logout() {
         await auth.signOut()
         auth.GoogleSignInApi.signOut()
         .then(() =>{
           localStorage.clear()  
          console.log(localStorage,"local log out");
        }
         )
         .catch((e) => console.log(e , "error sign out "))
           
         
          
    }
    function getCurrentUsername() {
        return auth.currentUser && auth.currentUser.displayName
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
      function updatePassword(password) {
        return currentUser.updatePassword(password)
      }
  
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
         
          console.log(user,"current user");
            setCurrentUser(user)
            setLoading(false)
        })
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
            {!loading && children}
        </AuthContext.Provider>
    )
}


