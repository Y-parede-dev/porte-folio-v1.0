import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Typewriter, useTypewriter} from 'react-simple-typewriter';
import '../assets/css/Developpeur.css';
import InitReq from "../config/InitReq";
//import avatarDev from '../assets/images/developpeur.gif'
const Developpeur = ({connectApiUrlDev}) => {
    const [dev, setDev] = useState([]);
    const text = useTypewriter({
        words: ['développeur web','développeur javaScript', 'développeur react.js', 'développeur node.js', 'passionné'],
        loop: 0,
    });
    
    const imgUrl= connectApiUrlDev.split('profil')[0];
    
    useEffect(()=>{
        let urlProfil = `${connectApiUrlDev}/1`;
        fetch(urlProfil, InitReq())
           .then(res => res.json())
           .then((result) => {
               setDev(result.result);
            },(err)=>{console.log(err)})
    },[]);
   
    return (
        <>
            <Link to='/profil'>
                {dev.map((it)=>(
                    <div className='component-developpeur' key={`${it.nom} - ${it.prenom}`}>
                        <h4>{it.nom} {it.prenom} </h4>
                        <p>Je suis <span>{text}</span></p>
                        <img title="Cliquez sur mon avatar pour voir mon profil" alt="développeur du site" src={`${imgUrl}assets/images/profils/admin/${it.img_url}`}/>
                    </div>
                ))}
            </Link>
        </>
    )
}

export default Developpeur;