import React from "react";
import Carousel from "react-elastic-carousel";
import "./ModalConfirmationStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import iconDidYouKnow from "../images/iconDidYouKnow.png";

function ModalConfirmation({ display, onClick, estimateValue, material }) {
  // #TODO: refatorar o onclick para ser close e não reload
  function handlecloseWindow() {
    window.location.reload();
  }

  return display ? (
    <div className="modal-container">
      <h3 className="total-budget">
        Seu orçamento: R${estimateValue} - {material}*
      </h3>
      <p className="message">
        Utilizando o serviço da 5Marias, você garante o descarte correto do seu
        resíduo.
      </p>
      <div className="image-slide">
        <img
          src={iconDidYouKnow}
          alt="ícone de lâmpada acesa - você sabia?"
          className="img-did-you-know"
        />
      </div>
      <div className="div-car">
        <Carousel
          enableAutoPlay
          autoPlaySpeed={6500}
          className="carousel-modal"
        >
          <p className="carousel-text">
            Você sabia que no Brasil, por ano, são descartadas toneladas de
            resíduos de construção civil irregularmente no meio ambiente?
          </p>
          <p className="carousel-text">
            80% dos focos irregulares em Porto Alegre são compostos de resíduos
            da construção civil.
          </p>
          <p className="carousel-text">
            50% dos serviços de tele-entulho atuam na irregularidade.
          </p>
        </Carousel>
      </div>
      <p className="eptc-taxes">
        * Sujeito às taxas de área azul - EPTC, não incluso no valor.
      </p>
      <button className="btn-cancel" onClick={handlecloseWindow}>
        Cancelar Orçamento
      </button>
      <button className="btn-cancel-mobile" onClick={handlecloseWindow}>
        Cancelar <FontAwesomeIcon icon={faTimesCircle} />
      </button>
      <button className="btn-approve" name="finishOrder" onClick={onClick}>
        Solicitar Agendamento
      </button>
      <button className="btn-approve-mobile">
        Solicitar<FontAwesomeIcon className= "fontawesome" icon={faCheckCircle} />
      </button>
    </div>
  ) : null;
}
export default ModalConfirmation;
