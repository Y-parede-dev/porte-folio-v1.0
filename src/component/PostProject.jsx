import { useEffect, useState } from "react";
import "../assets/css/PostProject.scss";
import InitReq from "../config/InitReq";

const PostProject = ({isAdmin, urlProject})=>{
    const [nbrChars, setNbrChars] = useState(0)
    const [imgPresent, setImgPresent] = useState(false)
    const [urlImg, setUrlImg] = useState("");
    const [fileImg, setFileImg] = useState([]);
    const [pannelAdmin, setPannelAdmin] = useState(true) //true pour test

    const [titleData, setTitleData]= useState('');
    const [descData, setDescData]= useState('');
    const [lienData, setLienData]= useState('');
    const [urlImgData, setUrlImgData]= useState('');

    const recupUser = sessionStorage.getItem('user_co');
    const recupUserParse=JSON.parse(recupUser);

    const CHARS_MAX = 400;
    console.log(urlProject)
    const bodyPost = new FormData()
    bodyPost.append('user_id','');
    bodyPost.append('nom','');
    bodyPost.append('lien','');
    bodyPost.append('description','');
    bodyPost.append('image','');
        
    // {
    //     user_id: recupUserParse.id,
    //     nom: titleData,
    //     description: descData,
    //     lien: lienData,
    //     image_url: urlImgData
    // }
    
    const recupInfo=(e,targ_set)=>{
        targ_set(e.target.value);
    }
    const postOnBdd =()=>{
        
        fetch(urlProject, InitReq("POST", null,bodyPost,recupUserParse.token))
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
        },(err)=>{
            console.log(err)
        })
    }
    const countChars = (e) =>{
        setNbrChars(e.target.value.length);
    }
    const openClosePannelAdmin=()=>{
        setPannelAdmin(!pannelAdmin);   
    }
    const handleSubmit=(e)=>{

        bodyPost.set('user_id',recupUserParse.id);
        bodyPost.set('nom',titleData);
        bodyPost.set('lien',lienData);
        bodyPost.set('description',descData);
        bodyPost.set('image',urlImgData);
        console.log(JSON.stringify(bodyPost))
        postOnBdd();
        e.preventDefault();
    }
    const previewpicture = (e)=>{
        const picture = e.target.files[0];
        if(picture){
            setImgPresent(true);
            let reader = new FileReader();
            reader.onload = (e) =>{
                setUrlImg(e.target.result)
            }
            reader.readAsDataURL(picture)
        }else{
            setImgPresent(false);
        }
    }
    try {
        let nbrCharsReel = document.getElementById('count_chars');
        if(nbrCharsReel){
            if(CHARS_MAX === nbrChars){
                nbrCharsReel.className='count-chars-max';
            }else if(CHARS_MAX > nbrChars){
                nbrCharsReel.className='count-chars';
            }
        }
    } catch (error) {
        console.log(error)
    }
    return (
        <>{ isAdmin?
            <div id="pannel-admin-post" className="post-project-form-content">
                <header className="header-project">
                    <h2>Paneaux post pour admin</h2>
                    <button onClick={()=>openClosePannelAdmin()}> 
                        <span></span>
                        <span></span>
                            - 
                        <span></span>
                        <span></span>
                    </button>
                </header>
                {pannelAdmin?
                <form onSubmit={(e)=>handleSubmit(e)} className='post-project-form'>
                    <label className="form-control form-control-label" htmlFor='titreP'>Titre/ Nom du site</label>
                    <input className="form-control" onChange={(e)=>recupInfo(e,setTitleData)} value={titleData} name='titreP' placeholder='* Titre/ Nom du site' required></input>

                    <label className="form-control form-control-label" htmlFor='imageP'>Image</label>
                    <input className="form-control form-control-file" type='file' onChange={(e)=>{setUrlImgData(e.target.files[0]);previewpicture(e)}} accept='image/*' name='imageP' placeholder='* Image'></input>
                    {imgPresent?<img className='preview-img-project' alt='image du projet' src={`${urlImg}`}/>:""}
                    <div className="form-control" className="content-description-project">

                        <label className="form-control form-control-label form-control-label-desc" htmlFor='descriptionP'>Description</label>
                        <textarea className="form-control description-new-project" onChange={(e)=>{recupInfo(e,setDescData);countChars(e)}}value={descData} name='descriptionP' placeholder='* Decription du site' maxLength={CHARS_MAX}></textarea>
                        <div className="content-max-char">
                            <p id='count_chars' className="count-chars" >{nbrChars}</p>
                            <p className="const-max-chars">/{CHARS_MAX}</p>
                        </div>                    
                    </div>
                 
                    <label className="form-control form-control-label" htmlFor='lienP'>Lien</label>
                    <input className="form-control" name='lienP' onChange={(e)=>recupInfo(e,setLienData)} value={lienData} placeholder='* Lien' required></input>
                    <div className="btn-submit-border">
                        <button className="submit-project" type="submit"><p className="inside-btn">Postez sur la Base de  donnée</p></button>
                    </div>
                </form>
                
                :""
                }
                <footer className='footer-project'>
                    <p className="avertisement">Attention si vous n'êtes pas Administrateur du site veuillez référer <a href="mailto:magin.code@gmail.com">parede yoan</a></p>
                </footer>
                
            </div>
            :""
            }
        </>
    )
}
export default PostProject;