import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Footer.scss";
import flech from '../assets/images/static/fleche-vers-le-bas.svg';

const Footer = () =>{
    const [footOpen, setFootOpen] = useState(true);
    const footDisplay=()=>{
        setFootOpen(!footOpen);
        if(footOpen){
            document.getElementById('display-mobile').style.display = 'block';
            document.getElementById('footer-principal').style.padding = '10px 0';
            document.getElementById('img-fleche').style.transform='rotate(180deg)';
            document.getElementById('img-fleche').style.padding='7px 10px 0px';
            document.getElementById('img-fleche-content').style.top='-7px';


        }else{
            document.getElementById('display-mobile').style.display = 'none';
            document.getElementById('footer-principal').style.padding = '32px 0';
            document.getElementById('img-fleche').style.transform='rotate(0deg)';
            document.getElementById('img-fleche').style.padding='0px 10px 7px;';
            document.getElementById('img-fleche-content').style.top='0';

        }
    }
    useEffect(()=>{
         footDisplay();

    },[])
    return(
        <footer id='footer-principal'>
            <div className="img-fleche" id="img-fleche-content"><img id="img-fleche" onClick={()=>{footDisplay()}} alt='fleche vers le haut' src={flech}/></div>
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
                <p className="magin-code-footer txt-footer">site fait avec 💙 par <a href="mailto:magin.code@gmail.com">magin code</a> - 2021.<br/> Version 1.0 "Starter"</p>
                <p className="copyright txt-footer">Copyright ©  2021. Tous droits réservés</p>
            </div>
        </footer>
    )
}
export default Footer;