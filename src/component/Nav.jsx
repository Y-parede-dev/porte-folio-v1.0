import { useState, useEffect } from 'react';
import{Link} from 'react-router-dom';
import './../assets/scss/Nav.scss';

const Nav = ({largeur, hauteur}) => {
    const [isOpen, setIsOpen] = useState(false);
    const detection = () => {
        if(window.onresize <= "850px"){
            setIsOpen(false);
        }
        return ()=>setIsOpen(false)
    }
    
    window.onresize = detection;
    const btnNav = (e) => {
        setIsOpen(!isOpen)
        e.preventDefault();
        e.stopPropagation();
    };
    try{
        if(document.getElementById('navDynamique')){
            let recupBTNSpan=document.getElementById('btn-nav-mobile') ;
           
            if(isOpen===true){
                document.getElementById('navDynamique').className='nav-custom display-nav-block';
                recupBTNSpan.style.top = "109px";
                recupBTNSpan.style.padding = "10px";

                for(let i=0;i< recupBTNSpan.children.length; i++){
                    recupBTNSpan.children[i].className='just-one';

                }
            }else{
                document.getElementById('navDynamique').className = "nav-custom display-nav-none";
                for(let i=0;i< recupBTNSpan.children.length; i++){
                    recupBTNSpan.style.top = "64px";
                    recupBTNSpan.style.padding = "5px";
                    recupBTNSpan.children[i].className=' ';
                }

            }
        }
    }
    catch(error){
        console.log(error)
    }
    useEffect(()=>{
         window.onclick = function (){
            if(isOpen===true){
                setIsOpen(false)
            }
            return (()=>{setIsOpen(false)})
        }
    },[isOpen])
   
    return(
        <div className = 'nav-content'>
           <button id="btn-nav-mobile" onClick={(e)=>btnNav(e)} className='button-open-nav-mobile'> <span>  </span>  <span>  </span>  <span>  </span>  </button> 
            <nav className='nav-custom'  id = "navDynamique" > 
            <ul className = 'list-nav'>
                <Link to='/'>
                    <li className='list-nav-content'>accueil</li>
                </Link>
                <Link to='/projects'>
                    <li className='list-nav-content'>porte feuille</li>
                </Link>
                <Link to='/offre'>
                    <li className='list-nav-content'>offres</li>
                </Link>
                <Link to="/project-perso">
                    <li className='list-nav-content'>projets perso</li>
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