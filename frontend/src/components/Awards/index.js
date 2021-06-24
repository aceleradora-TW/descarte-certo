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
       <img src={LogoFounder} alt="Logo tipo do Founder Institute"></img>
       <img src={LogoAgil} alt="Logo tipo da Aceleradora Ágil" ></img>
       <img src={LogoGarage} alt="Logo tipo da Aceleradora Ágil" ></img>
       <img src={logoCreathon} alt="Logo tipo da Aceleradora Ágil" ></img>
       <img src={logoGoogle} alt="Logo tipo da Aceleradora Ágil" ></img>
       <img src={logoIclei} alt="Logo tipo da Aceleradora Ágil" ></img>
      </div>
   </section>
  )
}
export default Awards