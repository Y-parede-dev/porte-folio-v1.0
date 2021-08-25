import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Typewriter, useTypewriter} from 'react-simple-typewriter';
import '../assets/scss/Developpeur.scss';
import InitReq from "../config/InitReq";
import Loader from "./Loader";
//import avatarDev from '../assets/images/developpeur.gif'
const Developpeur = ({connectApiUrlDev, isLoaded, setIsLoaded}) => {
    const [dev, setDev] = useState([]);
    const text = useTypewriter({
        words: ['développeur web','développeur javaScript', 'développeur react.js', 'développeur node.js', 'passionné'],
        loop: 0,
    });
    const imgUrl= connectApiUrlDev.split('profil')[0];
    try {
        useEffect(()=>{
            let urlProfil = `${connectApiUrlDev}/1`;
            
            fetch(urlProfil, InitReq("GET","application/json"))
               .then(res => res.json())
               .then((result) => {
                   setDev(result.result);
                   localStorage.setItem('dev', result.result)
                   setIsLoaded(true);
                },(err)=>{console.log(err)})
                return ()=>{setDev([])}
        },[setDev]);
       if(!isLoaded){
        return(
            <>
                <Loader/>
            </>
        )
    }
       else{
            return (
                <>
                    {dev.map((it)=>(
                        <div className='component-developpeur' key={`${it.nom} - ${it.prenom}`}>
                            <h1><span className='nom'>{it.nom}</span><span className='prenom'> {it.prenom} </span></h1>
                            <p>Je suis <span>{text}</span></p>
                            <div className='img-profil'>
                                <Link to='/profil'>
                                    <img title="Cliquez sur mon avatar pour voir mon profil" alt="développeur du site" src={`${imgUrl}assets/images/profils/admin/${it.img_url}`}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </>
            )
        }
    } catch (error) {
        return (
        <>
            <Loader/>
        </>
        )
    }
}

export default Developpeur;