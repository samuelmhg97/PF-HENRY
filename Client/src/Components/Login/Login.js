import { useState } from "react"

export default function Login() {
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input id="Login-email" type="email" name="Email" placeholder="Correo Electronico" />
                <input id="Login-password" type="password"  name="Password" placeholder="Contraseña" />
            </form>
        </div>
    )
}