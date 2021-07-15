import React, { useState } from "react";
import ModalAcceptance from "../ModalAcceptance";
import ModalConfirmation from "../ModalConfirmation";
import Form from "./OrderForm";
import { put } from "../../services/client";

const OrderForm = ({ display, onClick, setEstimateValue, setMaterial, setID }) => {
  return display ? (
    <div className="form-inputs-style">
      <Form 
        nextStep={onClick} 
        setEstimateValue={setEstimateValue} 
        setMaterial={setMaterial}
        setID={setID}
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
  const [id, setID] = useState(null);

  const controlDisplayContent = (e) => {
    const { name } = e.target;
    if(name === "finishOrder"){
      put(`/estimate/${id}/confirm`)
    }
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
        setID={setID} 
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
