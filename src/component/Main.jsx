import Developpeur from './Developpeur';
import Present from './Present';
import '../assets/css/Main.css';
const Main = () => {
    return(
        <div className="component-main">
            <Developpeur/>
            <Present/>
        </div>
    )
}
export default Main;