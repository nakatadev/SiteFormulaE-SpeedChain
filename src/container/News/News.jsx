import './news.css'
import Cars from '../../assets/images/formula-e-teams-grid.webp'

function News() {
    return ( 
        <main className="container-news">
            <section className='section-news'>
                <h1>Ultimas Notícias</h1>
                <span className='span-news'>
                    <img src={Cars} alt="" />
                    <h2>Lola Yamaha ABT completes debut driver line-up with rookie Zane Maioney joining "Mr.Formula E" Lucas di Grassi</h2>
                </span>
            </section>
        </main>
     );
}

export default News;