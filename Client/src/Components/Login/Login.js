import { useState } from "react"

export default function Login() {
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
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
            </form>
        </div>
    )
}