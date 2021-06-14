import React from 'react';
import Carousel from 'react-elastic-carousel'

function ModalConfirmation () {
  return (
    <div>
      <h3>Seu orçamento: <span>R$250,00</span><span>(Gesso)</span>*</h3>
      <p>Utilizando o serviço da 5 Marias, você garante o descarte correto do seu resíduo.</p>
      <Carousel enableAutoPlay autoPlaySpeed={3500}>
        <p>
          Você sabia que  no Brasil, por ano,  são descartadas xxx 
          toneladas de resíduos de construção civil irregularmente no 
          meio ambiente? 
        </p>
        <p>
          80% dos focos irregualres em Porto Alegre são compostos 
          de resíduos da construção civil
        </p>
        <p>
          50% dos serviços de tele-entulho atuam na irregularidade
        </p>
      </Carousel>
      <p>* Sujeito às taxas de área azul - EPTC, não incluso no valor.</p>
      <button>Cancelar Orçamento</button>
      <button>Aprovar e Agendar</button>
    </div>    
  )
}
export default ModalConfirmation;