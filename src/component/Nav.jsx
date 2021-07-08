import { useState } from 'react';
import './../assets/css/Nav.css';

const Nav = () => {
    let  xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let  yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    let [isOpen, setIsOpen] = useState(false);
    const btnNav = (e) => {
        console.log(isOpen)
        try{
            if(isOpen !== false){
                setIsOpen(false);

            }else {
                setIsOpen(true)
            }
        }
        catch(error){
            console.log(error)
        }
        e.preventDefault();
        e.stopPropagation();
    };
    return(
        <div className = 'nav-content'>
            { xMax < 850 ? <button onClick={btnNav} className='test'>///</button> :
                 <nav id = "navNotMobile"> 
                    <ul className = 'list-nav list-nav-not-mobile'>
                        <li className='list-nav-content'><a className='list-nav-link' href='./'>accueil</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href='./test'>mes projets</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href=''>mes languages préféré</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href=''>contact</a></li>
                    </ul>
                </nav>}

            {isOpen ?
                <nav id = "navMobileFirst"> 
                    <ul className = 'list-nav'>
                        <li className='list-nav-content'><a className='list-nav-link' href='./'>accueil</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href='./test'>mes projets</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href=''>mes languages préféré</a></li>
                        <li className='list-nav-content'><a className='list-nav-link' href=''>contact</a></li>
                    </ul>
                </nav>
            :''}
            
        </div>
    )
}
export default Nav;