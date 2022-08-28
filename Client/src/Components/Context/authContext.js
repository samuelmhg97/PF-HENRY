import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)


    return (
        <authContext.Provider value={{signUp}} >
            {children}
        </authContext.Provider>
    )
}