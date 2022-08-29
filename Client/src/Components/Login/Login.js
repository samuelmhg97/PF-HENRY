import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/authContext"

import "../Login/Login.css"


export default function Login() {

    const [user, setUser] = useState({
        name: "",
        Lastname: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const navigate = useNavigate()

    const {logIn, loginGoogle } = useAuth()


    const handleChange = (e) => {
        console.log(e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault() 
        setError("")
        try{
            await logIn(user.email, user.password);
            navigate("/adminmenu");
        } catch(error){
            console.log(error.message)
            if(error.code === "auth/user-not-found") {
                setError("El correo es inexistente")
            }
            if(error.code === "auth/wrong-password") {
                setError("Contraseña inválida")
            }
            // setError(error.message)
        }

    }
    const handleGoogleSignIn = async () => {
        await loginGoogle()
        navigate("/")

    }
    return (
        <div className="Login-container">
            <h1 className="Login-title">Login</h1>
            <form className="Login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="Login-containerEmail">

                <label name="Email">Correo Electronico</label>
                <input
                id="Login-email" 
                name="email" 
                type="email" 
                placeholder="Correo Electronico"
                onChange= {(e) => handleChange(e)}
                />
                </div>

                <div className="Login-containerPassword">
                <label name="Password" >Contraseña</label>
                <input
                id="Login-password" 
                name="password" 
                type="password" 
                placeholder="Contraseña"
                onChange= {(e) => handleChange(e)}
                />                
                </div>

                <button className="Login-btn" type="submit">Ingresar</button>
            </form>
            <button onClick={(e) => handleGoogleSignIn(e)}>Log In with Google</button>
            {error && <p>{error}</p>}  
            {/* podemos estilizarlo creandolo como componente aparte */}
            

        </div>
    )
}
