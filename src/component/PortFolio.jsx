import ProjectCustomer from "./ProjectCustomer";
import ProjectSchool from "./ProjectSchool";
import '../assets/scss/PortFolio.scss';

const PortFolio=({userIsAdm, url, isLoaded, setIsLoaded})=>{
    return (
        <>
            <div className="page-projects">

                <ProjectCustomer isAdmin={userIsAdm} connectApiUrlProjects={url}  isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
                <ProjectSchool/>
            </div>
        </>
    )
}
export default PortFolio;