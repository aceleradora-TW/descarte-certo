import React from "react";
import "./ModalAcceptanceStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalAcceptance = ({ display, onClick }) => {
  // #TODO: refatorar o onclick para close ao invés de reload
  const handlecloseWindow = () => {
    window.location.reload();
  }

  return display ? (
    <div className="acceptance-content">
      <button className="acceptance-close-btn">
        <FontAwesomeIcon icon={faTimes} onClick={handlecloseWindow} />
      </button>
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
