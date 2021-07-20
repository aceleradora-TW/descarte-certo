import React, { useState } from "react";
import { post } from "../../services/client";
import { Button, Row, Col, FormGroup, Label, Alert } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ERRORS } from "../../constant";
import InputMask from "react-input-mask";
import * as yup from "yup";
import {adapterZone, adapterType, adapterMaterial, adapterAccess, adapterReducedMaterial} from './adapters'

const OrderForm = (props) => {
  let accessTypeValidation;
  if (props.residueMeasure === "Sacos") {
    accessTypeValidation = yup.string().required(ERRORS.REQUIRED_FIELD);
  } else {
    accessTypeValidation = yup.string();
  }

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("e-mail inválido")
      .required(ERRORS.REQUIRED_FIELD),
    fullName: yup.string().required(ERRORS.REQUIRED_FIELD),
    region: yup.string().required(ERRORS.REQUIRED_FIELD),
    cellphone: yup.string().required(ERRORS.REQUIRED_FIELD),
    localDescription: yup.string(),
    checkedTerms: yup.string().required(ERRORS.REQUIRED_FIELD),
    residueMeasure: yup.string().required(ERRORS.REQUIRED_FIELD),
    accessType: accessTypeValidation,
    residueAmount: yup.number().required(ERRORS.REQUIRED_FIELD),
    residueType: yup.string().required(ERRORS.REQUIRED_FIELD),
  });

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleAlertClick = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitSuccess = (success) => setSubmitSuccess(success);

  const initialValues = {
    fullName: "",
    email: "",
    cellphone: "",
    region: "",
    radio: "",
    checkedTerms: "",
    andar: "",
    locationInfo: "",
    localDescription: "",
    residueType: "",
    residueAmount: "",
    residueMeasure: "",
    accessType: "",
  };

  let fieldText = false;
  let fieldTextFloor = false;
  let radioMeasure = true;

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (values.accessType === "Escada") {
      values.accessType += " Andar ";
    }

    const requestCreateEstimate = {
      requester: {
        fullName: values.fullName,
        email: values.email,
        cellphone: values.cellphone,
      },
      residueAddress: {
        region: values.region,
        locationInfo:
          values.accessType + values.localDescription + values.andar,
      },
      residueRequest: {
        residueType: values.residueType,
        residueMeasure: values.residueAmount + " " + values.residueMeasure,
      },
      calculate: {

        amount: values.residueAmount,
        zones: adapterZone(values.region),
        type: adapterType(values.residueMeasure),
        material: adapterMaterial(values.residueType),
        access: adapterAccess(values.accessType)
      }
    };

    props.setMaterial(adapterReducedMaterial(values.residueType))
    props.setLoading(true)
    props.hideAll()

    post(`/estimate`, requestCreateEstimate)
      .then(function (response) {
        handleSubmitSuccess(true);
        setSubmitting(false);
        props.setEstimateValue(response.estimateValue);
        props.setID(response.id);
        props.setLoading(false);
        props.nextStep({ target: { name: "confirmOrder" } });
      })
      .catch((_error) => {
        handleSubmitSuccess(false);
        resetForm();
      })
      .then(() => {
        handleAlertClick();
      });
  };

  const showingField = (values) => {
    if (fieldText === true) {
      return (
        <div>
          <Field
            maxLength="200"
            type="text"
            name="localDescription"
            value={values.localDescription}
            placeholder="Descreva..."
            className="form-control field-input"
          />
          <ErrorMessage component="div" name="localDescription" />
        </div>
      );
    } else {
      return null;
    }
  };

  const showingFieldFloor = (values) => {
    if (fieldTextFloor === true) {
      return (
        <div>
          <Field
            min="1"
            max="4"
            type="Number"
            name="andar"
            value={values.andar}
            placeholder="Informe o andar"
            className="form-control field-input"
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const radioTrueMeasure = (value) => {
    if (value === "Sacos") {
      radioMeasure = true;
    } else {
      fieldTextFloor = false;
      radioMeasure = false;
      fieldText = false;
    }
  };

  const fieldTextTrueFloor = (value) => {
    if (value === "Escada") {
      fieldTextFloor = true;
      fieldText = false;
    } else if (value === "Outro") {
      fieldTextFloor = false;
      fieldText = true;
    } else {
      fieldText = false;
      fieldTextFloor = false;
    }
  };

  const showingFieldAccessType = (values, handleChange, handleBlur) => {
    if (radioMeasure === true) {
      return (
        <div>
          <select
            className="select-residuo"
            name="accessType"
            value={values.accessType}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: "block" }}
            onClick={fieldTextTrueFloor(values.accessType)}
            required
          >
            <option label="Acesso:" />
            <option value="Escada" label="Escada" />
            <option value="Elevador" label="Elevador" />
            <option value="Terreo" label="Terreo" />
            <option value="Outro" label="Outro de difícil" />
          </select>{" "}
          <ErrorMessage component="div" name="accessType" />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, isSubmitting, isValid }) => (
        <Form className="form-inputs-style">
          <Field
            name="fullName"
            required
            className="form-control field-input"
            placeholder="Nome Completo"
            onChange={handleChange}
            value={values.fullName}
            onBlur={handleBlur}
          />

          <ErrorMessage className="error" component="div" name="fullName" />

          <br />

          <Row>
            <Col className="col-sm-4">
              <FormGroup>
                <Field name="cellphone" required>
                  {({ field }) => {
                    return (
                      <InputMask
                        mask="(99) 99999-9999"
                        className="form-control field-input"
                        placeholder="(51) 90000-0000"
                        value={values.cellphone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...field}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  className="error"
                  component="div"
                  name="cellphone"
                />
              </FormGroup>
            </Col>
            <Col className="col-sm-8">
              <FormGroup>
                <Field
                  className="form-control field-input"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="email@email.com"
                  required
                />
                <ErrorMessage className="error" component="div" name="email" />
              </FormGroup>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <h4>Tipo de Coleta: </h4>
            </Col>
            <Col>
              <h4>Quantidade: </h4>
            </Col>
          </Row>

          <Row>
            <Col lg="2">
              <FormGroup>
                <Label className="bucket">
                  <Field
                    type="radio"
                    className=""
                    name="residueMeasure"
                    value="Caçambas"
                    onClick={radioTrueMeasure(values.residueMeasure)}
                  />
                  Caçamba
                </Label>
              </FormGroup>

              <FormGroup>
                <Label className="bags">
                  <Field
                    type="radio"
                    className=""
                    name="residueMeasure"
                    value="Sacos"
                    onClick={radioTrueMeasure(values.residueMeasure)}
                  />
                  Sacos (Padrão 50 Litros)
                </Label>
              </FormGroup>
            </Col>

            <Col className="col-lg-3">
              <Field
                type="Number"
                placeholder="0"
                min="1"
                max="500"
                name="residueAmount"
                value={values.residueAmount}
                className="form-control field-input"
                id="quantity"
              />
              <ErrorMessage
                className="error"
                component="div"
                name="residueAmount"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="col-sm-6">
              <select
                className="select-residuo"
                name="residueType"
                value={values.residueType}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
                required
              >
                <option label="Tipo de resíduo:" disabled />
                <option value="Somente Caliça" label="Somente Caliça" />
                <option value="Somento Gesso" label="Somente Gesso" />
                <option value="Somente Madeira" label="Somente Madeira" />
                <option
                  value="Mix"
                  label="Resíduos Misturados (Mistura de resíduos de obra)"
                />
              </select>{" "}
              <ErrorMessage
                className="error"
                component="div"
                name="residueType"
              />
            </Col>
            <Col className="col-sm-5">
              <select
                className="select-residuo"
                name="region"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ display: "block" }}
                required
              >
                <option label="Região:" disabled />
                <option
                  value="Porto Alegre - Centro"
                  label="Porto Alegre - Centro"
                />
                <option value="Porto Alegre - Sul" label="Porto Alegre - Sul" />
                <option
                  value="Porto Alegre - Norte"
                  label="Porto Alegre - Norte"
                />
                <option
                  value="Porto Alegre - Leste"
                  label="Porto Alegre - Leste"
                />
              </select>{" "}
              <ErrorMessage className="error" component="div" name="region" />
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-6" id="accessType">
              {showingFieldAccessType(values, handleChange, handleBlur)}
            </Col>
            <Col className="col-sm-5 informacao-andar">
              {showingFieldFloor(values, handleChange, handleBlur)}
              {showingField(values, handleChange, handleBlur)}
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <FormGroup>
                <Label>
                  <Field
                    type="radio"
                    className=""
                    name="checkedTerms"
                    value="Termos"
                  />
                  Li e concordo com os
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1Wty-Il4oz36PuOWGeX35BWPTmGREShlE/view?usp=sharing"
                  >
                    {" "}
                    Termos de Uso
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1bBGVCMWoQ7vtBpjMF1YWljt6p1GYY5E5/view?usp=sharing"
                  >
                    Política de Privacidade
                  </a>{" "}
                  e as{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/11Ao8wyvIDL1Yjus_Y8sZcaB-7Exau1wm/view?usp=sharing"
                  >
                    Normas e nomenclatura geral sobre LGPD
                  </a>
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
            onClick={FormGroup.disabled}
          >
            Ver Orçamento
          </Button>
          <Alert
            color={submitSuccess ? "success" : "danger"}
            isOpen={isAlertVisible}
          >
            {submitSuccess
              ? "Sua solicitação foi enviada! Obrigada!" + values.locationInfo
              : "Ops! Tivemos um problema. Tente novamente mais tarde. " +
                values.locationInfo}
          </Alert>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;

/* #TODO: remover mensagens não utilizadas do submitSucces */
