import React from 'react';
import Carousel from 'react-elastic-carousel'
import './ModalConfirmationStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function ModalConfirmation () {
  // #TODO: refatorar o onclick para ser close e não reload
  function handlecloseWindow() { window.location.reload() };
  //#TODO: substituir os spans pelos endpoints da modal anterior
  return (
    <div className="modal-container">
      <h3 className="total-budget">Seu orçamento: <span>R$250,00</span><span>(Gesso)</span>*</h3>
      <p className="message">Utilizando o serviço da 5 Marias, você garante o descarte correto do seu resíduo.</p>
      <div className="div-car">
        <Carousel enableAutoPlay autoPlaySpeed={6500} className="carousel-modal">
          <p className="carousel-text">
            Você sabia que  no Brasil, por ano,  são descartadas xxx 
            toneladas de resíduos de construção civil irregularmente no 
            meio ambiente? 
          </p>
          <p className="carousel-text">
            80% dos focos irregualres em Porto Alegre são compostos 
            de resíduos da construção civil
          </p>
          <p className="carousel-text">
            50% dos serviços de tele-entulho atuam na irregularidade
          </p>
        </Carousel>
      </div>
      <p className="eptc-taxes">* Sujeito às taxas de área azul - EPTC, não incluso no valor.</p>
      <button className="btn-cancel" onClick={handlecloseWindow} >Cancelar Orçamento</button>
      <button className="btn-cancel-mobile" onClick={handlecloseWindow}>Cancelar <FontAwesomeIcon icon={faTimesCircle} /></button>
      <button className="btn-approve">Aprovar e Agendar</button>
      <button className="btn-approve-mobile">Confirmar <FontAwesomeIcon icon={faCheckCircle} /></button>
    </div>    
  )
}
export default ModalConfirmation;