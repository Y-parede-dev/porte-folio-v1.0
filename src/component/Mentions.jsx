import "../assets/scss/Mentions.scss";
const Mentions = () => {
    return(
    <>
        <div className='mentions-legales'>
            <h1 className='mentions-legales--title'>mentions légales</h1>
            <div className='mentions-legales--editeur'>
                <h2 className='editeur-tilte title-ml'>éditeur du site</h2>
                    <div className='editeur-contact'>
                        {/* ajouter before sur tout les P suivant exemple adr*/}
                        <p className='nom-prenom'><span className='nom'>parede</span><span className="prenom"> yoan</span></p>
                        <p className='adresse info-contact info'>31 boulevard de l'Europe, 31700 blagnac</p>
                        <p className="telephone info-contact info">06 59 69 50 29</p>
                        <p className="couriel info-contact info">contact@magin-code.fr</p>
                        <p className='siret info-contact info'>533 140 844 00028</p>
                        <p className='numero-inpi info-contact info'>IN PROGRESS</p>
                        <p className="status info-contact info">Auto-Entrepreneur</p>
                        <p className="tva info-contact info"><span className='magin-code'>Magin code</span><br/>
                            est une micro-entreprise, et n’est donc pas assujettie à la TVA d’après l’article 293 B du CGI.
                        </p>
                        <p className="responsable info-contact info">Responsable de publication : PAREDE Yoan</p>
                    </div>
	        </div>
            <div className="mention-legales--hebergement">
                <h2 className="title-ml hebergement-title">hébergement</h2>
                <p classname="hebergeur info">netlify</p>
                <a classname="hebergeur-link info" href="https://www.netlify.com">netlify.com</a>
                <p classNam="info capital-hebergeur"> ?? € </p>
                <p classNam="info siege-hebergeur">dont le siege est établie : IN PROGRESS</p>
                <p classNam="info imat-hebergeur">immatriculée au Registre du Commerce et des Sociétés sous le numéro</p>
                <p classNam="info imat-hebergeur-num"> ?? </p>
            </div>
            <div className="mention-legales--loi-info">
                <h2 className="title-ml loi-info-title">loi informatique et libertes</h2>
                <p classname="entreprise info">L'entreprise <span className="magin--code">Magin code</span> prête une attention particulière à vos données personnelles.</p>
                <p classname="engagement info">Elle s’engage de par ses conditions d’utilisation à ne transmettre, vendre ou céder à un tiers aucune information personnelle vous concernant.</p>
                <p classNam="info loi">Conformément à la loi « Informatique et Libertés » N° 78-17 du 6 Janvier 1978, vous bénéficiez d’un droit d’accès, de rectification et d’opposition.</p>
                <p classNam="info contact-droit">Pour l’exercer, merci de bien vouloir nous contacter par l’intermédiaire du mail de contact.</p>
            </div>
            <div className="mentions-legales--conception">
                <h2 className="conception">conception & réalisation</h2>
                <p className="conception">Développement & itégration : <a className="magin-code" href="mailto:contact@magin-code.fr">Magin code</a></p>
            </div>
            <div className="mentions-legales--droits-auteur">
                <h2 className='droits-auteur'>droits d'auteur - copyright - marques</h2>
                <p className='marques'>Toutes les marques citées et logos représentés sur ce site sont propriété de leurs titulaires respectifs.</p>
                <p>icones </p>
                <div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/catalin-fertu" title="Catalin Fertu">Catalin Fertu</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
            </div>  
        </div> 
    </>
    )
}
export default Mentions;