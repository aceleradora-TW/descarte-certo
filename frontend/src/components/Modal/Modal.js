import React from "react";
import { Modal as BootstrapModal, ModalHeader, ModalBody } from "reactstrap";
import "./ModalStyle.css";
import OrderForm from "./OrderForm";

const Modal = (props) => {
  const handlecloseWindow = () => {
    window.location.reload();
  };

  return (
    <BootstrapModal
      border="light"
      isOpen={props.isModalVisible}
      toggle={props.handleBudgetClick}
    >
      <ModalHeader toggle={handlecloseWindow}>
        Solicite seu Orçamento
      </ModalHeader>

      <ModalBody>
        <OrderForm {...props} />
      </ModalBody>
    </BootstrapModal>
  );
};
export default Modal;
