import { useEffect, useState } from "react";
import "../assets/css/ProjectCustomer.css";
import InitReq from "../config/InitReq";

const ProjectCustomer = ({connectApiUrlProjects}) => {
    const [AllProjects, setAllProjects] = useState([]);
    const urlProject = `${connectApiUrlProjects}projects`;
   /*   TO DO v1.1.0 :
            - METRE EN PLACE UN FICHIER POUR REGROUPER TOUS LES USEEFFECTS 
             
    */
    console.log(urlProject)
    useEffect(()=>{
        fetch(urlProject, InitReq())
            .then(res=>res.json())
            .then(
                (result)=>{
                    console.log(result);
                    setAllProjects(result.result)
                }
            )
    },[]);
   
    console.log(AllProjects.length)

    return (
        <>
            <h1 className='test-pc'><span className='little-text'>MES </span>PROJETS</h1>
            <p className='test-count'>il y a actuelement {AllProjects.length} projets importer sur le site</p>
            <div className={AllProjects.length<4 ? `content-all-projects content-all-projects-${AllProjects.length}`:`content-all-projects content-all-3`}>
                {AllProjects.map(it=>(
                    <div id={`projet-${it.id}`} key={`${it.nom}-${it.id}`}className="projet">
                        <header id={`header-projet-${it.id}`} className='header-projet'>
                            <h3 id={`nom-projet-${it.id}`}>{it.nom}</h3>
                        </header>
                        <img id={`img-projet-${it.id}`} className='img-projets' alt={`Image du projet numero : ${it.id}`} src={`${urlProject.split('projects').join(`assets/images/projects/${it.img_url}`)}`}/>
                        <p id={`desc-projet-${it.id}`}>{it.description}</p>
                        <footer id={`footer-projet-${it.id}`} className="footer-projet">
                            <p id={`lien-projet-${it.id}`}><br /> {it.lien}</p>
                        </footer>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectCustomer;