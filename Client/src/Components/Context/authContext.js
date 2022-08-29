import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import {auth} from "../Firebase/FirebaseAuth"

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}) {
//const user = {
//login: true
//}
    const [user, setUser] = useState(null)
    const signUp =  (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        }, [])
    })
    return (
        <authContext.Provider value={{signUp, logIn, user}} >
            {children}
        </authContext.Provider>
    )
}
