import { useState } from 'react';
import '../assets/scss/FormAbout.scss';
import InitReq from '../config/InitReq';
import {isValidEmailFront} from '../config/ValidMail';
//logo network

import logoFB from '../assets/images/static/logo-network/Facebook.svg';
import logoLI from '../assets/images/static/logo-network/Linkedin.svg';
import logoMT from '../assets/images/static/logo-network/malt.svg';
import templateSVG from '../assets/images/static/logo-network/SVG/mes_reseaux.svg';


const FormAbout = ({apiUrl}) => {
    const [nomData, setNomData] = useState("");
    const [mailData, setMailData] = useState("");
    const [sujetData, setSujetData] = useState("");
    const [contentData, setContentData] = useState("");
    const data = {
        nom: nomData,
        objet: sujetData,
        email: mailData,
        contenu: contentData
    };
        //  exemple data = {
    //         nom,
    //         email,
    //         contenu,
    //         objet
    //         }
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        fetch(`${apiUrl}mail`, InitReq("POST","application/json",JSON.stringify(data)))
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                alert("Email envoyer");
                window.location.reload()

            },error=>{return error});
            
    }
    const setColor = (e) => {
        if(e.target.type === "email"){
            const messageMailNotValid = document.createElement('P');
            messageMailNotValid.textContent = "Veuillez entrez une adresse email valide";
            messageMailNotValid.style.color = "red";
            messageMailNotValid.className = "message-error";
            messageMailNotValid.id = "message-error";

            console.log(document.getElementById('meta-mail').children)
            if(isValidEmailFront(e.target.value)){
                e.target.className =  "input-contact valid";
                if(document.getElementById('message-error')){
                    document.getElementById('message-error').remove();
                }
            }else{
                if(document.getElementById('meta-mail').childElementCount<=2){
                    document.getElementById('meta-mail').appendChild(messageMailNotValid);
                }
                e.target.className = "input-contact not-valid";

                
            }
        }else{
            if(e.target.value.length < 1 ){
                e.target.classList.remove ='valid';
                e.target.className =  "input-contact not-valid";
            }else {
                e.target.classList.remove ='not-valid';
                e.target.className = "input-contact valid";
            }
        }
    }
    const setFieldNom = (e) => {
        setNomData(e.target.value)
        console.log("e",e.target.className)
        console.log("n",nomData.length)
        setColor(e);
        
    }
    
    const setFieldSujet = (e) => {
        setSujetData(e.target.value);

    }
    const setFieldMail = (e) => {
        setMailData(e.target.value);
        setColor(e);

    }
    const setFieldContent = (e) => {
        setContentData(e.target.value);

    }
    return(
        <>
            <div className="contact">
                <h1 className="title-contact">Contactez moi</h1>
                <p className="contact-with-form">Si vous souhaitez un contact rapide je vous invite à passer par Messenger vous avez un accès rapide en bas à droite sur chaque page,<br />
                 si vous souhaitez un devis pour un projet vous pouvez remplir directement le formulaire je réponds sous 24 h maximum</p>
                <form className='form-contact' onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="meta-contact">
                        <div id="meta-nom" className="meta-nom meta-elt">
                            <label className='label-contact label-nom' htmlFor='nom-contact'>Votre nom & prénom</label>
                            <input name="nom-contact" type="text" className="nom input-contact"  value={nomData} onChange={setFieldNom} />
                        </div>
                        <div id="meta-sujet" className="meta-sujet meta-elt">
                            <label className='label-contact label-sujet' htmlFor='sujet-contact'>Sujet</label>
                            <input name="sujet-contact"  placeholder=" *exemple: création api, site/application web ..." type="text" className="input-contact prenom sujet" value={sujetData} onChange={setFieldSujet} />
                        </div>
                        <div id="meta-mail" className="meta-mail meta-elt">
                            <label className='label-contact label-mail' htmlFor='email-contact'>Votre email</label>
                            <input name="email-contact" type="email" className="email input-contact" value={mailData} onChange={setFieldMail} required />
                        </div>
                    </div>
                    <div className='message-contact'>
                        <label className='label-message' htmlFor='message-contact'>Votre message</label>
                        <textarea name="message-contact" type="text" className="message" value={contentData} onChange={setFieldContent} required />
                    </div>
                    <button className='btn-form-about' type='submit'>Envoyer</button>
                </form>
                {/*<div className="link-network">
                    <h2 className="link-network-h2"><span className="little-text">MES</span> LIENS SOCIAUX</h2>
                    <a href="https://www.facebook.com/Yoanparede1" target="_blank" rel="noopener noreferrer"><img className="logo-network logo-fb" src={logoFB} alt='faceboook'/></a>
                    <a href="https://www.linkedin.com/in/yoan-parede-b95893198/" target="_blank" rel="noopener noreferrer"><img className="logo-network logo-li" src={logoLI} alt="linkedin"/></a>
                    <a href="https://www.malt.fr/profile/yoanparede1" target="_blank" rel="noopener noreferrer"><img className="logo-network logo-mt" src={logoMT} alt="malt" /></a>
                </div>*/}
            </div>
        </>
    )
}

export default FormAbout;
