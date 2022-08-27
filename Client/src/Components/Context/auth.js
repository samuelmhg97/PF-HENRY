import { createContext, useContext } from "react";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}) {
//const user = {
//login: true
//}
    const signUp = (email, password) =>{
        console.log(email, password)
    }

    return (
        <authContext.Provider value={{signUp}} >
            {children}
        </authContext.Provider>
    )
}