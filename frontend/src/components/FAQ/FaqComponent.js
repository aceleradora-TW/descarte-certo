import React from 'react'
import { Accordion, Card, Button } from "react-bootstrap";
import Icone from '../images/icon-faq-novo.png'
import imgFaq from '../images/img-faq.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Texts from './texts.json'
import { string } from 'prop-types';
import './FaqResponsive.css'
import './FaqStyle.css'

function FaqComponent() {
    return (
        
        <div className="div col-6">
            <h1 id="Duvidas" className="duvidas">{Texts.duvidas.title}</h1>
            <Accordion >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="0">
                            {Texts.card1.title} <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="0">
                                <Card.Body classname="body-faq">{Texts.card1.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="1">
                            {Texts.card2.title} <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="1">
                                <Card.Body classname="body-faq">{Texts.card2.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="2">
                            {Texts.card3.title}  <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="2">
                                <Card.Body classname="body-faq">{Texts.card3.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="3">
                            {Texts.card4.title}  <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="3">
                                <Card.Body classname="body-faq">{Texts.card4.content}</Card.Body>
                            </Accordion.Collapse>   </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="4">
                            {Texts.card5.title}  <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="4">
                                <Card.Body classname="body-faq">{Texts.card5.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="5">
                            {Texts.card6.title}  <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="5">
                                <Card.Body classname="body-faq">{Texts.card6.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="6">
                            {Texts.card7.title}  <img src={Icone} className="iconFaq" />
                            <Accordion.Collapse eventKey="6">
                                <Card.Body classname="body-faq">{Texts.card7.content}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion.Toggle>
                    </Card.Header>
                </Card>
            </Accordion>
            
            <img src={imgFaq} className="imgFaq" />
        </div >
    )
}
export default FaqComponent
