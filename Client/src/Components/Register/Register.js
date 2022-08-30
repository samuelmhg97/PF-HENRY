import { useState } from "react"
import { useAuth } from "../Context/authContext"
import {useNavigate} from "react-router-dom"

import "../Register/Register.css"

export default function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const navigate = useNavigate()
    const {signUp} = useAuth()


    const handleHome = () => {
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
            await signUp(user.email, user.password, user.name);
            // await 
            navigate("/adminmenu");
        } catch(error){
            console.log(error.message)
            if(error.code === "auth/invalid-email") {
                setError("Correo inválido")
            }
            if(error.code === "auth/weak-password") {
                setError("Contraseña inválida")
            }
            if(error.code === "auth/email-already-in-use") {
                setError("Usuario ya registrado")
            }
            // setError(error.message)
        }

        // console.log(user)
    }
    return (
        <div>
            <div className="Registerhome-btncontainer">
                <button className="Registerhome-btn" onClick={handleHome}>Home</button>
            </div>
        <div className="Register-container">
            <h1 className="Register-title">Register</h1>
            <form className="Register-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="Register-name">
                <label name="Name">Username</label>
                <input 
                id="Register-name"
                name="name" 
                type="text"
                onChange={(e) => handleChange(e)}
                />
                </div>

                {/* <div className="Register-lastname">
                <label name="Lastname">Apellido</label>
                <input 
                id= "Register-lastname"
                name="Lastname" 
                type="text"
                onChange= {(e) => handleChange(e)}
                />
                </div> */}

                <div className="Register-email">
                <label name="Email">Correo Electronico</label>
                <input 
                id="Register-email"
                name="email" 
                type="email" 
                placeholder="email@email.com"
                onChange= {(e) => handleChange(e)}
                />
                </div>

                <div className="Register-password">
                <label name="Password" >Contraseña</label>
                <input 
                id= "Register-password"
                name="password" 
                type="password" 
                placeholder="6 to 15 characters"
                onChange= {(e) => handleChange(e)}
                />
                </div>
                <button className ="Register-btn" type="submit">Registrar ahora</button>
            </form>
            {error && <p>{error}</p>}
        </div>
        </div>
    )
}
