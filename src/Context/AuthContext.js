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
   .then((response) => console.log(response,"response login"))
   .catch((e)=> setError(e.message))

    }
    async function logout() {
         await auth.signOut();
        
        //  setCurrentUser(user)
        //   console.log(user,"user log out"); 
          //console.log(currentUser,"current user");  
        
          
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


