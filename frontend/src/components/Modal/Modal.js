import React from "react";
import {
  Button,
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  FormGroup,
  Label,
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ModalStyle.css";
import { ERRORS } from "../../constant";
import * as yup from "yup";

function Modal(props) {
  const validationSchema = yup.object().shape({
    email: yup.string().email('e-mail inválido').required(ERRORS.REQUIRED_FIELD),
    nomeCompleto: yup.string().required(ERRORS.REQUIRED_FIELD),
    cep: yup.string().required(ERRORS.REQUIRED_FIELD),
    telefoneCelular: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const initialValues = {
    nomeCompleto: "",
    email: "",
    telefoneCelular: "",
    cep: "",
    cheked: "",
    
  };
  let fieldText = false;

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };



const showingField = () =>{
 if (fieldText === true){
    return ( <Field 
      type="text"
      name="descreva"
      placeholder="Descreva..."
      className="form-control"
  /> ) }else{
    return null;
  }
}

 function fieldTextTrue() {
    fieldText = true
    console.log(fieldText)
  };
 

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
                name="nomeCompleto"
                placeholder="Nome Completo"
                onChange={handleChange}
                value={values.nomeCompleto}
                onBlur={handleBlur}
                required/>
              <ErrorMessage component="div" name="nomeCompleto" />
              <br />
              <Field
                className="form-control field-input"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="E-mail"
                required/>
              <ErrorMessage component="div" name="email" />
              <br />
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <Field
                      className="form-control field-input"
                      name="telefoneCelular"
                      value={values.telefoneCelular}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Telefone Celular"
                      required/>
                    <ErrorMessage component="div" name="telefoneCelular" />
                  </FormGroup>
                </Col>

                <Col lg="6">
                  <FormGroup>
                    <Field
                      className="form-control field-input"
                      name="cep"
                      value={values.cep}
                      onChange={handleChange}
                      placeholder="CEP"
                      required/>
                    <ErrorMessage component="div" name="cep" />
                  </FormGroup>
                </Col>

              </Row>
              <div><p>O local de coleta de residuo possui:</p></div>
              <Row>
                <Col lg="4">
                  <FormGroup>
                   <Label>
                    <Field type="checkbox"
                      className=""
                      name="checked"
                      value="Escada"
                      />
                      Escada
                      </Label>
                    
                     
                  </FormGroup>
                </Col>

                <Col lg="4">
                  <FormGroup>
                   <Label>
                    <Field type="checkbox"
                      className=""
                      name="checked"
                      value="Elevador"
                      />
                      Elevador
                      </Label>
                  </FormGroup>
                </Col>

                <Col lg="4">
                  <FormGroup>
                   <Label>
                    <Field type="checkbox"
                      className=""
                      name="checked"
                      value="Outro"
                      onClick={fieldTextTrue}
                      />
                      Outro de difícil acesso:
                      </Label>
                  </FormGroup>
                </Col>

              </Row>
              <Row>
                <Col lg="4" width="100%">
                 <Field 
                      type="number"
                      placeholder="Informe o andar:"
                      value= ''
                      className="form-control"
                      />
                      
                  </Col>

                   <Col lg="6">
                      {showingField()}
                  </Col>
              </Row>

              <Button
                className="button"
                disabled={!isValid || isSubmitting}
                block
                color="secondary"
                onClick={props.handleBudgetClick}>
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
