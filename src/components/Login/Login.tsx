import { useState } from "react"
import './login.css'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <div className="container">
            <div className="card-login">
                <header className="header">
                    <span>Login</span>
                </header>

                <form>
                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className="input-forms"
                            id="email"
                            name="email"
                            placeholder="smartestoque@gmail.com"
                            required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            className="input-forms"
                            id="password"
                            name="password"
                            placeholder="*****************"
                            required />
                    </div>

                    <button className="buttons">Entrar</button>

                    <p className="links"><a className="links" href={"/recover-password"}>Esqueceu sua senha?</a></p>


                    <footer className="footer">
                        <p className="links"><a className="links" href={"/register"}>Criar uma conta</a></p>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default Login

