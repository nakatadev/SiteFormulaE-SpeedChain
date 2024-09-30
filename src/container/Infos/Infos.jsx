import './infos.css'
import Poster from '../../assets/images/POSTER_UNPLUGGED_16x9 1.png'

function Infos() {
    return ( 
        <main className="container-infos">
            <section className='section-infos'>
                <h1>FORMULA E UNPLUGGED</h1>
                <span className='span-infos'>
                    <h2>Unplugged leva você aos bastidores, juntando-se às equipes e pilotos enquanto eles lutam pelo título da 9 temporada.</h2>
                    <img src={Poster} alt=""/>
                </span>
            </section>
        </main>
     );
}

export default Infos;