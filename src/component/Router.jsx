import './../assets/scss/App.scss';
import React,  { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import PortFolio from './PortFolio';
import Erreur404 from './Erreur404';
import ProjetPerso from './ProjetPerso';
import Footer from './Footer';
import Mentions from './Mentions';
import Rgpd from './Rgpd';
import FormAbout from './FormAbout';
import Offre from './Offre';
import {Reboot}from './Reboot'


const RouterReact=({
        apiUrl, userIsAdm,
        largeur, hauteur, isLoaded, setIsLoaded, footOpen,
        setFootOpen, height}) => {
    return (
        <>
            <Router
                forceRefresh={true} >
                {/* <Login apiUrl={apiUrl} setUserIsCo={setUserIsCo} setUserIsAdm={setUserIsAdm} /> */}
                <Header largeur={largeur} hauteur={hauteur} />
                <Nav largeur={largeur} hauteur={hauteur}/>
                <Suspense fallback={<>CHARGEMENT</>}>
                    <Switch>
                        {/* <Route path="/" exact component={()=><Reboot/>}/> */}
                        <Route path="/" exact component={()=><Main ConnectApiUrl={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
                        <Route path='/projects' exact component={()=> 
                            <PortFolio userIsAdm={userIsAdm} url={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
                        <Route path='/project-perso' exact component={()=> 
                            <ProjetPerso />}/>
                        <Route path='/offre' exact component={()=><Offre/>}/>

                        <Route path='/mentions' exact component={()=><Mentions/>}/>
                        <Route path='/rgpd' exact component={()=><Rgpd/>}/>
                        <Route path='/about' exact component={()=><FormAbout apiUrl={apiUrl} />}/>
                        <Route component={Erreur404}/> 
                    </Switch>
                </Suspense>
                <Footer largeurEcran={largeur} height={height} footOpen={footOpen} setFootOpen={setFootOpen}/>
            </Router>
        </>
    )

}
export default RouterReact;