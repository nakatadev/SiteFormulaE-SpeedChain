import './news.css'
import Cars from '../../assets/images/formula-e-teams-grid.webp'

function News() {
    return ( 
        <main className="container-news">
            <section className='section-news'>
              
                <span className='span-news'>
                    <img src={Cars} alt="" />
                    <section className='textos'>
                    <h1>Ultimas Notícias</h1>
                    <h2>Maloney é anunciado como companheiro de Di Grassi na Abt/Lola/Yamaha</h2>
                    </section>
                </span>
            </section>
        </main>
     );
}

export default News;