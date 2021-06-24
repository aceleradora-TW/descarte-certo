import React from 'react'
import './AwardsStyles.css'
import LogoFounder from '../images/logo-founder.png'
import LogoAgil from '../images/logo-aceleradora.png'
import LogoGarage from '../images/logo-startupgarage.png'
import logoCreathon from '../images/logo-creathon.png'
import logoGoogle from '../images/logo-google.png'
import logoIclei from '../images/logo-iclei.png'

function Awards() {
  return (
    <section className="awards-section">
      <h3>Nossas Conquistas</h3>
      <div clasName="logos-setcion">
        <div className="logo-image"><img src={LogoFounder} alt="Logo tipo do Founder Institute"></img></div>
        <div className="logo-image"><img src={LogoAgil} alt="Logo tipo da Aceleradora Ágil" ></img></div>
        <div className="logo-image"><img src={LogoGarage} alt="Logo tipo da Aceleradora Ágil" ></img></div>
        <div className="logo-image"><img src={logoCreathon} alt="Logo tipo da Aceleradora Ágil" ></img></div>
        <div className="logo-image"><img src={logoGoogle} alt="Logo tipo da Aceleradora Ágil" ></img></div>
        <div className="logo-image"><img src={logoIclei} alt="Logo tipo da Aceleradora Ágil" ></img></div>
      </div>
   </section>
  )
}
export default Awards