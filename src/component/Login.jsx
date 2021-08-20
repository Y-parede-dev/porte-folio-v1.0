import { useEffect, useState } from "react"
import InitReq from "../config/InitReq";
import "./../assets/scss/Login.scss";
const Login = ({apiUrl,setStatus}) => {
    
    const [isConected, setIsConected] = useState(true);
    const [emailData, setEmailData] = useState("");
    const [passData, setPassData] = useState("");
    const [isGo, setIsGo] = useState(false);

    const test=()=>{
        setIsConected(!isConected)
        console.log(isConected)
    }
    const setDataMail = (e) => {
        setEmailData(e.target.value)
    }
    const setDataPass = (e) => {
        setPassData(e.target.value)
    }
    const bodyConnect={
        mail:emailData,
        pass:passData
    }
   
    console.log(`mail data : ${emailData}`)
    console.log(`pass data : ${passData}`)
    const HandleSubmitlog = (e) => {
        fetch(`${apiUrl}profil/login`, InitReq("POST","application/json",JSON.stringify(bodyConnect)))
            .then(res=>res.json())
            .then((result)=>{
                let recupResponse = JSON.stringify(result);
                sessionStorage.setItem('user_co',recupResponse);
                let testr = sessionStorage.getItem("user_co");
                const teste = JSON.parse(testr);
                console.log(teste)
                console.log(teste.id)
            },(err)=>{
                console.log(err)
            })
            setStatus("Connected 🟢");

        e.preventDefault();
        e.stopPropagation();
        
    }
    
    return(
    <>

        <a style={{color:"red"}} onClick={()=>test()} href="#">conection</a>
        {!isConected?
        <div className="form-log-content">
            <form className="from_log" onSubmit={(e)=>HandleSubmitlog(e)}>
                <h3 className="login-panel">Se connecter</h3>
                <label htmlFor="mail" className="form-control-log">Email</label>
                <input name="mail" type="text" className="form-control-log form-control-log-input" value={emailData} onChange={setDataMail} />
                <label htmlFor="pass" className="form-control-log">Mot de passe</label>
                <input name="pass" type="password" className="form-control-log form-control-log-input" value={passData} onChange={setDataPass}/>
                <button id="btn-form-log-s" type="submit">se conecter</button>
            </form>
        </div>:""
        }
    </>
    )
}
export default Login;