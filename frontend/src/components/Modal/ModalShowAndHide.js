import React, { useState } from "react";
import ModalAcceptance from "../ModalAcceptance";
import ModalConfirmation from "../ModalConfirmation";
import Form from "./OrderForm";

const OrderForm = ({ display, onClick, setEstimateValue, setMaterial }) => {
  return display ? (
    <div className="form-inputs-style">
      <Form 
        nextStep={onClick} 
        setEstimateValue={setEstimateValue} 
        setMaterial={setMaterial}
      />
    </div>
  ) : null;
};

const ModalShowAndHide = () => {
  const initialState = {
    orderForm: true,
    confirmOrder: false,
    finishOrder: false,
  };

  const [contentControler, setContentControler] = useState(initialState);
  const [estimateValue, setEstimateValue] = useState(0);
  const [material, setMaterial] = useState('');

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
      <OrderForm 
        display={orderForm} 
        onClick={controlDisplayContent}
        setEstimateValue={setEstimateValue}
        setMaterial={setMaterial} 
      />
      <ModalConfirmation
        estimateValue={estimateValue}
        material={material}
        display={confirmOrder}
        onClick={controlDisplayContent}
      />
      <ModalAcceptance display={finishOrder} />
    </div>
  );
};

export default ModalShowAndHide;
