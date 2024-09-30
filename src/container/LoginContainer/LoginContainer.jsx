import { useState, useEffect } from 'react';
import './logincontainer.css';

function LoginContainer() {
    // Estados para armazenar os valores de usuário e senha
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Definindo usuário e senha padrão no localStorage ao montar o componente
    useEffect(() => {
        const defaultUser = {
            username: 'user123',
            password: 'password123'
        };
        localStorage.setItem('defaultUser', JSON.stringify(defaultUser));
    }, []);

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('defaultUser'));

        // Verifica se o usuário e senha estão corretos
        if (storedUser && username === storedUser.username && password === storedUser.password) {
            setError('');
            alert('Login bem-sucedido!'); // ou redirecionar para outra página
        } else {
            setError('Usuário ou senha incorretos');
        }
    };

    return (
        <main className="container-login">
            <section className="section-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Entrar</button>
                </form>
            </section>
        </main>
    );
}

export default LoginContainer;
