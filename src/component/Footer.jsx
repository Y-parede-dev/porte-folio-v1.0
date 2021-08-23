import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Footer.scss";
import flech from '../assets/images/static/fleche-vers-le-bas.svg';

const Footer = () =>{
    const [footOpen, setFootOpen] = useState(true);
    const footDisplay=()=>{
        setFootOpen(!footOpen);
        console.log(footOpen)
    }
    useEffect(()=>{
            if(footOpen){
                document.getElementById('display-mobile').style.display = 'block';
                document.getElementById('img-fleche').style.transform='rotate(180deg)';
                document.getElementById('img-fleche').style.borderBottom='none';
                document.getElementById('img-fleche').style.borderTop='solid var(--color-third)';
                document.getElementById('img-fleche').style.borderRadius='50% 50% 0 0';
                document.getElementById('img-fleche').style.padding='7px 10px 0px';

            }else{
                document.getElementById('display-mobile').style.display = 'none';
                document.getElementById('img-fleche').style.transform='rotate(0deg)';
                document.getElementById('img-fleche').style.borderTop='none';
                document.getElementById('img-fleche').style.borderBottom='solid var(--color-third)';
                document.getElementById('img-fleche').style.borderRadius='0 0 50% 50%';
                document.getElementById('img-fleche').style.padding='0px 10px 7px;';
            }

    },[footOpen])
    return(
        <footer id='footer-principal'>
            <div className="img-fleche"><img id="img-fleche" onClick={()=>{footDisplay()}} alt='fleche vers le haut' src={flech}/></div>
            <div id="display-mobile" className='display-mobile'>
                <ul>
                <Link to="/mentions">
                    <li>Mentions légales</li>
                </Link>
                <span> - </span>
                <Link to="/rgpd">
                    <li>Vie privée</li>
                </Link>
                </ul>
                <p className="magin-code-footer txt-footer">site fait avec 💙 par <a href="mailto:magin.code@gmail.com">magin code</a> - 2021. Version 1.0 "Starter"</p>
                <p className="copyright txt-footer">Copyright ©  2021. Tous droits réservés</p>
            </div>
        </footer>
    )
}
export default Footer;