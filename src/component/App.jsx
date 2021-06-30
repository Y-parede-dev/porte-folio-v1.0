import './../assets/css/App.css';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Maintenance from './Maintenance';
import Header from './Header';
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
        <Header/>
        <ChangeTheme/>
        <div>{ onMaintenance === true ? 
          <Route path="/" exact component={Maintenance}/> :""}
          </div>
      </Router>
    </div>
  );
}

export default App;
