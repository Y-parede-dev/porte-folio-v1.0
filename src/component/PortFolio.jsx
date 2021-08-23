import ProjectCustomer from "./ProjectCustomer"
import ProjectSchool from "./ProjectSchool"

const PortFolio=({userIsAdm, url})=>{
    return (
        <>
            <ProjectCustomer isAdmin={userIsAdm} connectApiUrlProjects={url} />
            <ProjectSchool/>
        </>
    )
}
export default PortFolio;