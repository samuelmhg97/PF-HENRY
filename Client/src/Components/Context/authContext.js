import { createContext, useContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup
 } from "firebase/auth";

import {auth} from "../Firebase/FirebaseAuth"

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}) {
// const user = {
// login: true
// }
    const [user, setUser] = useState(null)

    const signUp =  (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logOut = () => signOut(auth)

    const loginGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        }, [])
    })
    return (
        <authContext.Provider value={{signUp, logIn, user, logOut, loginGoogle}} >

            {children}
        </authContext.Provider>
    )
}
