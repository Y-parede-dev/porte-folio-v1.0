import ProjectCustomer from "./ProjectCustomer";
import ProjectSchool from "./ProjectSchool";
import '../assets/scss/PortFolio.scss';
import PostProject from "./PostProject";

const PortFolio=({userIsAdm, url, isLoaded, setIsLoaded})=>{
    return (
        <>
            <div className="page-projects">
               {userIsAdm && <PostProject isAdmin={userIsAdm} urlProject={`${url}projects`}/>}
                <ProjectCustomer isAdmin={userIsAdm} connectApiUrlProjects={url}  isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
                <ProjectSchool/>
            </div>
        </>
    )
}
export default PortFolio;