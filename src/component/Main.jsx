import Developpeur from './Developpeur';
import Present from './Present';
import '../assets/css/Main.scss';
import Mentors from './Mentors';
const Main = ({ConnectApiUrl}) => {
    const profilDev = `${ConnectApiUrl}profil`
    
    return(
        <div className="component-main">
            <Developpeur connectApiUrlDev={profilDev}/>
            <Present/>
            <Mentors/>
        </div>
    )
}
export default Main;