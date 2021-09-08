import html5 from '../assets/images/static/p2.PNG';
import p3 from '../assets/images/static/p3.PNG';
import p4 from '../assets/images/static/p4.PNG';
import p5 from '../assets/images/static/p5.PNG';
import p6 from '../assets/images/static/p6.PNG';
import p7 from '../assets/images/static/p7.PNG';
import '../assets/scss/ProjectSchool.scss';
const ProjectSchool = () => {
    return (
        <div className="page-projects-etude">
            <h4 className='mes-projets'><span className='little-text'>MES </span>PROJETS D'ÉTUDE</h4>
            <div className='projet-etude content-all-projects content-all-projects-3'>
                <div className="projet-etude">
                    <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-Projet-2" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >CV en HTML5 et CSS/3</h3>
                                </header>
                                <img  className='img-projets need-box-shadow' alt="Projet html5 css3" src={html5}/>
                                <p className="desc-project" >Projet réaliser en HTML5 / CSS 3, début d'une grande aventure de merveilleux souvenir et naissance d'une passion</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Crée votre cv en HTML5 / CSS3</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projet-etude">
                     <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-Projet-3" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >Site web animé</h3>
                                </header>
                                <img  className='img-projets need-box-shadow' alt="Projet animation avec css 3" src={p3}/>
                                <p className="desc-project" >Projet réaliser en HTML5 / CSS 3 & SASS en préprocesseur, 
                                    avec ce projeyt j'ai gagné en puissance, et en experience sur les animations.
                                </p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créé des annimation avec CSS 3 et SASS</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projet-etude">
                     <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-Projet-4/" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >Référencement & SEO</h3>
                                </header>
                                <img  className='img-projets need-box-shadow' alt="Projet SEO & Referencement" src={p4}/>
                                <p className="desc-project" >Dans ce projet j'ai mis en pratique le SEO & le référencement, en optimisant un site web déjà existant 
                                    changement taille sources(images etc.), optimisation du code(la syntaxe, la sémantique) et adaptation en responsive design.
                                </p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Améliorer le référencement d'un site web</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projet-etude">
                     <a className='lien-projet'  href="https://github.com/Y-parede-dev/P5_Construisez-un-site-e-comerce" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >Site e-comerce</h3>
                                </header>
                            
                                    <img  className='img-projets need-box-shadow' alt="Projet création site e-comerce" src={p5}/>
                                <p className="desc-project" >Projet réaliser en HTML5 / CSS 3 & JavaScript, projet super important premier script en JavaScript, se projet
                                 se concentre sur toute la partie frontend de la création d'un site e-comerce</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Crée un site e-comerce</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projet-etude">
                     <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-p6-construisez-une-api-s-cu" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >Api avis gastronomique</h3>
                                </header>
                            
                                    <img  className='img-projets need-box-shadow' alt="Projet construire une api sécuriser" src={p6}/>
                                <p className="desc-project" >Projet réaliser avec NodeJs, le but étant de créé une API pour pour un site répertoriant des sauces l'API est CRUD</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Crée une api d'avis gastronoique</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="projet-etude">
                     <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-p7-reseaux" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >Reseau social d'entreprise</h3>
                                </header>
                            
                                    <img  className='img-projets need-box-shadow' alt="Projet reseau social d'entreprise" src={p7}/>
                                <p className="desc-project" >Ce projet ma fait d'écouvrir la joie de crée un site avec la vision d'un fullstack création integrale d'un reseau social
                                    autant côté backend que frontend.
                                    utilisation de NodeJs / reactJs et certaines de leur dépendences (exemple : express, json web token, react-dom-router, etc.).
                                </p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Crée votre cv en HTML5 / CSS3</p> 
                                </footer>
                            </div>
                            <div className="disabled interact-project">
                                <p className="interact-project-txt">Cliquez-pour voir le code</p>
                            </div>
                        </div>
                    </a>
                </div>
    
            </div>
        </div>
      
    )
}
export default ProjectSchool;