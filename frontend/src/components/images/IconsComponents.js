import React from 'react'
import FaceIcon from './icon-face.png'
import InstaIcon from './icon-insta.png'
import WhatsIcon from './icon-whats.png'
import MailIcon from './icon-mail.png'
import Logo from './logo-5marias.png'


function FacebookIcon(){

    return(       
        <div  >        
            <img  src={FaceIcon} width="50px"></img>       
      </div>
      
    )
}export {FacebookIcon}

function InstagramIcon(){

    return(       
        <div  >        
            <img  src={InstaIcon} width="50px"></img>       
      </div>
      
    )
}export {InstagramIcon}

function WhatsAppIcon(){
    return(
            <div  >        
                <img  src={WhatsIcon} width="50px"></img>       
          </div>
    )

}export {WhatsAppIcon}

function EMailIcon(){
    return(
            <div  >        
                <img  src={MailIcon} width="50px"></img>       
          </div>
    )

}export {EMailIcon}

function Logotipo(){
    return(
            <div>        
                <img  src={Logo} width="200px"></img>       
          </div>
    )

}export {Logotipo}