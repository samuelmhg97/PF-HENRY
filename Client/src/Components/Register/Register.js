import { useState } from "react"
import { useAuth } from "../Context/auth"

export default function Register() {

    const [user, setUser] = useState({
        name: "",
        Lastname: "",
        email: "",
        password: ""
    })
    const {signUp} = useAuth()

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(user.email, user.password)
        //console.log(user)
    }
    return (
        <div>
            <div>Register</div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label name="Name">Nombre</label>
                <input 
                name="Name" 
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
        </div>

    )
}