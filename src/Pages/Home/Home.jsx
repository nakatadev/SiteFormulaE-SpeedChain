import Header from '../../components/Header/Header'
import Main from '../../container/Main/Main'
import Patron from '../../container/Patron/Patron'
import News from '../../container/News/News'
import Ticket from '../../container/Ticket/Ticket'
import Calendary from '../../container/Calendary/Calendary'
import Infos from '../../container/Infos/Infos'
import Footer from '../../components/Footer/Footer'

function Home() {
    return ( 
        <>
            <Header/>
            <Main/>
            <Patron/>
            <News/>
            <Ticket/>
            <Calendary/>
            <Infos/>
            <Footer/>
        </>
     );
}

export default Home;