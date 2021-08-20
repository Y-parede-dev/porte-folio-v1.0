import '../assets/scss/Mentors.scss';
import Avatar from 'avataaars';

import { useEffect } from 'react';

const Mentors =()=>{
    
        
    return(
        <>
            <div className="mentors">
                <h4 className="mentors-h4">Ils mon suivis</h4>
                <div className="mentors-content">
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Hedy  DARGÈRE</h5>
                        <Avatar
                            avatarStyle='Circle'
                            topType='ShortHairShortRound'
                            accessoriesType='Blank'
                            hairColor='Black'
                            facialHairType='Blank'
                            clotheType='Hoodie'
                            clotheColor='Heather'
                            eyeType='Side'
                            eyebrowType='DefaultNatural'
                            mouthType='Twinkle'
                            skinColor='Light'
                            />
                        <p className="aide-aporter">Hedy ma beaucoup aider dans le début de ma reconversion avec une connaissance et une maitrise incroyable sur les lagunages HTML5,
                            CSS3 ainsi que ces préprocesseurs comme SASS, LESS et bien d'autres
                            Hedy ma également apporter une aide plus globale par rapport à son expérience
                         </p>
                        <a href='#' className="mentor-lien" target='_blank'>Lien vers le linked in d' Hedy</a>
                        </div>
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Grégoire BOISSEAUX</h5>
                        <Avatar
                            avatarStyle='Circle'
                            topType='ShortHairShortFlat'
                            accessoriesType='Prescription02'
                            hairColor='Black'
                            facialHairType='BeardLight'
                            facialHairColor='Black'
                            clotheType='GraphicShirt'
                            clotheColor='Black'
                            graphicType='Bat'
                            eyeType='Default'
                            eyebrowType='DefaultNatural'
                            mouthType='Smile'
                            skinColor='Light'
                            />
                        <p className="aide-aporter">
                            Grégoire a été un des mentors évaluateur qui a évalué mon projet sur le SEO & Référencement,
                            il m'a apporté une bonne vision du monde du développement ainsi que des conseils de qualité.
                            Il n'y a pas si longtemps son experience ma bien aider. <br/>
                            Grégoire ma apporter une aide autant technique qu'humaine </p>
                        <a href='https://www.linkedin.com/in/boisseaugregoire/' className="mentor-lien" target='_blank'>Lien vers le linked in de Grégoire</a>
                    </div>
                   
                    <div className="mentor-profil">
                        <h5 className="mentor_nom">Richard NGU LEBOU</h5>
                        <Avatar
                            avatarStyle='Circle'
                            topType='NoHair'
                            accessoriesType='Blank'
                            facialHairType='Blank'
                            clotheType='BlazerShirt'
                            eyeType='Default'
                            eyebrowType='DefaultNatural'
                            mouthType='Default'
                            skinColor='Black'
                        />
                        <p className="aide-aporter">Richard a été mon mentor durant les 6 mois de formation il m’a apporté une grande
                         plus-value par son expérience et sa connaissance dans le language Javascript que se soit côté serveur 
                         avec node js ou côté client il avait une maitrise du language tel qui m'a transmis c'est connaissance qui vale
                          de l'or.
                        </p>
                        <a href='https://www.linkedin.com/in/dr-richard-ngu-leubou-a5384684/' className="mentor-lien" target='_blank'>Lien vers le linked in de Richard</a>
                    </div>
                </div>
              
            </div>
        </>
    )
}
export default Mentors;