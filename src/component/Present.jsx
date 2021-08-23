import '../assets/scss/Present.scss';
import imgUnivers from '../assets/images/static/espace.png';
import imgPresta from '../assets/images/static/preston_logo_6.png';
import imgNode from '../assets/images/static/Node.js_logo-48.png';
import imgSass from '../assets/images/static/sass.png';
import TechnoFav from './TechnoFav';

const Present = ({setIsLoaded,isLoaded}) => {
    return(
        <div className="component-present">
            <div className="component-present-inside component-present-inside-welcome">
                <h4>Bienvenue dans mon univers</h4>
                <p>Je suis développeur web freelance, je travaille principalement avec react.js, node.js et certaines de ces dépendances comme express</p>
            </div>
            <div className="image-art-1">
                {/* metre un dossier en place qui stocke lesl logo suivant */}
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img className='img-techno' src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img className='img-techno' src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png"/>
                <img className='img-techno img-techno-node' src={imgNode}/>
                <img className='img-techno img-techno-node' src="https://img.icons8.com/color/48/000000/mysql-logo.png"/>
                <img className='img-techno' src={imgPresta}/>
                <img className='img-techno' src={imgSass}/>
                <div className="img-art-1-content">
                {/* //////////////////////////////////////////////////////////// */}
                    <img alt='image univers' className='univers-image' src={imgUnivers}/>
                </div>
            </div>
            <div className="component-present-inside component-present-inside-présentation">
                <h4>Ma présentation en quelques mots</h4>
                <p>Bonjour, moi c'est Yoan, je suis tombé amoureux du web après m'être blessé j'ai décidé de me reconvertir,
                     une longue recherche et beaucoup de questions se posaient alors à moi</p><br/>
                    <p className="question">Que puis-je faire? </p><br/>
                    <p className="question">Que-ce qui me plaît? </p><br/>
                    <p className="question">En quoi suis-je performant? </p><br/>
                    <p>Je savais, depuis toujours que l'informatique m'intéresse et me passionne (notamment les jeux vidéo).<br/>
                    J'ai donc commencé à suivre des tutos par-ci par-là (très fastidieux dans le début), assez fier d’avoir pu voir
                     la puissance des lagunages ou d'autres moins performent mais qui se défendent toujours malgré leur âge (je pense notamment au .LUA)
                    </p>
                    <blockquote className='block-quote-main'>
                    <q>Le .LUA est un language contreverser mais sert toujours, j'ai plein d'exemples mais je n'en citerai qu'un : les scripts sur FiveM étais pendant longtemps <span className="to-bold">90% en .LUA</span>, 
                        l'utilisation de JS (POO), et C# est assez récente).</q>    
                    </blockquote>
                    <p>J'ai par la suite suivi une préparation de 6 mois puis 6 mois de formation avec&nbsp;
                    <a className="open-link" href="https://openclassrooms.com/" target="_blank" rel="noopener noreferrer">O
                    <span className='cacher-o'></span>penClassRooms </a>
                    &nbsp;Durant tout ce cursus j'ai étais suivi par de super mentors <br/>
                        Je continue à apprendre, car le web est vaste et de nouvelles façons de faire, ressources sont disponibles chaque jour.
                    </p>            
            </div>
            <TechnoFav />
        </div>
    )
}
export default Present;