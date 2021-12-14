import '../assets/scss/Mentors.scss';
import gregAvatar from '../assets/images/static/mentors/greg-avatar.svg';
import hedyAvatar from '../assets/images/static/mentors/hedy-avatar.svg';
import richAvatar from '../assets/images/static/mentors/rich-avatar.svg';

const Mentors =()=>{
    return(
        <>
            <div className="mentors">
                <h4 className="mentors-h4"><span className="little-text"> Ils </span>m'ont suivi</h4>
                <div className="mentors-content">
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Hedy  DARGÈRE</h5>
                        <img src={hedyAvatar} alt='avatar-mentor'/>
                        <p className="aide-aporter">Hedy m'a beaucoup aidé dans le début de ma reconversion avec une connaissance et une maîtrise incroyable sur les langages HTML5,
                            CSS3 ainsi que ces préprocesseurs comme SASS, LESS et bien d'autres
                            Hedy m'a également apporté une aide plus globale par rapport à son expérience
                         </p>
                        <a href='https://www.linkedin.com/in/hedy-darg%C3%A8re-0a34b81a7/' className="mentor-lien" target='_blank' rel="noreferrer">Lien vers le linked in d' Hedy</a>
                        </div>
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Grégoire BOISSEAUX</h5>
                        <img src={gregAvatar} alt="avatar-mentor"/>
                        <p className="aide-aporter">
                            Grégoire a été un des mentors évaluateur qui a évalué mon projet sur le SEO & Référencement,
                            il m'a apporté une bonne vision du monde du développement ainsi que des conseils de qualité.
                            Il n'y a pas si longtemps son experience m'a bien aidé. <br/>
                            Grégoire m'a apporté une aide autant technique qu'humaine </p>
                        <a href='https://www.linkedin.com/in/boisseaugregoire/' className="mentor-lien" target='_blank' rel="noreferrer">Lien vers le linked in de Grégoire</a>
                    </div>
                   
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Richard NGU LEBOU</h5>
                       <img src={richAvatar} alt='avatar-mentor'/>
                        <p className="aide-aporter">
                            Richard a été mon mentor durant les 6 mois de formation il m’a apporté une grande
                            plus-value par son expérience et sa connaissance dans le langage Javascript que se soit côté serveur 
                            avec node js ou côté client il avait une maitrise du language tel qui m'a transmis ses connaissances qui valent
                            de l'or.
                        </p>
                        <a href='https://www.linkedin.com/in/dr-richard-ngu-leubou-a5384684/' className="mentor-lien" target='_blank' rel="noreferrer">Lien vers le linked in de Richard</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mentors;