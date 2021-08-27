import '../assets/scss/ProjetPerso.scss';
import Maintaining from './Maintening';
const ProjetPerso = () => {
    return(
        <>
        <div className="A-VENIR">
            <h4><span className="little-text">Mes</span> projets perso</h4>
            <div>
                <p className='presentation-projets-perso'></p>
                <Maintaining/>
            </div>
        </div>
        </>
    )
}
export default ProjetPerso;