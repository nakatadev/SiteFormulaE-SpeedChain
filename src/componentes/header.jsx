import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './header.css';
import logoFormulaE from './imagens/logo Formula E - mobile.svg';
import iconeUser from './imagens/User.svg';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logoFormulaE} alt="logo formula e" className='logo__formulae'/></a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.fiaformulae.com/pt-br/news">Notícias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Assista</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SpeedChain</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true"></a>
                            </li>
                        </ul>
                    </div>
                    <a href=""><img src={iconeUser} alt="Icone de usuario" className='userIcon' /></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
