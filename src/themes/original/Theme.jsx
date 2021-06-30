import logoHeader from '../../assets/images/logo-magin-code.svg';
import logoHeaderWhite from '../../assets/images/logo-magin-code-white.svg';
import '../../assets/css/Theme.css'

const ChangeTheme = () => {
    const ChangeThemeOnClick = (e) =>{
        let colorPrimary = 'rgb(5, 116, 187)';
        let colorSecondary = 'white';
        try {
            let btnChangeTheme = document.querySelector('#button-change-theme')
            let body = document.querySelector('body');
            let header = document.querySelector('header');
            let logoHeaderImg = document.querySelector('#logo-header')
            let backgroundColorHeader = header.style.backgroundColor;

            if(backgroundColorHeader !== colorPrimary){
                header.style.backgroundColor = colorPrimary;
                body.style.backgroundColor = colorSecondary;
                logoHeaderImg.src = logoHeaderWhite;
            }
            else {
                btnChangeTheme.className= 'toRight';
                header.style.backgroundColor = colorSecondary;
                body.style.backgroundColor = colorPrimary;
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
                    <button id='button-change-theme' onClick={ChangeThemeOnClick}></button>
                </div>  
            </div>
        </div>
    )
}

export default ChangeTheme;