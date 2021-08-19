import logoHeader from '../../assets/images/logo-magin-code.svg';
import logoHeaderWhite from '../../assets/images/logo-magin-code-white.svg';
import '../../assets/css/Theme.scss';
import { useEffect, useState } from 'react';




/*
    TO DO :
    
            SIMPLIFIFIER TOUT SE CODE EN CHANGENT SEULEMENT LA VALEUR DES VARIABLES DE COULEUR primaire et secondaire 

    */



const ChangeTheme = () => {
    const [themeChoise, setThemeChoise] = useState(true);
    
       
    
    const ChangeThemeOnClick = (e) =>{
        let colorPrimary = 'rgb(5, 116, 187)';
        let colorSecondary = 'white';
        console.log('first : ', themeChoise)
        setThemeChoise(!themeChoise);
        console.log('second : ',themeChoise)
        /*
        try {
            console.log('third : ', themeChoise)
            localStorage.setItem('theme-choisi', themeChoise);
            let btnChangeTheme = document.querySelector('#button-change-theme');
            let body = document.querySelector('BODY');
            let header = document.querySelector('HEADER');
            let navHeader = document.getElementById('navNotMobile');
            let logoHeaderImg = document.querySelector('#logo-header');

            if(themeChoise === true){
                header.style.backgroundColor = colorPrimary;
                body.style.backgroundColor = colorSecondary;
                logoHeaderImg.src = logoHeaderWhite;
                btnChangeTheme.className= 'toRight';
                if (document.getElementById('navNotMobile')){
                    navHeader.style.backgroundColor = colorPrimary;
                }
            }
            else {
                btnChangeTheme.className= 'toLeft';
                header.style.backgroundColor = colorSecondary;
                body.style.backgroundColor = colorPrimary;
                if (document.getElementById('navNotMobile')){
                    navHeader.style.backgroundColor = colorSecondary;
                }
                logoHeaderImg.src = logoHeader;
            };
        } catch (error) {
            console.log(error);
        };*/
        e.stopPropagation();
    }
    return(
        <div id="content-btn-change-theme">
            <div id="back-btn-change-theme">
                <div id="encoche-btn-change-theme">
                    <button alt='changer de theme' id='button-change-theme' className='toLeft' onClick={ChangeThemeOnClick}></button>
                </div>  
            </div>
        </div>
    )
}

export default ChangeTheme;