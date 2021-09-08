import './../assets/scss/App.scss';
import React,  { useState, useEffect } from 'react';
import RouterReact from './Router';


const App = () => {
 
  let xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let yMax = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let heightMax = document.body.offsetHeight;

  
  const url = 'https://api--porte-folio.herokuapp.com/api/'; // a modifier pour passer en prod -- 1. passer l'api en HTTPS !!!! --- 2. changer le localhost en V1.0 pour adapter a l'hebergeur
  const [userIsCo, setUserIsCo]= useState(false); // true pour test
  const [userIsAdm, setUserIsAdm]= useState(false);  //true pour test
  // const [status,setStatus]=useState('Not Connected 🔴');
  const [footOpen, setFootOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
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
},[xMax])
 // fin block d'activation maintenance
 /*if(window.location.href=='http://localhost:3000/privacy-policy'){
    window.location=`${urlExt}`;
 }*/

  return (
    <div id="App" className="App">
      {/* <Cursor/> */}
      <RouterReact 
        apiUrl={url} 
        userIsCo={userIsCo}
        setUserIsCo={setUserIsCo}
        userIsAdm={userIsAdm} setUserIsAdm={setUserIsAdm} 
        largeur={xMax} hauteur={yMax} 
        isLoaded={isLoaded} setIsLoaded={setIsLoaded} 
        footOpen={footOpen} setFootOpen={setFootOpen}
        height={heightMax}
       />
     
    </div>
  );

}

export default App;
