import { useState, useEffect } from 'react';
import{Link} from 'react-router-dom'
import './../assets/scss/Nav.scss';

const Nav = ({largeur, hauteur}) => {
    const [isOpen, setIsOpen] = useState(false);
    const detection = () => {
        if(window.onresize <= "850px"){
            setIsOpen(false);
        }
        return ()=>setIsOpen(false)
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
            let recupBTNSpan=document.getElementById('btn-nav-mobile') ;
           
            // console.log(recupBTNSpan)
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
    // useEffect(()=>{
    //    window.onscroll = function () {
    //     try{
    //         if(largeur>850){

    //             if(document.documentElement.scrollTop > 200){
    //                 document.getElementById('navDynamique').style.position = "fixed";
    //                 document.getElementById('navDynamique').style.top = 0;
    //                 document.getElementById('navDynamique').style.padding = "10px 0";
    
    //             }else{
    //                 document.getElementById('navDynamique').style.position = "relative";
    //                 document.getElementById('navDynamique').style.top = 'initial';
    //                 document.getElementById('navDynamique').style.padding = "0 0 20px";
    //             }
    //             if(document.documentElement.clientHeight>50){
 
    //                 if(document.documentElement.scrollTop > document.documentElement.clientHeight){
    //                     document.getElementById('footer-principal').style.display = "block";
        
    //                 }else{
    //                     document.getElementById('footer-principal').style.display = "none";
    //                 }
    //             }else{
    //                document.getElementById('footer-principal').style.display = "block";
   
    //             }
    //         }
    //     }catch{

    //     }
    //    }

    // },[largeur])
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