import React, {useEffect} from 'react';
import logoHeader from '../assets/images/logo-magin-code.svg';
import '../assets/css/Header.css';
const Header = () => {
    
    return (
        <header id="header">
            <div id='header-inside' className='header-inside'>
                <img id="logo-header" className='logo-header' alt='logo-header' src={logoHeader}/>
            </div>
        </header>
    )
}

export default Header;