import logoMaginCode from './../assets/images/calque_1.svg';
import '../assets/scss/Maintening.scss'

const Loader = (props) => {

    return (
        <div className='maintenance'>
            <div className='cont-img-load'>

                <img src={logoMaginCode} className="load-logo" alt="logo de chargement" />
            </div>
            <div className="in-progress">
                <p className="en-cours-de-creation">
                <span>C</span>
                <span>H</span>
                <span>A</span>
                <span>R</span>
                <span>G</span>
                <span>E</span>
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>T</span> 
                
                </p>
            </div>
        </div>
    );
}
export default Loader;
