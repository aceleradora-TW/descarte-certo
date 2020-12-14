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
import App from "../../App"
import { ModalDialog } from "react-bootstrap";
import { func } from "prop-types";


function Modal(props) {
    const validationSchema = yup.object().shape({
        email: yup.string().email('e-mail inválido').required(ERRORS.REQUIRED_FIELD),
        fullName: yup.string().required(ERRORS.REQUIRED_FIELD),
        cep: yup.string().required(ERRORS.REQUIRED_FIELD),
        cellphone: yup.string().required(ERRORS.REQUIRED_FIELD),
        localDescription: yup.string(),
        residueDescription: yup.string(),
        checked4: yup.string().required(ERRORS.REQUIRED_FIELD),

    });

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    function handleAlertClick (){ setIsAlertVisible(!isAlertVisible)};
    function handlecloseWindow (){window.location.reload()};
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const handleSubmitSuccess = (success) => setSubmitSuccess(success);



    const initialValues = {
        fullName: "",
        email: "",
        cellphone: "",
        cep: "",
        checked1: "",
        checked2: "",
        checked3: "",
        checked4: "",
        andar: "",
        locationInfo: "",
        localDescription: "",
        residueType: "",
        residueAmount: "",
        residueDescription: "",
        residueMeasure: "",
        residueInfo: ""

    };
    let fieldText = false;
    let fieldTextResidue = false;
    let fieldTextFloor = false;
    let fieldTextQuantity = false;

    const onSubmit = (values, { setSubmitting, resetForm }) => {

        const requestCreateEstimate = {
            requester: {
                fullName: values.fullName,
                email: values.email,
                cellphone: values.cellphone,
            },

            residueAddress: {
                cep: values.cep,
                locationInfo: values.checked1 + " Andar: " + values.andar + "  " + values.checked2 + "  " + values.localDescription,
            },

            residueRequest: {
                residueType: values.residueType + values.residueDescription,
                residueMeasure: values.residueAmount + values.residueMeasure,
            }
        }
        setTimeout(() => {
            console.log("Requesting to backend /estimate")
            Axios.post(`/estimate`,
                requestCreateEstimate
            ).then(function (response) {
                console.log(JSON.stringify(values));
                handleSubmitSuccess(true);
                setSubmitting(false);
            }).catch(function (error) {
                console.error(error)
                handleSubmitSuccess(false);
                resetForm();
            }).then(function () {
                handleAlertClick();
            });
        }, 400);
    };

    const showingField = (values) => {
        if (fieldText === true) {
            return (
                <div><Field
                    maxLength="200"
                    type="text"
                    name="localDescription"
                    value={values.localDescription}
                    placeholder="Descreva..."
                    className="form-control field-input"
                />
                    <ErrorMessage component="div" name="localDescription" />
                </div>)
        } else { return null; }
    };
    function fieldTextTrue() {
        fieldText === true ? fieldText = false : fieldText = true

    };
    const showingFieldFloor = (values) => {
        if (fieldTextFloor === true) {
            return (
                <div><Field
                    min="1"
                    max="4"
                    type="Number"
                    name="andar"
                    value={values.andar}
                    placeholder="Informe o andar"
                    className="form-control field-input"
                />
                </div>)
        } else { return null; }
    };
    function fieldTextTrueFloor() {
        fieldTextFloor === true ? fieldTextFloor = false : fieldTextFloor = true

    };


    const showingFieldResidue = (values) => {
        if (fieldTextResidue === true) {
            return (
                <Row className="quant"><Field
                    maxLength="200"
                    type="text"
                    name="residueDescription"
                    value={values.residueDescription}
                    placeholder="Descreva..."
                    className="form-control field-input "
                />
                    <ErrorMessage component="div" name="residueDescription" />
                </Row>)
        } else { return null; }
    };
    function fieldTextTrueResidue(value) {

        if (value === "Outro:") {
            fieldTextResidue = true
            fieldTextQuantity = true

        } else if (value !== "") {
            fieldTextQuantity = true

        } else {
            fieldTextResidue = false
        }


    };

    const showingFieldQuantity = (values, handleChange, handleBlur) => {
        if (fieldTextQuantity === true) {
            return (
                <div >

                    <Field
                        type="Number"
                        placeholder="1"
                        min="1"
                        max="500"
                        name="residueAmount"
                        value={values.residueAmount}
                        className="form-control field-input"
                    />
                    <ErrorMessage component="div" name="residueAmount" />

                </div>)
        } else { return null; }
            };
            const showingFieldQuantity2 = (values, handleChange, handleBlur) => {
                if (fieldTextQuantity === true) {
                    return (
                        <div >

                            <select
                                    className="select-residuo"
                                    name="residueMeasure"
                                    value={values.residueMeasure}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                    style={{ display: 'block' }}
                                    required
                                >
                                    <option label="Medida:" />
                                    <option value="Sacos de 50L" label="Sacos de 50L" />
                                    <option value="Kg" label="Kg" />
                                    <option value="m³" label="m³" />
                                    <option value="bags" label="bags" />
                                    <option value="caçambas" label="caçambas" />
                            </select> <ErrorMessage component="div" name="residueMeasure" />

                        </div>)
                } else { return null; }
                    };



    return (
        <BootstrapModal
            border="light"
            isOpen={props.isModalVisible}
            toggle={props.handleBudgetClick}>
            <ModalHeader toggle={handlecloseWindow}>
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
                                    onBlur={handleBlur}
                                    />
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
                                    <Col className="col-sm-7">
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

                                    <Col className="col-sm-2 residue-quantity">
                                        {showingFieldQuantity(values, handleChange, handleBlur)}
                                    </Col>
                                    <Col className="col-sm-3 .residue-measure">
                                        {showingFieldQuantity2(values, handleChange, handleBlur)}
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


                                <div><p>Informe se o local de coleta possui (múltiplas opções possíveis):</p></div>
                                <Row>
                                    <Col lg="3">
                                        <FormGroup>

                                            <Label >

                                                <Field type="checkbox"
                                                    className=""
                                                    name="checked1"
                                                    value="Escada"
                                                    onClick={fieldTextTrueFloor}
                                                />
                                                <a> Escada</a>

                                            </Label>
                                            <div>
                                                {showingFieldFloor(values)}
                                            </div>

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

                                <Row>
                                    <Col lg="12">
                                        <FormGroup>
                                            <Label>
                                                <Field type="checkbox"
                                                    className=""
                                                    name="checked4"
                                                    value="Termos"
                                                />
                                                <a> Li e concordo com os </a> <a target="_blank" href="https://drive.google.com/file/d/1Wty-Il4oz36PuOWGeX35BWPTmGREShlE/view?usp=sharing">Termos de Uso</a>, <a target="_blank" href="https://drive.google.com/file/d/1bBGVCMWoQ7vtBpjMF1YWljt6p1GYY5E5/view?usp=sharing">Política de Privacidade</a> e as <a target="_blank" href="https://drive.google.com/file/d/11Ao8wyvIDL1Yjus_Y8sZcaB-7Exau1wm/view?usp=sharing">Normas e nomenclatura geral sobre LGPD</a>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                </Row>

                                <Button
                                    className="form-button"
                                    disabled={!isValid || isSubmitting}
                                    block
                                    color="secondary"
                                    type="submit"
                                    onClick={FormGroup.disabled} >
                                    Solicitar
                            </Button>
                                <Alert color={submitSuccess ? "success" : "danger"} isOpen={isAlertVisible} >
                                    {
                                        submitSuccess ? "Sua solicitação foi enviada! Obrigada!" + values.locationInfo :
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
