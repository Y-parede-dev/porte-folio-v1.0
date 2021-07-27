import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Typewriter, useTypewriter} from 'react-simple-typewriter';
import '../assets/css/Developpeur.css';
import avatarDev from '../assets/images/developpeur.gif'
const Developpeur = () => {
    const text = useTypewriter({
        words: ['développeur react.js', 'développeur node.js', 'passionné'],
        loop: 0,
    })

    return (
        <>
            <Link to='/profil'>
                <div className='component-developpeur'>
                    <h4>Parede Yoan</h4>
                    <p>Je suis <span>{text}</span></p>
                    <img title="Cliquez sur mon avatar pour voir mon profil" alt="développeur du site" src={avatarDev}/>
                </div>
            </Link>
        </>
    )
}

export default Developpeur;