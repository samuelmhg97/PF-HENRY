import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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

    const handleHome =() => {
        navigate("/")
    }
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
        <div>
            <div className="Loginhome-btnContainer">
                <button className="Loginhome-btn" onClick={handleHome}>Home</button>
            </div>
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

                <div className="Login-btns">
                <button className="Login-btn" type="submit">Ingresar</button>
                <button className="Logingoogle-btn" onClick={(e) => handleGoogleSignIn(e)}>Ingresa con Google</button>
                </div>

                <div className="User-options">
                    <Link to="/register">
                        <h4 className="RegisterNow">Registrate Ahora</h4>
                    </Link>
                    <Link to="/">
                        <h4 className="Forgot-password">Reestablecer contraseña</h4>
                    </Link>
                </div>
            </form>
            {error && <p>{error}</p>}  
            {/* podemos estilizarlo creandolo como componente aparte */}
            
            </div>
        </div>
    )
}
