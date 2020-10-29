import React from "react";
import {
  Button,
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ModalStyle.css";
import { ERRORS } from "../../constant";
import InputMask from "react-input-mask";
import * as yup from "yup";


function Modal(props) {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(ERRORS.REQUIRED_FIELD),
    nameCompleted: yup.string().required(ERRORS.REQUIRED_FIELD),
    cep: yup.string().required(ERRORS.REQUIRED_FIELD),
    cellphone: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const initialValues = {
    nameCompleted: "",
    email: "",
    cellphone: "",
    cep: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  console.log(initialValues);

  return (
    <BootstrapModal
      border="light"
      isOpen={props.isModalVisible}
      toggle={props.handleBudgetClick}
    >
      <ModalHeader toggle={props.handleBudgetClick}>
        Solicite seu Orçamento
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            isSubmitting,
            isValid,
          }) => (
              <Form className="form-inputs-style">
                <Field
                  className="form-control field-input"
                  name="nameCompleted"
                  placeholder="Nome Completo"
                  onChange={handleChange}
                  value={values.nameCompleted}
                  onBlur={handleBlur}
                  required />
                <ErrorMessage component="div" name="nameCompleted" />
                <br />
                <Field
                  className="form-control field-input"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="E-mail"
                  required />
                <ErrorMessage component="div" name="email" />
                <br />
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <Field name="cellphone" required>
                        {({ field }) => {
                          return <InputMask mask="99999-9999"
                            className="form-control field-input"
                            placeholder="Telefone Celular"
                            value={values.cellphone}
                            onChange={handleChange}
                            onBlur={handleBlur}{...field} />
                        }}
                      </Field>
                      <ErrorMessage component="div" name="cellphone" />
                    </FormGroup>
                  </Col>

                  <Col lg="6">
                    <FormGroup>
                      <Field name="cep" required>
                        {({ field }) => {
                          return <InputMask mask="99999-999"
                            className="form-control field-input"
                            onChange={handleChange}
                            placeholder="CEP"
                          onBlur = { handleBlur }{...field} />
                      }}
                      </Field>
                      <ErrorMessage component="div" name="cep" />

                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  disabled={!isValid || isSubmitting}
                  block
                  color="secondary"
                  type="submit">
                  Solicitar
              </Button>
              </Form>
            )}
        </Formik>
      </ModalBody>
    </BootstrapModal>
  );
}

export default Modal;
