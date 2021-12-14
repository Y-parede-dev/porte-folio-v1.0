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
            <h4 className='mes-projets mes-projets-school'><span className='little-text'>MES </span>PROJETS D'ÉTUDE</h4>
            <blockquote className="bq-projetct-school">
                <q>Ici je vous présente les projets que j'ai mené à bien durant la formation développeur web suivi avec <a className="open-link" href="https://openclassrooms.com/" target="_blank" rel="noopener noreferrer">O
                    <span className='cacher-o'></span>penClassRooms </a></q>
            </blockquote>
            <div className='projet-etude content-all-projects content-all-projects-3'>
                <div className="projet-etude">
                    <a className='lien-projet'  href="https://github.com/Y-parede-dev/OC-Projet-2" target='_blank' rel="noreferrer">
                        <div className="content-project">
                            <div className="projet">
                                <header  className='header-projet'>
                                    <h3 >CV en HTML5 et CSS/3</h3>
                                </header>
                                <img  className='img-projets img-projets-school need-box-shadow' alt="Projet html5 css3" src={html5}/>
                                <p className="desc-project" >Projet réalisé en HTML5 / CSS 3, début d'une grande aventure de merveilleux souvenirs et naissance d'une passion</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créer votre cv en HTML5 / CSS3</p> 
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
                                <img  className='img-projets img-projets-school need-box-shadow' alt="Projet animation avec css 3" src={p3}/>
                                <p className="desc-project" >Projet réalisé en HTML5 / CSS 3 & SASS en préprocesseur, avec ce projet j'ai gagné en puissance, et en expérience sur les animations CSS.
                                </p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créé des animations avec CSS 3 et SASS</p> 
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
                                <img  className='img-projets img-projets-school need-box-shadow' alt="Projet SEO & Referencement" src={p4}/>
                                <p className="desc-project" >Dans ce projet j'ai mis en pratique le SEO & le référencement, en optimisant un site web déjà existant changement taille sources(images etc.), optimisation du code(la syntaxe, la sémantique) et adaptation en responsive design.
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
                                    <h3 >Site e-commerce</h3>
                                </header>
                            
                                    <img  className='img-projets img-projets-school need-box-shadow' alt="Projet création site e-comerce" src={p5}/>
                                <p className="desc-project" >Projet réalisé en HTML5 / CSS 3 & Javascript, projet superimportant premier script en Javascript, ce projet se concentre sur toute la partie frontend de la création d'un site e-commerce</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créer un site e-commerce</p> 
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
                            
                                    <img  className='img-projets img-projets-school need-box-shadow' alt="Projet construire une api sécuriser" src={p6}/>
                                <p className="desc-project" >Projet réalisé avec Node Js, le but étant de créer une API pour un site répertoriant des sauces l'API est CRUD</p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créer une api d'avis gastronomique</p> 
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
                                    <h3 >Réseau social d'entreprise</h3>
                                </header>
                            
                                    <img  className='img-projets img-projets-school need-box-shadow' alt="Projet reseau social d'entreprise" src={p7}/>
                                <p className="desc-project" >Ce projet m’a fait découvrir la joie de créer un site avec la vision d'un fullstack création intégrale d'un réseau social autant côté backend que frontend.
                                    utilisation de NodeJs / reactjs et certaines de leur dépendance (exemple : express, json web token, react dom router, etc.).
                                </p>
                                <footer  className="footer-projet">
                                    <p className="lien-projet-p" >Créer un réseau social d'entreprise</p> 
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