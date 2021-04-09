import React, { useContext, useEffect,useState } from 'react'
import {auth } from '../firebase/firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState() //no user
    const [loading, setLoading] = useState(true)

    function signup(email,password) {
     return   auth.createUserWithEmailAndPassword(email,password)
    //promise //register.js //resolve//reject

    }

    //firebase method 
    // auth.onAuthStateChanged(user => {
    //     setCurrentUser(user)
    //     //null or user//  //useEffect//  //it should be run when our component is mount 
    // })
function login(email,password) {
    return auth.signInWithEmailAndPassword(email,password)
}




    useEffect(() =>{
     const unsubscribe =   auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    }) 
    return unsubscribe //unmount
    },[])
    
    const value = {
        currentUser,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


