import './nftcontainer.css';
import Car from '../../assets/images/Caixa misteriosa- speed chain.png'

function NftContainer() {
    return (
        <main className="nft-container">
            <section className="content">
                <img 
                    src={Car} 
                    alt="Caixa misteriosa" 
                    className="mistery-box"
                />
                <h1>SpeedChain</h1>
                <p>
                    Cada caixa reserva um token que pode ser variado, desde um capacete até uma bandeira, 
                    ou um piloto (Se você estiver com sorte), cada token terá um nível de raridade.
                </p>
                <div className="buttons">
                    <button className="adquirir-btn">Adquira já</button>
                    <button className="nft-btn">Acesse a NFT</button>
                </div>
                <p className="token">Token disponível</p>
            </section>
        </main>
    );
}

export default NftContainer;
