import React from 'react';
import './ModalAcceptanceStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function ModalAcceptance ({ display, onClick }) {
  // #TODO: refatorar o onclick para close ao invés de reload
  function handlecloseWindow() { window.location.reload() };

  return display ? (
    <div className="acceptance-content">
      <button className="acceptance-close-btn"><FontAwesomeIcon icon={faTimes} onClick={handlecloseWindow} /></button>
      <h3 className="acceptance-title">
        Agradecemos <br className="breakTitle" />por escolher a 5MARIAS!
      </h3>
      <p className="acceptance-text">
        Os detalhes da sua solicitação <br className="breakLine" /> foram enviadas 
        através do email.
      </p>
    </div>
  ) : null
}

export default ModalAcceptance;