import React, { useContext, useEffect, useState } from 'react'
import { auth, database } from '../firebase/firebase'

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState() //no user
    const [loading, setLoading] = useState(true)

    async function signup(username, email, password) {
        await auth.createUserWithEmailAndPassword(email, password)
        return auth.currentUser.updateProfile({
            displayName: username
        })
        //promise //register.js //resolve//reject

    }

    //firebase method 
    // auth.onAuthStateChanged(user => {
    //     setCurrentUser(user)
    //     //null or user//  //useEffect//  //it should be run when our component is mount 
    // })
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
    }
    function getCurrentUsername() {
        return auth.currentUser && auth.currentUser.displayName
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
        getCurrentUsername

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


