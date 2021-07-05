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
const ModalAcceptance2 = ({ display, onClick }) => {
  return display ? (
    <div className="acceptance-content">
      <input onClick={onclick} type="button" className="acceptance-close-btn"/>
    </div>
  ) : null
}

const ModalShowAndHide = () => {

  const initialState = {
  /*orderForm:  true,*/
    confirmOrder: true,
    finishOrder: false
  }

  const [contentControler, setContentControler] = useState(initialState)
 
  const controlDisplayContent = (e) => {
    
    const { name } = e.target
    console.log(name)
    setContentControler({ confirmOrder: false, finishOrder: false })/*TODO: acrescentar orderForm: false,*/
    setContentControler({ [name]: true })
  }

  const { confirmOrder, finishOrder } = contentControler

  return (
    <div className="content-modal">
      {/*TODO: acrescentar  <OrderForm display={orderForm} onClick={controlDisplayContent} />*/}
      <ModalConfirmation display={confirmOrder} onClick={controlDisplayContent} />
      <ModalAcceptance display={finishOrder} />
    </div>
  )
}

export default ModalShowAndHide


/* ========
#TODO: puxar a modal nº 1
#TODO: refatorar nomes
*/