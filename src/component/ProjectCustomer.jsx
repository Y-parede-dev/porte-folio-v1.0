import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ProjectCustomer.scss";
import InitReq from "../config/InitReq";
import PostProject from "./PostProject";

const ProjectCustomer = ({isAdmin , connectApiUrlProjects}) => {
    const [AllProjects, setAllProjects] = useState([]);
    const urlProject = `${connectApiUrlProjects}projects`;
   /*   TO DO v1.1.0 :
            - METRE EN PLACE UN FICHIER POUR REGROUPER TOUS LES USEEFFECTS 
             
    */
    console.log(urlProject)
    
    useEffect(()=>{
        fetch(urlProject, InitReq())
            .then(res=>res.json("GET","application/json"))
            .then(
                (result)=>{
                    console.log(result);
                    setAllProjects(result.result)
                }
            )
        return () => {
            setAllProjects([])
        }
    },[setAllProjects]);
   
    console.log(AllProjects.length)

    return (
        <div className="page-projects">
            <PostProject isAdmin={isAdmin} urlProject={urlProject}/>
            <h2 className='mes-projets'><span className='little-text'>MES </span>PROJETS</h2>
            <p className='test-count'>il y a actuelement {AllProjects.length} projets importer sur le site</p>
            <div className={AllProjects.length<4 ? `content-all-projects content-all-projects-${AllProjects.length}`:`content-all-projects content-all-projects-3`}>
                {AllProjects.map(it=>(
                <a className='lien-projet'  key={`${it.nom}-${it.id}`} href={`${it.lien}`} target='_blank'>
                    <div className="content-project">
                        <div id={`projet-${it.id}`}className="projet">
                            <header id={`header-projet-${it.id}`} className='header-projet'>
                                <h3 id={`nom-projet-${it.id}`}>{it.nom}</h3>
                            </header>
                            <img id={`img-projet-${it.id}`} className='img-projets' alt={`Image du projet numero : ${it.id}`} src={`${urlProject.split('projects').join(`assets/images/projects/${it.img_url}`)}`}/>
                            <p id={`desc-projet-${it.id}`}className="desc-project" >{it.description}</p>
                            <footer id={`footer-projet-${it.id}`} className="footer-projet">
                                    <p className="lien-projet-p" id={`lien-projet-${it.id}`}>{it.lien.split('https://')}</p> 
                            </footer>
                        </div>
                        <div className="disabled interact-project">
                            <p className="interact-project-txt">Cliquez-pour voir le site</p>
                        </div>
                        <div className='techno'>
                            <p className="test">{it.techno}</p>

                        </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectCustomer;