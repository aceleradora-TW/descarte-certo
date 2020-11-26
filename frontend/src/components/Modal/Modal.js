import React, { useState } from "react";
import {
    Button,
    Modal as BootstrapModal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    FormGroup,
    Alert
} from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ModalStyle.css";
import { ERRORS } from "../../constant";
import InputMask from "react-input-mask";
import * as yup from "yup";
import Axios from "axios";



function Modal(props) {
    const validationSchema = yup.object().shape({
        email: yup.string().email('e-mail inválido').required(ERRORS.REQUIRED_FIELD),
        fullName: yup.string().required(ERRORS.REQUIRED_FIELD),
        cep: yup.string().required(ERRORS.REQUIRED_FIELD),
        cellphone: yup.string().required(ERRORS.REQUIRED_FIELD),
        descreva: yup.string()
    });

    const [isAlertVisible, setIsAlertVisible] = useState(false);    
    const handleAlertClick = () => setIsAlertVisible(!isAlertVisible);
    
    const [submitSuccess, setSubmitSuccess] = useState(false);    
    const handleSubmitSuccess = (success) => setSubmitSuccess(success);

    const initialValues = {
        
        fullName: "",
        email: "",
        cellphone: "",
        cep: ""
    };

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        const requestCreateEstimate = {
            requester: {
                fullName: values.fullName,
                email: values.email,
                cellphone: values.cellphone,

            },
            residueAddress: {
                cep: values.cep,
                locationInfo: "location INFO mock"
            }            
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
                                    <Col lg="6">
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

                                    <Col lg="6">
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

                                        submitSuccess ? "Sua solicitação foi enviada! Obrigada!" :
                                                        "Ops! Tivemos um problema. Tente novamente mais tarde."
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
