const InitReq = (verbHttp = "GET", contentTypeH = null, bodyH=null, token=null)=>{
    const myHeaders = new Headers()
    if(contentTypeH !== null){
        myHeaders.append('Content-Type', contentTypeH) // application/json || multipart/form-data -- si envoie de fichier etc...
    }
    if(token !== null) {
        myHeaders.append('Authorization','Bearer '+ token)
    }
    const myInit = { 
        method: verbHttp,
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: bodyH
    }
    return myInit;
}
export default InitReq;