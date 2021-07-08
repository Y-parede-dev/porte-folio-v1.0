import logoHeader from '../../assets/images/logo-magin-code.svg';
import logoHeaderWhite from '../../assets/images/logo-magin-code-white.svg';
import '../../assets/css/Theme.css';

const ChangeTheme = () => {
    const ChangeThemeOnClick = (e) =>{
        let colorPrimary = 'rgb(5, 116, 187)';
        let colorSecondary = 'white';
        try {
            let btnChangeTheme = document.querySelector('#button-change-theme');
            let body = document.querySelector('BODY');
            let header = document.querySelector('HEADER');
            let navHeaderOrSide = document.getElementById('navNotMobile');

            let logoHeaderImg = document.querySelector('#logo-header');
            let backgroundColorHeader = header.style.backgroundColor;

            if(backgroundColorHeader !== colorPrimary){
                header.style.backgroundColor = colorPrimary;
                body.style.backgroundColor = colorSecondary;
                navHeaderOrSide.style.backgroundColor = colorPrimary;
                logoHeaderImg.src = logoHeaderWhite;
                btnChangeTheme.className= 'toRight';
                
            }
            else {
                btnChangeTheme.className= 'toLeft';
                header.style.backgroundColor = colorSecondary;
                body.style.backgroundColor = colorPrimary;
                navHeaderOrSide.style.backgroundColor = colorSecondary;
                logoHeaderImg.src = logoHeader;
            };
        } catch (error) {
            console.log(error);
        };
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