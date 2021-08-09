import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/images/logo-magin-code.svg';
import '../assets/css/Header.css';

const Header = ({largeur, hauteur}) => {
    useEffect(()=>{
       
        try{
            if(largeur<850 ){
                document.getElementById('header').style.position = "fixed";
                document.getElementById('header').style.top = 0;
                document.getElementById('header').style.right = 0;
                document.getElementById('header').style.left = 0;

            }
        }catch{
        }
    },[])
    
    return (
        <header id="header">
            <div id='header-inside' className='header-inside'>
                <Link to="/"><img id="logo-header" className='logo-header' alt='logo-header' src={logoHeader}/></Link>
            </div>
        </header>
    )
}

export default Header;