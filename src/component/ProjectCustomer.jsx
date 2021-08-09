import { useEffect, useState } from "react";
import "../assets/css/ProjectCustomer.css";
import InitReq from "../config/InitReq";

const ProjectCustomer = ({connectApiUrlProjects}) => {
    const [AllProjects, setAllProjects] = useState([]);
    const urlProject = `${connectApiUrlProjects}projects`;
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
            <h1 className='test-pc'>PROJETS</h1>
            <p className='test-count'>il y a actuelement {AllProjects.length} projets importer sur le site</p>
            <div className='content-all-projects'>{AllProjects.map(it=>(
                <div id={`projet-${it.id}`} key={`${it.nom}-${it.id}`}className="project">
                    <h3 id={`nom-projet-${it.id}`}>{it.nom}</h3>
                    <img id={`img-projet-${it.id}`} className='img-projects' alt={`Image du projet numero : ${it.id}`} src={`${urlProject.split('projects').join(`assets/images/projects/${it.img_url}`)}`}/>
                    <p id={`desc-projet-${it.id}`}>description : <br />{it.description}</p>
                    <p id={`lien-projet-${it.id}`}>lien : <br /> {it.lien}</p>
                </div>
            ))}

            </div>
        </>
    )
}

export default ProjectCustomer;