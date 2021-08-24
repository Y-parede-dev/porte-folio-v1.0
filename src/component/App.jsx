import './../assets/scss/App.scss';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Maintaining from './Maintaining';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import PortFolio from './PortFolio';
import ProjectCustomer from './ProjectCustomer';
import Erreur404 from './Erreur404';
import Login from './Login';
import ProjetPerso from './ProjetPerso';
import Footer from './Footer';
import Mentions from './Mentions';
import Rgpd from './Rgpd';
import { TestScroll } from '../config/UseEffect';
const App = () => {
 
  let xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let heightMax = document.body.offsetHeight;

  console.log(window.innerHeight)
  console.log(document.documentElement.clientHeight)
  console.log(document.body.getBoundingClientRect())
  const url = 'https://api--porte-folio.herokuapp.com/api/'; // a modifier pour passer en prod -- 1. passer l'api en HTTPS !!!! --- 2. changer le localhost en V1.0 pour adapter a l'hebergeur
  const [onMaintenance, setOnMaintenance] = useState(false);
  const [userIsCo, setUserIsCo]= useState(false); // true pour test
  const [userIsAdm, setUserIsAdm]= useState(false);  //true pour test
  const [status,setStatus]=useState('Not Connected 🔴');
  const [footOpen, setFootOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  TestScroll(xMax);

  useEffect(()=>{
    let userIsConnected = sessionStorage.getItem('user_co');
    if(userIsConnected){
      setStatus("Connected 🟢");
    }
    return()=>{
      setStatus("Not Connected 🔴");
    }
  },[userIsCo])
  useEffect(()=>{
    
    
     // Block d'activation maintenance
    //  TO DO :
    //    Déplace la fonction de maintenance dans un dossier 
    //    spécialement conçus a cet effet
    //    crée un bouton sur le profil de l'admin pour activer ou desactiver la maintenance
    const MaintainingActivate = () => {
      //setOnMaintenance(true)
    };
    MaintainingActivate();
    return(()=>{
      
    })
  },[]);

 // fin block d'activation maintenance
 /*if(window.location.href=='http://localhost:3000/privacy-policy'){
    window.location=`${urlExt}`;
 }*/

  return (
    <div id="App" className="App">
      <Router
        forceRefresh={false}
      >
        <Login apiUrl={url} setUserIsCo={setUserIsCo} setUserIsAdm={setUserIsAdm} />
        <Header largeur={xMax} hauteur={yMax} />
        <Nav largeur={xMax} hauteur={yMax}/>
        <Switch>
          <Route path="/" exact component={()=><Main ConnectApiUrl={url} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
          <Route path='/projects' exact component={()=> 
            <PortFolio userIsAdm={userIsAdm} url={url} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
          <Route path='/project-perso' exact component={()=> 
          <ProjetPerso />}/>
          <Route path='/mentions' exact component={()=><Mentions/>}/>
          <Route path='/rgpd' exact component={()=><Rgpd/>}/>
          <Route component={Erreur404}/> 
        </Switch>
        <Footer largeurEcran={xMax} height={heightMax} footOpen={footOpen} setFootOpen={setFootOpen}/>
      </Router>
    </div>
  );

}

export default App;
