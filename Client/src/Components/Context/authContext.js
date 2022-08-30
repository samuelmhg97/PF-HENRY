import { createContext, useContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup
 } from "firebase/auth";

import {auth} from "../Firebase/FirebaseAuth"
import axios from "axios";

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
    // const [accessToken, setAccessToken]= useState("")

    const signUp =  async (email, password, name) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            return user.getIdToken()
            .then((idToken) => {
                const newUser = {
                    email: email,
                    token: idToken,
                    username: name,
                    role: "B"
                }
              console.log(idToken);
              return axios
                .post("http://localhost:3001/users/createUser", newUser
                //  {
                //   headers: {
                //     Authorization: "Bearer " + idToken,
                //   },
                //   role: "B",
                //   username:"papa",
                //   email: "papa@papa.com"
                // }
                )
            });
          })
          .then((res) => {
                if(res.status === 201) {
                    console.log("Usuario creado")
                } else if (res.status === 400 ||res.status === 500) {
                    console.log("Usuario no creado, verificar")
                    console.log(res.data.message)
                }
          }) 
          .catch((error) => {
            console.log(error)
          })
    }
    const logIn = async(email, password) => {
        await signInWithEmailAndPassword(auth, email, password)

    }
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
