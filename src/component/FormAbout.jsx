import { useEffect } from 'react';
import '../assets/scss/ProfilDev.scss';
import InitReq from '../config/InitReq.jsx';

const FormAbout = () => {
    
    return(
        <>
            <div className="contact">
                <form className='form-contact' onSubmit={()=>{}}>
                    <label htmlFor='nom-contact'>Votre nom</label>
                    <input name="nom-contact" type="text" className="nom" />
                    <label htmlFor='prenom-contact'>Votre prenom</label>
                    <input name="prenom-contact" type="text" className="prenom" />
                    <label htmlFor='email-contact'>Votre email</label>
                    <input name="email-contact" type="email" className="email" />
                    <label htmlFor='message-contact'>Votre question/message</label>
                    <textarea name="message-contact" type="text" className="message" />
                    <button onClick={()=>{}}type='submit'>Envoyer</button>
                </form>
                
            </div>
        </>
    )
}

export default FormAbout;