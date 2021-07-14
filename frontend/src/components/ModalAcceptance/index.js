import React from "react";
import "./ModalAcceptanceStyle.css";

const ModalAcceptance = ({ display}) => {
  // #TODO: refatorar o onclick para close ao invés de reload
  const handlecloseWindow = () => {
    window.location.reload();
  }

  return display ? (
    <div className="acceptance-content">      
      <h3 className="acceptance-title">
        Agradecemos <br className="break-title" />
        por escolher a 5MARIAS!
      </h3>
      <p className="acceptance-text">
        Os detalhes da sua solicitação <br className="break-line" /> foram
        enviadas através <br className="break-mobile" />
        do email.
      </p>
    </div>
  ) : null;
}

export default ModalAcceptance;