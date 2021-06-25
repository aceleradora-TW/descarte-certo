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
      <div clasName="logos-section">
        <div className="awards-div">
          <img className="awards-logo"  width="120px" src={LogoFounder} alt="Logo tipo do Founder Institute"></img>
          <img className="awards-logo"  width="70" src={LogoAgil} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo"  width="130px" src={LogoGarage} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo"  width="80" src={logoCreathon} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo" width="150px" src={logoGoogle} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo" width="115px" src={logoIclei} alt="Logo tipo da Aceleradora Ágil" ></img>
        </div>
        <div className="awards-div-mobile" >
        <img className="awards-logo"  width="120px" src={LogoFounder} alt="Logo tipo do Founder Institute"></img>
          <img className="awards-logo"  width="70" src={LogoAgil} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo"  width="130px" src={LogoGarage} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo"  width="80" src={logoCreathon} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo" width="150px" src={logoGoogle} alt="Logo tipo da Aceleradora Ágil" ></img>
          <img className="awards-logo" width="115px" src={logoIclei} alt="Logo tipo da Aceleradora Ágil" ></img>
        </div>
      </div>
   </section>
  )
}
export default Awards