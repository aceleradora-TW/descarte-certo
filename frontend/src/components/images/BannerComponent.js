import React from 'react'
import Banner from './img-banner.jpeg'
import BannerStyle from'./BannerStyles.css'


function BannerComponent(){

    return(       
        <div className="banner-style"  >        
            <h1 className="titulo">Seja bem vinda, somos o Descarte Certo!</h1>
            <img  className="img-banner" fixed="top" src={Banner}></img>       
      </div>
      
    )
}export default BannerComponent