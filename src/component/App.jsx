import './../assets/scss/App.scss';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Maintaining from './Maintaining';
import Header from './Header';
import Nav from './Nav';
import ChangeTheme from '../themes/original/Theme';
import Main from './Main';
import ProjectCustomer from './ProjectCustomer';
import Erreur404 from './Erreur404';
import Login from './Login';

const App = () => {
 
  let  xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let  yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  
  const url = 'http://localhost:3001/api/'; // a modifier pour passer en prod -- 1. passer l'api en HTTPS !!!! --- 2. changer le localhost en V1.0 pour adapter a l'hebergeur
  const [onMaintenance, setOnMaintenance] = useState(false);
  const [userIsCo, setUserIsCo]= useState(false); // true pour test
  const [userIsAdm, setUserIsAdm]= useState(false);  //true pour test
  const [status,setStatus]=useState('Not Connected 🔴');
  useEffect(()=>{
    let userIsConnected = sessionStorage.getItem('user_co');
    if(userIsConnected){
      let userIsCoParse = JSON.parse(userIsConnected);
      console.log(userIsCoParse.isConected);
      setUserIsCo(userIsCoParse.isConected);
      setUserIsAdm(userIsCoParse.isAdmin);
      setStatus("Connected 🟢");
    }
    return()=>{
      setUserIsCo(false);
      setUserIsAdm(false);
      setStatus("Not Connected 🔴");
    }
    
  },[setUserIsCo, setUserIsAdm,setStatus])
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
    <div className="App">
      
      <p className="testCo" >{status}</p>
      
      <Login apiUrl={url} setStatus={setStatus}/>
      
      <Router
        forceRefresh={false}
      >
        <Header largeur={xMax} hauteur={yMax} />
        <Nav largeur={xMax} hauteur={yMax}/>
        <Switch>{
          onMaintenance ?
            <Route path="/" exact component={Maintaining}/> :
            <Route path="/" exact component={()=>< Main ConnectApiUrl={url}/>}/>
          }
          <Route path='/projects' exact component={()=> <ProjectCustomer isAdmin={userIsAdm} connectApiUrlProjects={url} />}/>
          <Route component={Erreur404}/> 
        </Switch>
      </Router>
      <footer id='footer-principal'>magin code - 2021</footer>
    </div>
  );
}

export default App;
