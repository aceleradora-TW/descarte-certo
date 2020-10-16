import React from 'react';
import { Button, Modal as BootstrapModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";

function Modal(props) {
    return <BootstrapModal isOpen={props.isModalVisible} toggle={props.handleBudgetClick}>
    <ModalHeader toggle={props.handleBudgetClick}>Solicitação Orçamento</ModalHeader>
    <ModalBody>
      <Formik
        initialValues={{ nomeCompleto: "", telefoneCelular: "", email: "", cep: "" }}
        validate={values => {
          const errors = {};
          if (!values.nomeCompleto,!values.telefoneCelular,!values.email,!values.cep) {
            errors.nomeCompleto = "Required";
            errors.telefoneCelular = "Required";
            errors.email = "Required";
            errors.cep = "Required";
          } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label>Nome Completo:</label>
            <Field type="text" name="nomeCompleto" />
            <ErrorMessage name="nomeCompleto" component="div" />
            <br />
            <label>Telefone Celular:</label>
            <Field type="text" name="telefoneCelular" />
            <ErrorMessage name="telefoneCelular" component="div" />
            <br />
            <label>E-mail:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <label>CEP:</label>
            <Field type="text" name="cep" />
            <ErrorMessage name="cep" component="div" />
            <br />
          </Form>
        )}
      </Formik>
      </ModalBody>
      <ModalFooter>
      <Button color="secondary" onClick={props.handleBudgetClick}>Solicitar</Button>
    </ModalFooter>
   </BootstrapModal>

}

export default Modal;