import { useState } from 'react';
import './logincontainer.css';

function RegisterContainer() {
    // Estados para armazenar os valores de usuário, senha, nome, sobrenome e telefone
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o usuário já existe
        const userExists = storedUsers.some(user => user.username === username);
        if (userExists) {
            setError('Usuário já cadastrado. Tente outro.');
            setSuccessMessage('');
            return;
        }

        // Adiciona novo usuário ao localStorage
        const newUser = { name, surname, username, password, phone };
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Limpa os campos e exibe a mensagem de sucesso
        setName('');
        setSurname('');
        setUsername('');
        setPassword('');
        setPhone('');
        setError('');
        setSuccessMessage('Registro realizado com sucesso!');
    };

    return (
        <main className="container-login">
            <section className="section-login">
                <h1>Registrar Usuário</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Sobrenome:</label>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button type="submit">Registrar</button>
                    <p className='link'>Já tem conta? <a href="/logar">Clique aqui</a></p>
                </form>
            </section>
        </main>
    );
}

export default RegisterContainer;
