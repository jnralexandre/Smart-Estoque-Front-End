import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                "http://localhost:3000/smart-estoque/api/v1/users/entrar",
                credentials
            );

            if (response.status >= 200 && response.status < 300) {
                console.log("Login bem-sucedido!");
                navigate("/home");
            } else {
                console.error("Erro ao fazer login. Verifique os dados e tente novamente.");
                setError("Erro ao fazer login. Verifique os dados e tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar requisição:", error);
            setError("Erro ao fazer login. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="container-login">
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

                    <button type="submit" className="buttons" onClick={handleLogin}>
                        Entrar
                    </button>

                    {error && <p className="error-message">{error}</p>}

                    <p className="links"><a className="links" href={"/recover-password"}>Esqueceu sua senha?</a></p>

                    <footer className="footer">
                        <p className="links"><a className="links" href={"/register"}>Criar uma conta</a></p>
                    </footer>
                </form>
            </div>
        </div>
    );
}

export default Login;
