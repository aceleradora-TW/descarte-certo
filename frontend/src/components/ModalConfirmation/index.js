import React from 'react';
import Carousel from 'react-elastic-carousel'
import './ModalConfirmationStyle.css'

function ModalConfirmation () {
  return (
    <div className="modalContainer">
      <h3 className="totalBudget">Seu orçamento: <span>R$250,00</span><span>(Gesso)</span>*</h3>
      <p className="message">Utilizando o serviço da 5 Marias, você garante o descarte correto do seu resíduo.</p>
      <div className="div-car">
        <Carousel enableAutoPlay autoPlaySpeed={6500} className="carouselModal">
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
      <p className="eptcTaxes">* Sujeito às taxas de área azul - EPTC, não incluso no valor.</p>
      <button className="btnCancel">Cancelar Orçamento</button>
      <button className="btnApprove">Aprovar e Agendar</button>
    </div>    
  )
}
export default ModalConfirmation;