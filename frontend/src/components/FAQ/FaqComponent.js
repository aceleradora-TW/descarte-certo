import React, { useContext } from 'react'
import { Accordion, Card, Button, AccordionContext, } from "react-bootstrap";
import Icone from '../images/icon-faq-novo.png'
import imgFaq from '../images/img-faq.png'
import Texts from './texts.json'
import './FaqResponsive.css'
import './FaqStyle.css'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { Link } from 'react-router-dom';

function AccordionToggleButton({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);


    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    console.log({ currentEventKey, eventKey });
    return (
        <Button variant="link" onClick={decoratedOnClick}>
            {children} <img src={Icone} className={'iconFaq' + (isCurrentEventKey ? ' iconFaqActive' : '')} />
        </Button>
    );

}

function FaqComponent() {
    return (
        <div className="div col-6">
            <h1 id="Duvidas" className="duvidas">{Texts.duvidas.title}</h1>
            <Accordion >
                <Card className="card-faq">
                    <Card.Header>
                        <AccordionToggleButton eventKey="0">
                            {Texts.card1.title}
                        </AccordionToggleButton>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body classname="body-faq">{Texts.card1.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>

                </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="1">
                            {Texts.card2.title}
                        </AccordionToggleButton>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body classname="body-faq">{Texts.card2.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>

                <Card>
                    <Card.Header>
                        <AccordionToggleButton eventKey="3">
                            {Texts.card3.title}
                        </AccordionToggleButton>

                        <Accordion.Collapse eventKey="3">
                            <Card.Body classname="body-faq">{Texts.card4.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>
                <Card className="card-faq">
                    <Card.Header>
                        < AccordionToggleButton eventKey="4">
                            {Texts.card4.title}
                        </AccordionToggleButton>

                        <Accordion.Collapse eventKey="4">
                            <Card.Body classname="body-faq">{Texts.card5.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="5">
                            {Texts.card5.title}
                        </AccordionToggleButton>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body classname="body-faq">{Texts.card6.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="6">
                            {Texts.card6.title}
                        </AccordionToggleButton>

                        <Accordion.Collapse eventKey="6">
                            <Card.Body classname="body-faq">{Texts.card7.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card.Header>
                </Card>
            </Accordion>

            <img src={imgFaq} className="imgFaq" />
        </div >
    )
}
export default FaqComponent
