import "../assets/scss/Mentions.scss";
const Mentions = () => {
    return(
    <>
        <div className='mentions-legales'>
            <h1 className='mentions-legales--title'>mentions légales</h1>
            <div className="mentions-legales-content">
                <div className='mentions-legales--editeur mentions-legales--item'>
                    <h2 className='editeur-tilte title-ml'>🪧 éditeur du site</h2>
                        <div className='editeur-contact item-inside'>
                            {/* ajouter before sur tout les P suivant exemple adr*/}
                            <p className='nom-prenom'><span className='nom'>🙋‍♂️ parede</span><span className="prenom"> yoan</span></p>
                            <p className='adresse info-contact info'>📬 31 boulevard de l'Europe, 31700 blagnac</p>
                            <p className="telephone info-contact info">📱 06 59 69 50 29</p>
                            <p className="couriel info-contact info">📧 <a className="link-ml" href='mailto:magin.code@gmail.com'>magin.code@gmail.com</a></p>
                            <p className='siret info-contact info'>👔 Siren: <a className="link-ml" href='https://www.infogreffe.fr/entreprise-societe/533140844-parede-yoan-53314084400028.html?typeProduitOnglet=EXTRAIT&afficherretour=false'>533 140 844 00028</a></p>
                            <p className='numero-inpi info-contact info'>👮‍♂️ Numéro INPI: IN PROGRESS</p>
                            <p className="status info-contact info">🏢 Auto-Entrepreneur</p>
                            <p className="tva info-contact info"><span className='magin-code'>Magin code </span>
                                est une micro-entreprise, et n’est donc pas assujettie à la TVA d’après l’article <a href='https://www.service-public.fr/professionnels-entreprises/vosdroits/F21746#:~:text=La%20mention%20%C2%AB%20TVA%20non%20applicable,le%20paiement%20de%20la%20TVA.' className='link-ml'>293 B du CGI</a>.
                            </p>
                            <p className="responsable info-contact info">Responsable de publication : PAREDE Yoan</p>
                        </div>
                </div>
                
                <div className="mentions-legales--item mentions-legales--loi-info">
                    <h2 className="title-ml loi-info-title">loi informatique et libertes</h2>
                    <div className="item-inside item-inside-loi">
                        <p className="entreprise info">L'entreprise <span className="magin--code">Magin code</span> prête une attention particulière à vos données personnelles.</p>
                        <p className="engagement info">Elle s’engage de par ses conditions d’utilisation à ne transmettre, vendre ou céder à un tiers aucune information personnelle vous concernant.</p>
                        <p className="info loi">Conformément à la loi « Informatique et Libertés » N° 78-17 du 6 Janvier 1978, vous bénéficiez d’un droit d’accès, de rectification et d’opposition.</p>
                        <p className="info contact-droit">Pour l’exercer, merci de bien vouloir nous contacter par l’intermédiaire du mail de contact.</p>
                    </div>
                </div>
                <div className="mentions-legales--item mentions-legales--hebergement">
                    <h2 className="title-ml hebergement-title">hébergement</h2>
                    <div className="item-inside">
                        <p className="hebergeur info"> hebergement du frontend: netlify</p>
                        <a className="link-ml hebergeur-link info" href="https://www.netlify.com">netlify.com</a>
                        <p className="hebergeur info"> hebergement du backend: heroku</p>
                        <a className="link-ml hebergeur-link info" href="https://www.heroku.com">heroku.com</a>
                    </div>
                </div>
                <div className="mentions-legales--item mentions-legales--droits-auteur">
                    <h2 className='droits-auteur-title title-ml'>droits d'auteur - copyright - marques</h2>
                    <div className="item-inside">
                        <p className='marques'>Toutes les marques citées et logos représentés sur ce site sont propriété de leurs titulaires respectifs.</p>
                        <p>icones </p>
                        <div>Icônes conçues par <a className="link-ml" href="https://www.flaticon.com/fr/auteurs/catalin-fertu" title="Catalin Fertu">Catalin Fertu</a> from <a className="link-ml" href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
                    </div>
                </div>
                <div className="mentions-legales--item mentions-legales--conception">
                    <h2 className="conception-title title-ml">conception & réalisation</h2>
                    <div className="item-inside">
                        <p className="conception">Développement & itégration : <a className="link-ml magin-code" href="mailto:magin.code@gmail.com">Magin code</a></p>
                    </div>
                </div>
            </div>
        </div> 
    </>
    )
}
export default Mentions;