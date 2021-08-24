import ProjectCustomer from "./ProjectCustomer";
import ProjectSchool from "./ProjectSchool";
import '../assets/scss/PorteFolio.scss';

const PortFolio=({userIsAdm, url})=>{
    return (
        <>
            <div className="page-projects">

                <ProjectCustomer isAdmin={userIsAdm} connectApiUrlProjects={url} />
                <ProjectSchool/>
            </div>
        </>
    )
}
export default PortFolio;