import './../assets/scss/App.scss';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loader from './Loader';
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
import ProfilsDev from './FormAbout';
import RouterReact from './Router';
import buildSitemap from 'react-build-sitemap'


const App = () => {
 
  let xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let heightMax = document.body.offsetHeight;

  
  const url = 'https://api--porte-folio.herokuapp.com/api/'; // a modifier pour passer en prod -- 1. passer l'api en HTTPS !!!! --- 2. changer le localhost en V1.0 pour adapter a l'hebergeur
  const [onMaintenance, setOnMaintenance] = useState(false);
  const [userIsCo, setUserIsCo]= useState(false); // true pour test
  const [userIsAdm, setUserIsAdm]= useState(false);  //true pour test
  const [status,setStatus]=useState('Not Connected 🔴');
  const [footOpen, setFootOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [height, setHeight]= useState(0);
  //buildSitemap('./Router.jsx', '../../sitemap.xml', 'https://magin-code.fr');
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
    
    let height = document.body.offsetHeight/2;
    let largeur = xMax;
    window.onload=()=>{
        if(height<850){
            document.getElementById('footer-principal').style.display='block';
        }else{
            document.getElementById('footer-principal').style.display='none';
            window.onscroll = ()=>{
              try{
                
                if(largeur>850){
                    if(document.documentElement.scrollTop > 200){
                        document.getElementById('navDynamique').style.position = "fixed";
                        document.getElementById('navDynamique').style.top = 0;
                        document.getElementById('navDynamique').style.padding = "10px 0";
        
                    }else{
                        document.getElementById('navDynamique').style.position = "relative";
                        document.getElementById('navDynamique').style.top = 'initial';
                        document.getElementById('navDynamique').style.padding = "0 0 20px";
                    }
                    if(document.documentElement.scrollTop > height){
                        document.getElementById('footer-principal').style.display='block';
                        
                    }else{
                        document.getElementById('footer-principal').style.display='none';
                    }
                }else{
                    document.getElementById('footer-principal').style.display='block';
              }
            }catch{
            }
      }
    }
    }
},[])
 // fin block d'activation maintenance
 /*if(window.location.href=='http://localhost:3000/privacy-policy'){
    window.location=`${urlExt}`;
 }*/

  return (
    <div id="App" className="App">
      <RouterReact 
        apiUrl={url} 
        setUserIsCo={setUserIsCo}
        userIsAdm={userIsAdm} setUserIsAdm={setUserIsAdm} 
        largeur={xMax} hauteur={yMax} 
        isLoaded={isLoaded} setIsLoaded={setIsLoaded} 
        footOpen={footOpen} setFootOpen={setFootOpen}
        height={heightMax}
       />
      {/* <Router
        forceRefresh={false}
      >
        <Login apiUrl={url} setUserIsCo={setUserIsCo} setUserIsAdm={setUserIsAdm} /> 
        <Header largeur={xMax} hauteur={yMax} />
        <Nav largeur={xMax} hauteur={yMax}/>
        <Switch>
          <Route path="/" exact component={()=><Main ConnectApiUrl={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
          <Route path='/projects' exact component={()=> 
            <PortFolio userIsAdm={userIsAdm} url={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
          <Route path='/project-perso' exact component={()=> 
          <ProjetPerso />}/>
          <Route path='/mentions' exact component={()=><Mentions/>}/>
          <Route path='/rgpd' exact component={()=><Rgpd/>}/>
          <Route path='/about' exact component={()=><ProfilsDev/>}/>
          <Route component={Erreur404}/> 
        </Switch>
        <Footer largeurEcran={xMax} height={heightMax} footOpen={footOpen} setFootOpen={setFootOpen}/>
      </Router> */}
    </div>
  );

}

export default App;
