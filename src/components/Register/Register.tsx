import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./register.css";

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCadastro = async (e: FormEvent) => {
        e.preventDefault();

        const dadosDoFormulario = {
            username: username,
            email: email,
            password: password
        };

        try {
            const response = await axios.post("http://localhost:3000/smart-estoque/api/v1/users/cadastrar-usuarios", dadosDoFormulario);

            if (response.status >= 200 && response.status < 300) {
                setSuccessMessage("Cadastro realizado com sucesso!");
                setErrorMessage("");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                console.error("Erro ao cadastrar. Verifique os dados e tente novamente.");
                setErrorMessage("Erro ao cadastrar. Verifique os dados e tente novamente.");
                setSuccessMessage("");
            }
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
            setErrorMessage("Erro ao cadastrar. Tente novamente mais tarde.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="container-register">
            <div className="card-login">
                <header className="header">
                    <span>Cadastre-se</span>
                </header>

                <form>
                    <div className="input-container">
                        <label htmlFor="username">Nome de Usuário</label>
                        <input
                            type="text"
                            className="input-forms"
                            id="email"
                            name="email"
                            placeholder="smartestoque"
                            required
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className="input-forms"
                            id="email"
                            name="email"
                            placeholder="smartestoque@gmail.com"
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            className="input-forms"
                            id="password"
                            name="password"
                            placeholder="*****************"
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="buttons" onClick={handleCadastro}>Cadastrar</button>

                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <footer className="footer">
                        <p className="links"><a className="links" href={"/"}>Voltar ao login</a></p>
                    </footer>
                </form>
            </div>
        </div>
    );
}

export default Register;
