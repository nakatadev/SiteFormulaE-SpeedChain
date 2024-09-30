import './patron.css'
import Abt from '../../assets/images/Logotipo_da_ABT_CUPRA_Formula_E_Team.png'
import Andreti from '../../assets/images/Andretti-global-logo-1.webp'
import Jaguar from '../../assets/images/FormulaE_Team_JaguarRacing.png'
import Tech from '../../assets/images/Tech_Mahindra_New_Logo.svg.png'

function Patron() {
    return ( 
        <main className='container-patron'>
            <img src={Abt} alt="" />
            <img src={Andreti} alt="" />
            <img src={Jaguar} alt="" />
            <img src={Tech} alt="" />
        </main>
     );
}

export default Patron;