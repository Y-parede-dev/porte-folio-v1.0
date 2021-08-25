import '../assets/scss/TechnoFav.scss';
import logoNode from "../assets/images/static/Node.js_logo-48.png";
import logoSass from "../assets/images/static/sass.png";
import logoMongo from "../assets/images/static/mongodb.svg";

const TechnoFav = ()=>{
    return(
        <>
        {/*
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img className='img-techno' src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png"/>
                <img className='img-techno img-techno-node' src={imgNode}/>
                <img className='img-techno img-techno-node' src="https://img.icons8.com/color/48/000000/mysql-logo.png"/>
                <img className='img-techno' src={imgPresta}/>
                <img className='img-techno' src={imgSass}/>
            */}
            <div className="techno-fav">
                <h4 className="tehcno-fav-h4"><span className='little-text'>Mes</span> techno favorites</h4>
                <div className="techno-content">

                    <div className="techno">
                    <h5 className="techno-name">HTML5</h5>
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="logo HTML5" className="tecnho-logo" />
                    <p className="techno-desc">
                    J'utilise les balises HTML 5 pour construire l'architecture des sites / applications web que je crée,
                        je l'utilise principalement à l'intérieur de react dans le
                        <a className="lien-techno" href="https://fr.reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer"> jsx</a>
                    </p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">CSS3 avec SASS</h5>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="logo css3 " className="tecnho-logo" />
                        <img src={logoSass} alt="logo sass" className="tecnho-logo" />

                        <p className="techno-desc">
                        En matière de style et de design j'utilise CSS3 avec son préprocesseur SASS pour crée un design et des animations simples et efficaces.
                        </p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">Javascript côté client</h5>
                        <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" alt="logo js" className="tecnho-logo" />

                        <p className="techno-desc">
                        Nous ne le présentons plus Javascript est à mes yeux le language de référence pour le web, 
                        depuis son évolution ES6+ des nouvelles fonctionnalités ajoutait 
                        (par exemple les promesses, l'ajout des constantes en 2015, etc.).
                        il est devenu incontournable, autant coter frontend que backend.
                        </p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">ReactJs</h5>
                        <img src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png" alt="logo react" className="tecnho-logo" />

                        <p className="techno-desc">
                        Pourquoi React?, pourquoi pas Vue Js ou Angular js ?
                            Tout simplement par choix, il faut choisir quand nous avons 3 bibliothèques
                            qui ont chacune leurs qualités et leurs défauts il faut peser le pour et le contre, 
                            donc à mes yeux ayant essayé les 3 je me suis plus tournés Ver react car je trouve sa façon 
                            d'aborder le front me paraît plus intuitive et beaucoup plus simple à metre à jour sa force : 
                            la POC(programmation orientée composant)
                        </p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">Javascript côté serveur</h5>
                        <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" alt="logo js" className="tecnho-logo" />
                        
                        <p className="techno-desc">J'ai fait le choix d'utiliser Javascript côté serveur pour 2 raisons la première avoir un language
                            unifié pour la totalité du site, la seconde raison et plus personnelle vis-à-vis de Php qui est un
                            langage qui évolue bien mais ne m'attire pas plus que ça, malgré la puissance de son framework
                            Symfony qui est la référence des frameworks Php, je préfère coder en js.</p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">Node.Js</h5>
                        <img src={logoNode} alt="logo node" className="tecnho-logo" />

                        <p className="techno-desc">
                        Le choix de node trouve tout son sens avec le fait d'unifier le code frontend et backend en js,
                            sa faciliter de cree un serveur avec c'est dependence tel qu'express pour le serveur, body parser pour les requêtes HTTP,
                            ou muter pour la gestion des fichiers externes et bien plus encore
                        </p>
                    </div>
                    <div className="techno">
                        <h5 className="techno-name">Base de données Sql & No Sql</h5>
                        <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="logo mysql" className="tecnho-logo" />
                        <img src={logoMongo} alt="logo mongDB" className="tecnho-logo" />

                        <p className="techno-desc">Le fait de choisir une base de données SQL ou non est plus un choix par rapport au projet envisagé s'il y a peu 
                        d'information à stocker et que cette information n'est pas sensible tel qu'informations bancaires, etc. le choix se porterait plus sur du No Sql.
                        Si à l'inverse le site a énormément de donné à stocker, dans c'est donné son présent exemple: numéro sécurités sociales ou autres Choisir le SQL</p>
                    </div>
                </div>
            </div>
        </>
        )
}

export default TechnoFav;