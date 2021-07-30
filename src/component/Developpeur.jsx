import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Typewriter, useTypewriter} from 'react-simple-typewriter';
import '../assets/css/Developpeur.css';
//import avatarDev from '../assets/images/developpeur.gif'
const Developpeur = ({connectApiUrlDev}) => {
    const [dev, setDev] = useState([]);
    const text = useTypewriter({
        words: ['développeur react.js', 'développeur node.js', 'passionné'],
        loop: 0,
    });
    const imgUrl= connectApiUrlDev.split('profil')[0];

    useEffect(()=>{
        const myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')
        const myInit = { 
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        }
        fetch(connectApiUrlDev, myInit)
           .then(res => res.json())
           .then((result) => {
               setDev(result.result);
            },(err)=>{console.log(err)})
        
    },[]);
   
    return (
        <>
            <Link to='/profil'>
                {dev.map((it)=>(
                    <div className='component-developpeur' key={it.nom, it.prenom}>
                        <h4>{it.nom} {it.prenom} </h4>
                        <p>Je suis <span>{text}</span></p>
                        <img title="Cliquez sur mon avatar pour voir mon profil" alt="développeur du site" src={`${imgUrl}assets/test/developpeur.gif`}/>
                    </div>
                ))}
            </Link>
        </>
    )
}

export default Developpeur;