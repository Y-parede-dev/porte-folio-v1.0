import{Link} from 'react-router-dom';
import "../assets/scss/Offres.scss";

const Offre=()=>{
    const starter={
        name:"Starter",
        type:["site vitrine"]
    };
    const pro={
        name:"Pro",
        type:["e-comerce", "réseau social", "Application web"]
    };
    const mesure={
        name:"Sur_mesure",
        type:["site à grande échelle "]
    }    
    const offres=[]
    offres.push(starter, pro, mesure);
    return(
        <div>
            <h4 className="h4-offres"><span className='little-text'>Les</span> offres</h4>
            <section className="offres">
                {
                    offres.map(offre=>(
                        <div key={`${offre.name}-${1}`} id={offre.name} className="card-offre">
                            <h3>{offre.name.includes("_")?offre.name.replace('_', " "):offre.name}</h3>
                            <div className="data-card-offre">
                                <div  className="price-offre">
                                    <p className="title-col">Prix</p> 
                                    <button className="btn-devis"> {/* ajouter fond bleu font color blanc*/}
                                        <Link to="/about"> 
                                            <span className='devis'>Devis gratuit</span>
                                        </Link>
                                    </button>
                                </div>
                                <div className="type-offre">
                                    <p className="title-col">Type</p> 
                                    <ul className="type-offre-list">{offre.type.map(type=>(
                                        <li key={type}>{type}</li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))
                    }
            </section>
    </div>
    )
}
export default Offre;