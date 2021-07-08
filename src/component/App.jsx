import './../assets/css/App.css';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Maintaining from './Maintaining';
import Header from './Header';
import Nav from './Nav';
import ChangeTheme from '../themes/original/Theme';

const App = () => {
  // Block d'activation maintenance
    //  TO DO :
    //    Déplace la fonction dans un dossier 
    //    spécialement conçus a cet effet

  const [onMaintenance, setOnMaintenance] = useState(false)
  useEffect(()=>{
    const MaintenanceActivate = () => {
      setOnMaintenance(true)
    };
    MaintenanceActivate();
  },[]);
 // fin block d'activation maintenance

  return (
    <div className="App">
      <Router>
        <ChangeTheme/>
        <Header/>
        <Nav />
        <main>
          <div>{ onMaintenance === true ? 
            <Route path="/" exact component={Maintaining}/> : <Route path="/" exact component={Maintaining}/>}
          </div>
        </main>
        <footer>Je suis legion!!!</footer>
      </Router>
    </div>
  );
}

export default App;
