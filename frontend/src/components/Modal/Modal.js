import React, { useState } from "react";
import {
    Button,
    Modal as BootstrapModal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    FormGroup,
    Label,
    Alert
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ModalStyle.css";
import { ERRORS } from "../../constant";
import InputMask from "react-input-mask";
import * as yup from "yup";
import Axios from "axios";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Modal(props) {
    const validationSchema = yup.object().shape({
        email: yup.string().email('e-mail inválido').required(ERRORS.REQUIRED_FIELD),
        fullName: yup.string().required(ERRORS.REQUIRED_FIELD),
        cep: yup.string().required(ERRORS.REQUIRED_FIELD),
        cellphone: yup.string().required(ERRORS.REQUIRED_FIELD),
        descreva: yup.string(),
        residueDescription:yup.string().required(ERRORS.REQUIRED_FIELD),
        
    });

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const handleAlertClick = () => setIsAlertVisible(!isAlertVisible);

    const [submitSuccess, setSubmitSuccess] = useState(false);
    const handleSubmitSuccess = (success) => setSubmitSuccess(success);
   
   

    const initialValues = {
        fullName: "",
        email: "",
        cellphone: "",
        cep: "",
        checked1: "",
        checked2:"",
        checked3:"",
        andar:"",
        locationInfo: "",
        descreva:"",
        residueType: "",
        residueQuantity:"",
        residueDescription:"",
        residueMeasure:"",
        residueInfo:""

    };
     let fieldText = false;
     let fieldTextResidue= false;


    const onSubmit = (values, { setSubmitting, resetForm }) => {
        const requestCreateEstimate = {
            requester: {
                fullName: values.fullName,
                email: values.email,
                cellphone: values.cellphone,
            },
            
            residueAddress: {
                cep: values.cep,
                locationInfo: values.checked1 +"  " + values.andar +"  " + values.checked2+"  "+ values.descreva,            }
        }

       setTimeout(() => {
                   Axios.post(`http://localhost:8080/estimate`,
                       requestCreateEstimate
                   ).then(function (response) {
                       console.log(JSON.stringify(values));
                       handleSubmitSuccess(true);
                       setSubmitting(false);
                   }).catch(function (error) {
                       handleSubmitSuccess(false);
                   }).then(function () {
                       handleAlertClick();
                   });

        }, 400);
    };

     const showingField = (values) =>{
         if (fieldText === true){
            return (
            <div><Field
              maxlength="200"
              type="text"
              name="descreva"
              value={values.descreva}
              placeholder="Descreva..."
              className="form-control field-input"
              />
              <ErrorMessage component="div" name="descreva" />
             </div> ) }else { return null;}
        };
    function fieldTextTrue() {
       fieldText === true ? fieldText = false : fieldText = true

      };

      const showingFieldResidue = (values) =>{
        if (fieldTextResidue === true){
           return (
           <Row className="quant"><Field
             maxlength="200"
             type="text"
             name="residueDescription"
             value={values.residueDescription}
             placeholder="Descreva..."
             className="form-control field-input"
             />
             <ErrorMessage component="div" name="residueDescription" />
            </Row> ) }else { return null;}
       };
       function fieldTextTrueResidue(value) {
        console.log(value)
    
        if (value === "Outro:"){
            fieldTextResidue = true
        }else {
            fieldTextResidue = false
        }
 
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
                                    name="fullName" required
                                    className="form-control field-input"
                                    placeholder="Nome Completo"
                                    onChange={handleChange}
                                    value={values.fullName}
                                    onBlur={handleBlur}/>
                                    <ErrorMessage component="div" name="fullName" />
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
                                    <Col >
                                        <FormGroup>
                                            <Field name="cellphone" required>
                                                {({ field }) => {
                                                    return <InputMask mask="(99) 99999-9999"
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
                                    </Row>
                                    <Row>
                                        <Col>
                                        Informe o tipo e a quantidade do resíduo.<br></br>
                                        Saiba que: 1m³ = 1 piscina de mil litros, 1 caçamba = 4m³, 1 bag = 1m³.
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-sm-8">
                                    <select
                                        className="select-residuo"
                                        name="residueType"
                                        value={values.residueType}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ display: 'block' }}
                                        onClick={fieldTextTrueResidue(values.residueType)}
                                        required
                                    >   
                                        <option label="Tipo de resíduo:" />
                                        <option value="Caliça ( cimentícios, cerâmicos, solo, areia)" label="Caliça ( cimentícios, cerâmicos, solo, areia)" />
                                        <option value="Gesso (acartonado, placas, drywall,...)" label="Gesso (acartonado, placas, drywall,...)" />
                                        <option value="Madeira com tinta" label="Madeira com tinta" />
                                        <option value="Madeira sem tinta" label="Madeira sem tinta" />
                                        <option value="Mix" label="Mix (resíduos de obra contendo outros em menor volume: recicláveis, madeiras, metais...)" />
                                        <option value="Outro:" label="Outro:" />
                                       
                                    </select> <ErrorMessage component="div" name="residueType" />
                                    </Col>
                                  
                                    <Col className="col-sm-1 residue-quantity">
                                    <Field
                                                      type="Number"
                                                      placeholder="1"
                                                      min="0"
                                                      max="4"
                                                      name="residueQuantity"
                                                      value={values.residueQuantity}
                                                      className="form-control field-input"
                                                      />
                                        <ErrorMessage component="div" name="quantity" />
                                        </Col>
                            
                                        <Col className="col-sm-3 residue-measure">
                                    <select
                                        className="select-residuo"
                                        name="residueMeasure"
                                        value=""
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ display: 'block' }}
                                        onClick={fieldTextTrueResidue(values.residueType)}
                                        required
                                    >   
                                        <option label="Medida:" />
                                        <option value="Sacos de 50L" label="Sacos de 50L" />
                                        <option value="Kg" label="Kg" />
                                        <option value="m³" label="m³" />
                                        <option value="bags" label="bags" />
                                        <option value="caçambas" label="caçambas" />
                                    
                                       
                                    </select> <ErrorMessage component="div" name="residueType" />
                                    </Col>
                                    </Row>
                                    <Col>
                                    {showingFieldResidue(values)}
                                    </Col>
                                    <Row>
                                    <Col >
                                        <FormGroup>
                                            <Field name="cep" required>
                                                {({ field }) => {
                                                    return <InputMask mask="99999-999"
                                                        className="form-control field-input"
                                                        onChange={handleChange}
                                                        placeholder="CEP"
                                                        onBlur={handleBlur}{...field} />
                                                }}
                                            </Field>
                                            <ErrorMessage component="div" name="cep" />

                                        </FormGroup>
                                    </Col>
                                    </Row>

                                
                                <div><p>O local de coleta de residuo possui:</p></div>
                                              <Row>
                                                <Col lg="3">
                                                  <FormGroup>

                                                   <Label >

                                                    <Field type="checkbox"
                                                      className=""
                                                      name="checked1"
                                                      value="Escada"
                                                      />
                                                      <a> Escada</a>

                                                      </Label>
                                                      <Field
                                                      type="Number"
                                                      placeholder="Informe o andar:"
                                                      min="0"
                                                      max="4"
                                                      name="andar"
                                                      value={values.andar}
                                                      className="form-control field-input"
                                                      />

                                                  </FormGroup>
                                                </Col>

                                                <Col lg="3">
                                                  <FormGroup>
                                                   <Label>
                                                    <Field type="checkbox"
                                                      className=""
                                                      name="checked2"
                                                      value="Elevador"
                                                      />
                                                      <a> Elevador</a>
                                                      </Label>
                                                  </FormGroup>
                                                </Col>

                                                <Col lg="6">
                                                  <FormGroup>
                                                   <Label>
                                                    <Field type="checkbox"
                                                      className=""
                                                      name="checked3"
                                                       value="Outro"
                                                      onClick={fieldTextTrue}


                                                      />
                                                      <a> Outro de difícil acesso:</a>
                                                      </Label>

                                                      <div>
                                                      {showingField(values)}
                                                      </div>
                                                  </FormGroup>
                                                </Col>

                                              </Row>

                                <Button
                                    className="form-button"
                                    disabled={!isValid || isSubmitting}
                                    block
                                    color="secondary"
                                    type="submit">

                                    Solicitar
                            </Button>
                            <Alert color={submitSuccess ? "success" : "danger"} isOpen={isAlertVisible} toggle={handleAlertClick}>
                                    {

                                        submitSuccess ? "Sua solicitação foi enviada! Obrigada!" + values.locationInfo:
                                                        "Ops! Tivemos um problema. Tente novamente mais tarde. " + values.locationInfo
                                    }
                            </Alert>

                            </Form>
                        )}
                </Formik>
            </ModalBody>
        </BootstrapModal>
    );
}

export default Modal;
