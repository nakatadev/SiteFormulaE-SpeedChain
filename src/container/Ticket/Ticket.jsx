import './ticket.css';
import { Link } from 'react-router-dom';
import Carrinho from '../../assets/images/Caixa misteriosa- speed chain.png';

function Ticket() {
    return ( 
        <main className='container-ticket'>
            <section className='section-ticket'>
                <span>
                    <h1>SpeedChain</h1>
                    <h2>Transformando <br />velocidade em valor.</h2>
                    <h3>Adquira um ingresso para a corrida e ganhe uma caixa misteriosa, com um token incrível!</h3>
                    <Link to="/nft" className="saiba-mais-btn">Saiba Mais</Link>
                </span>
                <span>
                    <img src={Carrinho} alt="Caixa misteriosa" />
                </span>
            </section>
        </main>
    );
}

export default Ticket;
