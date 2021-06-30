import React, {useEffect} from 'react';
import logoHeader from '../assets/images/logo-magin-code.svg';
import '../assets/css/Header.css';
const Header = () => {
    
    return (
        <header id="header">
            <img id="logo-header" className='logo-header' alt='logo-header' src={logoHeader}/>
        </header>
    )
}

export default Header;