import { useState } from "react";
import "../assets/css/PostProject.scss";

const PostProject = ({isAdmin})=>{
    const [nbrChars, setNbrChars] = useState(0)
    const [imgPresent, setImgPresent] = useState(false)
    const [urlImg, setUrlImg] = useState("");
    const [fileImg, setFileImg] = useState([]);

    const CHARS_MAX = 450;
    const countChars = (e) =>{
        setNbrChars(e.target.value.length);
        console.log(CHARS_MAX , ', ' , nbrChars)
    }
    const recupUrlImage =(e)=>{
        console.log(e)
        let recup = e.target.files[0];
        setFileImg(recup);
        console.log(recup)
        // let reader = new FileReader();
        // reader.onload = (elt)=>{
        //     console.log(elt.target.result)
        // }
        // reader.readAsDataURL(recup)
    }
    try{

        let ee = URL.createObjectURL(fileImg)
        setUrlImg(ee)
        console.log(urlImg)
        
    }catch(error){
        console.log(error)
    }
    try {
        if(CHARS_MAX == nbrChars){
            document.getElementById('count-chars').className='count-chars-max'
        }else if(CHARS_MAX > nbrChars){
            document.getElementById('count-chars').className='count-chars'
        }
    } catch (error) {
        console.log(error)
        
    }
    
    console.log(isAdmin)
    return (
        <>{ isAdmin?
            <div className="post-project-form-content">
                <header className="header-project">
                    <h2>Paneaux post pour admin</h2>
                </header>
                <form className='post-project-form'>
                    <label className="form-control form-control-label" htmlFor='titreP'>Titre/ Nom du site</label>
                    <input className="form-control" name='titreP' placeholder='* Titre/ Nom du site'></input>

                    <label className="form-control form-control-label" htmlFor='imageP'>Image</label>
                    <input className="form-control" type='file' onChange={(e)=>recupUrlImage(e)} accept='image/*' name='imageP' placeholder='* Image'></input>
                    {imgPresent?<img className='preview-img-project' alt='image du projet' src={`${urlImg}`}/>:""}
                    <div className="form-control" className="content-description-project">

                        <label className="form-control form-control-label" htmlFor='descriptionP'>Description</label>
                        <textarea className="form-control description-new-project" onChange={(e)=>countChars(e)} name='descriptionP' placeholder='* Decription du site' maxLength={CHARS_MAX}></textarea>
                        <div className="content-max-char">
                            <p id='count-chars' >{nbrChars}</p>
                            <p className="const-max-chars">/{CHARS_MAX}</p>
                        </div>                    
                    </div>
                 
                    <label className="form-control form-control-label" htmlFor='lienP'>Lien</label>
                    <input className="form-control" name='lienP' placeholder='* Lien'></input>
                </form>
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