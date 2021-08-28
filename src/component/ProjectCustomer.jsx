import { useEffect, useState } from "react";
import "../assets/scss/ProjectCustomer.scss";
import InitReq from "../config/InitReq";
import PostProject from "./PostProject";
import Loader from "./Loader";
const ProjectCustomer = ({isAdmin , connectApiUrlProjects, isLoaded, setIsLoaded}) => {
    const [imgSvgImported, setImgSvgImported] = useState('');
    const [AllProjects, setAllProjects] = useState([]);
    const urlProject = `${connectApiUrlProjects}projects`;
   /*   TO DO v1.1.0 :
            - METRE EN PLACE UN FICHIER POUR REGROUPER TOUS LES USEEFFECTS 
             
    */
    
    
    useEffect(()=>{
        fetch(urlProject, InitReq("GET","application/json"))
            .then(res=>res.json())
            .then(
                (result)=>{
                    setAllProjects(result.result);
                    setIsLoaded(true)
                }

            );
        return () => {
            setAllProjects([]);
            //setIsLoaded(false)
        }
    },[]);
   if(!isLoaded){
        return(
            <>
                <Loader/>
            </>
        )
   }else{

       return (
           <>
           <div className="mes-projets-content">
               <h4 className='mes-projets'><span className='little-text'>MES </span>PROJETS</h4>
               {AllProjects ?
               <div className="page-projects">
                   
                   <p className='test-count'>il y a actuelement {AllProjects.length} projet{AllProjects.length > 1 && 's'} importer sur le site</p>
                   <p>Vous trouverez sur cette pages tous les projets profesionneles que j'ai réaliser en descendant dans la page vous pourez voir le code des site/applications web de mes projets d'étude.</p>
                   <div className={AllProjects.length<4 ? `content-all-projects content-all-projects-${AllProjects.length}`:`content-all-projects content-all-projects-3`}>
                       {AllProjects.map(it=>(
                       <a className='lien-projet'  key={`${it.nom}-${it.id}`} href={`${it.lien}`} target='_blank'>
                           <div className="content-project">
                                   <div id={`projet-${it.id}`}className="projet">
                                       <header id={`header-projet-${it.id}`} className='header-projet'>
                                           <h3 id={`nom-projet-${it.id}`}>{it.nom}</h3>
                                       </header>
                                       <img id={`img-projet-${it.id}`} className='img-projets' alt={`Image du projet numero : ${it.id}`} src={it.img_url}/>
                                       <p id={`desc-projet-${it.id}`}className="desc-project" >{it.description}</p>
                                       <footer id={`footer-projet-${it.id}`} className="footer-projet">
                                               <p className="lien-projet-p" id={`lien-projet-${it.id}`}>{it.lien.split('https://')}</p> 
                                       </footer>
                                   </div>
                               <div className="disabled interact-project">
                                   <p className="interact-project-txt">Cliquez-pour voir le site</p>
                               </div>
                          
                           </div>
                       </a>
                       ))}
                   </div>
               </div>:<Loader props='non connecter a la base de donnéés'/>
           }
           </div>
       </>
       )
   }
}


export default ProjectCustomer;