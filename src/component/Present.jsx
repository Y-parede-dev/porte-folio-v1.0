import '../assets/css/Present.scss';
const Present = () => {
    return(
        <div className="component-present">
            <div className="component-present-inside component-present-inside-welcome">
                <h4>Bienvenue dans mon univers</h4>
                <p>Je suis développeur web freelance, je travaille principalement avec react.js, node.js et certaines de ces dépendances comme express</p>
            </div>

            <div className="component-present-inside component-present-inside-présentation">
                <h4>Ma présentation en quelques mots</h4>
                <p>Bonjour, moi c'est Yoan, je suis quelq'un qui est tombé amoureux du web après m'etre blesser 
                    j'ai décider de me reconvertir, une longue recherche et beaucoup de questions se posaient a moi</p><br/>
                    <p className="question">Que puis-je faire? </p><br/>
                    <p className="question">Que-ce qui me plait? </p><br/>
                    <p className="question">En quoi suis-je performant? </p><br/>
                    <p>Je n'avais pas toutes les réponses.<br/>Je savait, depuis toujours que la technologie
                    minteresse et me passionne (notament les jeux vidéo).<br/>
                    J'ai donc commencer a suivre des tutos par ci par la (très fastidieux dans les début ), assez fier davoir pu voir la puissance des laguages
                    ou d'autre moins performent mais qui se défendent toujours malgres leur age (je pense notament au .LUA qui même très contreverser sert toujours
                    j'ai plein d'exemples mais je n'en citerai qu' un : les script sur FiveM etais pendant longtemps <span className="to-bold">90% en .LUA</span>, 
                    l'utilisation de JS (POO), et C# est assez récente).<br/>
 
                    J'ai par la suite suivi une préparation de 6 mois puis 6 mois de formation avec&nbsp;
                    <a className="open-link" href="https://openclassrooms.com/" target="_blank" rel="noopener noreferrer">O
                    <span className='cacher-o'></span>penClassRooms </a>
                    &nbsp;durant tout se cursus j'ai étais suivi par de super mentors<br/>
                    Je continue a apprendre car se web est vaste et de nouvelles facon de faire, ressources sonts disponible chaques jours.

                    
                    </p>            
            </div>

        </div>
    )
}
export default Present;