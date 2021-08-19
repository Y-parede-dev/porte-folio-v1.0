import { useState, useEffect } from 'react';
import{Link} from 'react-router-dom'
import './../assets/css/Nav.scss';

const Nav = ({largeur, hauteur}) => {
    const [isOpen, setIsOpen] = useState(false);
    const detection = () => {
        if(window.onresize <= "850px"){
            setIsOpen(false);
        }
    }
    console.log(isOpen)
    window.onresize = detection;
    const btnNav = (e) => {
        setIsOpen(!isOpen)
        e.preventDefault();
        e.stopPropagation();
    };
    try{
        if(document.getElementById('navDynamique')){
            if(isOpen===true){
                document.getElementById('navDynamique').className='nav-custom display-nav-block'
                if(window.onClick){
                    document.getElementById('navDynamique').className = "nav-custom display-nav-none";
                
                }

            }else{
                document.getElementById('navDynamique').className = "nav-custom display-nav-none";
            }
        }
    }
    catch(error){
        console.log(error)
    }
    useEffect(()=>{
       window.onscroll = function () {
        try{
            if(largeur>850){

                if(document.documentElement.scrollTop > 190){
                    document.getElementById('navDynamique').style.position = "fixed";
                    document.getElementById('navDynamique').style.top = 0;
                    document.getElementById('navDynamique').style.padding = "34px 0";
    
                }else{
                    document.getElementById('navDynamique').style.position = "relative";
                    document.getElementById('navDynamique').style.top = 'initial';
                    document.getElementById('navDynamique').style.padding = "0 0 20px";
                }
            }
        }catch{

        }
       }

    },[largeur])
    return(
        <div className = 'nav-content'>
           <button onClick={(e)=>btnNav(e)} className='button-open-nav-mobile'> <span> / </span>  <span> / </span>  <span> / </span>  </button> 
            <nav className='nav-custom'  id = "navDynamique" > 
            <ul className = 'list-nav'>
                <Link to='/'>
                    <li className='list-nav-content'>accueil</li>
                </Link>
                <Link to='/projects'>
                    <li className='list-nav-content'>mes projets</li>
                </Link>
                <Link to="/lang">
                    <li className='list-nav-content'>techno favorite</li>
                </Link>
                <Link to="/about">
                    <li className='list-nav-content'>contact</li>
                </Link>
            </ul>
        </nav>
        </div>
    )
}
export default Nav;