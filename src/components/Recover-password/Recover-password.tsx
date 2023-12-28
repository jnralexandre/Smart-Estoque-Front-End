import { useState } from "react"
import './recover-password.css'

function RecoverPassword() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <div className="container">
            <div className="card-login">
                <header className="header">
                    <span>Recuperar senha</span>
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

                    <button className="buttons">Enviar</button>

                    <p className="links"><a className="links" href={"/login"}>Voltar ao login</a></p>

                    <footer className="footer">
                        <p className="links"><a className="links" href={"/register"}>Criar uma conta</a></p>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword

