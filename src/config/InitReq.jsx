const InitReq = (verbHttp = "GET", contentTypeH = 'application/json')=>{
    const myHeaders = new Headers()
            myHeaders.append('Content-Type', contentTypeH) // application/json || multipart/form-data -- si envoie de fichier etc...
    const myInit = { 
        method: verbHttp,
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    }
    return myInit;
}
export default InitReq;