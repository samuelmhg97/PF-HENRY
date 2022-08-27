import { useState } from "react"
import { useAuth } from "../Context/authContext"
import {useNavigate} from "react-router-dom"

export default function Register() {

    const [user, setUser] = useState({
        name: "",
        Lastname: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const navigate = useNavigate()
    const {signUp} = useAuth()

    const handleChange = (e) => {
        console.log(e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        try{
            signUp(user.email, user.password)
        } catch(error){
            console.log(error.message)
        }

        // console.log(user)
    }
    return (
        <div>
            <div>Register</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label name="Name">Nombre</label>
                <input 
                name="name" 
                type="text"
                onChange={(e) => handleChange(e)}
                />
                </div>

                <div>
                <label name="Lastname">Apellido</label>
                <input 
                name="Lastname" 
                type="text"
                onChange= {(e) => handleChange(e)}
                />
                </div>

                <div>
                <label name="Email">Correo Electronico</label>
                <input 
                name="email" 
                type="email" 
                placeholder="email@email.com"
                onChange= {(e) => handleChange(e)}
                />
                </div>

                <div>
                <label name="Password" >Contraseña</label>
                <input 
                name="password" 
                type="password" 
                placeholder="6 to 15 characters"
                onChange= {(e) => handleChange(e)}
                />
                </div>
                <button type="submit">Registrar ahora</button>
            </form>
            {error && <h6>{error}</h6>}
        </div>

    )
}