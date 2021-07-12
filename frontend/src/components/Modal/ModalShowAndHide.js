import React, { useState } from "react";
import ModalAcceptance from "../ModalAcceptance";
import ModalConfirmation from "../ModalConfirmation";
import Form from "./OrderForm";

const OrderForm = ({ display, onClick }) => {
  return display ? (
    <div className="form-inputs-style">
      <Form nextStep={onClick} />
    </div>
  ) : null
  };
//Modal confirmation/confirm order
const ModalConfirmation2 = ({ display, onClick }) => {
  return display ? (
    <div className="modal-container">
      <input
        onClick={onClick}
        type="button"
        name="btn-approve"
        value="Aprovar e Agendar"
      />
    </div>
  ) : null;
};
//Modal acceptance/finish order
const ModalAcceptance2 = ({ display, onClick }) => {
  return display ? (
    <div className="acceptance-content">
      <input onClick={onClick} type="button" className="acceptance-close-btn" />
    </div>
  ) : null;
};

const ModalShowAndHide = () => {
  const initialState = {
    orderForm:  true,
    confirmOrder: false,
    finishOrder: false,
  };

  const [contentControler, setContentControler] = useState(initialState);

  const controlDisplayContent = (e) => {
    const { name } = e.target;
    console.log(name);
    setContentControler({
      orderForm: false,
      confirmOrder: false,
      finishOrder: false,
    }); 
    setContentControler({ [name]: true });
  };

  const { orderForm, confirmOrder, finishOrder } = contentControler;

  return (
    <div className="content-modal">
      <OrderForm display={orderForm} onClick={controlDisplayContent} />
      <ModalConfirmation display={confirmOrder} onClick={controlDisplayContent} />
      <ModalAcceptance display={finishOrder} />
    </div>
  );
};

export default ModalShowAndHide;
