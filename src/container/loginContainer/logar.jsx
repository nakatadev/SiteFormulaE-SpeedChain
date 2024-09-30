import { useState } from 'react';
import './logar.css';

function Logar() {
    // Estados para armazenar os valores de usuário, senha e mensagens de erro/sucesso
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o usuário e a senha estão corretos
        const user = storedUsers.find(user => user.username === username && user.password === password);
        if (!user) {
            setError('Usuário ou senha incorretos.');
            setSuccessMessage('');
            return;
        }

        // Limpa os campos e exibe a mensagem de sucesso
        setUsername('');
        setPassword('');
        setError('');
        setSuccessMessage('Login realizado com sucesso!');
        // Aqui você pode redirecionar para outra página ou realizar outra ação
        console.log('Usuário logado:', user);
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
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button type="submit">Login</button>
                    <p className='link'>Ainda não tem conta? <a href="/login">Clique aqui</a></p>
                </form>
            </section>
        </main>
    );
}

export default Logar;
