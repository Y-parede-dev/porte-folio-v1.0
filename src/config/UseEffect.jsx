import {useEffect} from 'react';
export const TestScroll =(largeur)=>{
    useEffect(()=>{
        window.onscroll = function () {
        try{
            if(largeur>850){

                if(document.documentElement.scrollTop > 200){
                    document.getElementById('navDynamique').style.position = "fixed";
                    document.getElementById('navDynamique').style.top = 0;
                    document.getElementById('navDynamique').style.padding = "10px 0";
    
                }else{
                    document.getElementById('navDynamique').style.position = "relative";
                    document.getElementById('navDynamique').style.top = 'initial';
                    document.getElementById('navDynamique').style.padding = "0 0 20px";
                }
                
            }
            if(document.documentElement.clientHeight>50){

                if(document.documentElement.scrollTop > document.documentElement.clientHeight){
                    document.getElementById('footer-principal').style.display = "block";
    
                }else{
                    document.getElementById('footer-principal').style.display = "none";
                }
            }else{
                document.getElementById('footer-principal').style.display = "block";

            }
        }catch{

        }
        }

    },[])
}