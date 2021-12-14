import '../assets/scss/Present.scss';
import imgUnivers from '../assets/images/static/espace.png';

const Present = ({setIsLoaded,isLoaded}) => {
    return(
        <div className="component-present">
            <div className="component-present-inside component-present-inside-welcome">
                <h4>Bienvenue dans mon univers</h4>
                <p>Je suis développeur web freelance, je travaille principalement avec react.js, node.js et certaines de ces dépendances comme express</p>
            </div>
            
             <div className="image-art-1">
                 
                <div className="img-art-1-content">
                    <img alt='mon univers' className='univers-image' src={imgUnivers}/>
                </div>
            </div>  
                {/* //////////////////////////////////////////////////////////// */}
            <div className="component-present-inside component-present-inside-présentation">
                <h4>Ma présentation en quelques mots</h4>
                <p>Bonjour, moi c'est Yoan, je suis tombé amoureux du web après m'être blessé j'ai décidé de me reconvertir,
                     une longue recherche et beaucoup de questions se posaient alors à moi</p><br/>
                    <p className="question">Que puis-je faire? </p><br/>
                    <p className="question">Que-ce qui me plaît? </p><br/>
                    <p className="question">En quoi suis-je performant? </p><br/>
                    <p>Je savais, depuis toujours que l'informatique m'intéresse et me passionne (notamment les jeux vidéo).<br/>
                    J'ai donc commencé à suivre des tutos par-ci par-là (très fastidieux dans le début), assez fier d’avoir pu voir
                     la puissance des langages ou d'autres moins performant mais qui se défendent toujours malgré leur âge (je pense notamment au .LUA)
                    </p>
                    <blockquote className='block-quote-main'>
                    <q>Le .LUA est un langage contreverser mais sert toujours, j'ai plein d'exemples je n'en citerai qu'un : les scripts sur FiveM étais pendant longtemps <span className="to-bold">90% en .LUA</span>, 
                        l'utilisation de JS (POO), et C# est assez récente).</q>    
                    </blockquote>
                    <p>J'ai par la suite suivi une préparation de 6 mois puis 6 mois de formation avec&nbsp;
                    <a className="open-link" href="https://openclassrooms.com/" target="_blank" rel="noopener noreferrer">O
                    <span className='cacher-o'></span>penClassRooms </a>
                    &nbsp;Durant tout ce cursus j'ai été suivi par de super mentors <br/>
                        Je continue à apprendre, car le web est vaste et de nouvelles façons de faire, ressources sont disponibles chaque jour.
                    </p>            
            </div>
        </div>
    )
}
export default Present;