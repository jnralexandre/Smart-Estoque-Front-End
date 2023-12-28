import { useState } from "react"
import './register.css'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <div className="container">
            <div className="card-login">
                <header className="header">
                    <span>Cadastre-se</span>
                </header>

                <form>
                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="input-forms"
                            id="email"
                            name="email"
                            placeholder="smartestoque"
                            required />
                    </div>

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

                    <button className="buttons">Cadastrar</button>

                    <footer className="footer">
                        <p className="links"><a className="links" href={"/login"}>Voltar ao login</a></p>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default Register

