import './../assets/scss/App.scss';
import React,  { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import PortFolio from './PortFolio';
import Erreur404 from './Erreur404';
import Login from './Login';
import ProjetPerso from './ProjetPerso';
import Footer from './Footer';
import Mentions from './Mentions';
import Rgpd from './Rgpd';
import ProfilsDev from './ProfilDev';

const RouterReact=({apiUrl,setUserIsCo, userIsAdm, setUserIsAdm, largeur, hauteur, isLoaded, setIsLoaded, footOpen, setFootOpen, height})=>{
    return(
    <>
        <Router
            forceRefresh={false}
        >
            <Login apiUrl={apiUrl} setUserIsCo={setUserIsCo} setUserIsAdm={setUserIsAdm} /> 
            <Header largeur={largeur} hauteur={hauteur} />
            <Nav largeur={largeur} hauteur={hauteur}/>
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
        <Footer largeurEcran={largeur} height={height} footOpen={footOpen} setFootOpen={setFootOpen}/>
      </Router>
    </>)

}
export default RouterReact;