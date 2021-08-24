import Developpeur from './Developpeur';
import Present from './Present';
import '../assets/scss/Main.scss';
import Mentors from './Mentors';
import Maintaining from './Maintaining';
import { useEffect } from 'react';
const Main = ({ConnectApiUrl, isLoaded, setIsLoaded}) => {
    const profilDev = `${ConnectApiUrl}profil`;
    
    return(
        <div id="Main" className="component-main">
            <Developpeur connectApiUrlDev={profilDev} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
            <Present />
            <Mentors/>
        </div>
    )
}
    

export default Main;