import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginContainer from '../../container/CadastroContainer/RegisterContainer';
import './login.css'

function Login() {
    return ( 
        <main>
            <Header/>
            <LoginContainer/>
            <Footer/>
        </main>
     );
}

export default Login;