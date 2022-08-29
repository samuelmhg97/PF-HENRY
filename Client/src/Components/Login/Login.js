import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Context/authContext"

export default function Login() {

    const [user, setUser] = useState({
        name: "",
        Lastname: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const navigate = useNavigate()
    const {logIn} = useAuth()

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

        // console.log(user)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                <label name="Email">Correo Electronico</label>
                <input
                id="Login-email" 
                name="email" 
                type="email" 
                placeholder="Correo Electronico"
                onChange= {(e) => handleChange(e)}
                />
                </div>

                <div>
                <label name="Password" >Contraseña</label>
                <input
                id="Login-password" 
                name="password" 
                type="password" 
                placeholder="Contraseña"
                onChange= {(e) => handleChange(e)}
                />                
                </div>
                <button type="submit">Ingresar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
