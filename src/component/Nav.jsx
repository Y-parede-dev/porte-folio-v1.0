import { useState, useEffect } from 'react';
import{Link} from 'react-router-dom'
import './../assets/css/Nav.css';

const Nav = ({largeur, hauteur}) => {
    let [isOpen, setIsOpen] = useState(false);
    const btnNav = (e) => {
        try{
            setIsOpen(!isOpen)
        }
        catch(error){
            console.log(error)
        }
        e.preventDefault();
        e.stopPropagation();
    };
    useEffect(()=>{
       window.onscroll = function () {
        try{
            if(document.documentElement.scrollTop > 125){
                document.getElementById('navNotMobile').style.position = "fixed";
                document.getElementById('navNotMobile').style.top = 0;
                document.getElementById('navNotMobile').style.padding = "34px 0";

            }else{
                document.getElementById('navNotMobile').style.position = "absolute";
                document.getElementById('navNotMobile').style.top = '168px';
                document.getElementById('navNotMobile').style.padding = "0 0 20px";

            }
        }catch{

        }
       }

    },[])
    return(
        <div className = 'nav-content'>
            { largeur < 850 ? <button onClick={btnNav} className='button-open-nav-mobile'>///</button> :
                 <nav id = "navNotMobile" > 
                    <ul className = 'list-nav list-nav-not-mobile'>
                        <Link to='/'>
                            <li className='list-nav-content'>accueil</li>
                        </Link>
                        <Link to='/projects'>
                            <li className='list-nav-content'>mes projets</li>
                        </Link>
                        <Link to="/lang">
                            <li className='list-nav-content'>mes languages préféré</li>
                        </Link>
                        <Link to="/about">
                            <li className='list-nav-content'>contact</li>
                        </Link>
                    </ul>
                </nav>}

            {isOpen ?
                <nav id = "navMobileFirst">
                    
                    <ul className = 'list-nav'>
                        <Link to='/'>
                            <li className='list-nav-content'>accueil</li>
                        </Link>
                        <Link to='/projects'>
                            <li className='list-nav-content'>mes projets</li>
                        </Link>
                        <Link to="/lang">
                            <li className='list-nav-content'>mes languages préféré</li>
                        </Link>
                        <Link to="/about">
                            <li className='list-nav-content'>contact</li>
                        </Link>
                    </ul>
                </nav>
            :''}
            
        </div>
    )
}
export default Nav;