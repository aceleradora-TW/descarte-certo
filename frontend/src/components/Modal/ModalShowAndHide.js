import React, {useState} from 'react';
import ModalAcceptance from '../ModalAcceptance';
import ModalConfirmation from '../ModalConfirmation';

/*const OrderForm = ({ display, onClick }) => {
  return display ? (
    <div className="order-form">
      <p>formulario de orçamentos</p>
      <input onClick={onClick} type="button" name="confirmOrder" value="Enviar" />
    </div>
  ) : null
  */
//Modal confirmation/confirm order
const ModalConfirmation2 = ({ display, onClick }) => {
  return display ? (
    <div className="modal-container">
      <input onClick={onClick} type="button" name="btn-approve" value="Aprovar e Agendar" />
    </div>) : null
}
//Modal acceptance/finish order
const ModalAcceptance2 = ({ display }) => {
  return display ? (
    <div className="acceptance-content">
    </div>
  ) : null
}

const ModalShowAndHide = () => {

  const initialState = {
  /*orderForm:  true,*/
    ModalConfirmation: true,
    ModalAcceptance: false
  }

  const [contentControler, setContentControler] = useState(initialState)
 
  const controlDisplayContent = (e) => {
    const { name } = e.target
    setContentControler({ ModalConfirmation: true, ModalAcceptance: false })/*TODO: acrescentar orderForm: false,*/
    setContentControler({ [name]: true })
  }

  const { confirmOrder, finishOrder } = contentControler 

  return (
    <div className="content-modal">
      {/*TODO: acrescentar  <OrderForm display={orderForm} onClick={controlDisplayContent} />*/}
      <ModalConfirmation display={ModalConfirmation} onClick={controlDisplayContent} />
      <ModalAcceptance display={ModalAcceptance} />
    </div>
  )
}

export default ModalShowAndHide