import React, { useContext } from 'react'
import { Accordion, Card, Button, AccordionContext, } from "react-bootstrap";
import Icone from '../images/icon-faq-novo.png'
import imgFaq from '../images/img-faq.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FaqStyle.css'
import Texts from './texts.json'
import { string } from 'prop-types';
import './FaqResponsive.css'
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
                <Card>
                    <Card.Header>
                        <AccordionToggleButton eventKey="0">
                            {Texts.card1.title}
                        </AccordionToggleButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body classname="body-faq">{Texts.card1.content}</Card.Body>
                    </Accordion.Collapse>

                </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="1">
                            {Texts.card2.title}
                        </AccordionToggleButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body classname="body-faq">{Texts.card2.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <AccordionToggleButton eventKey="3">
                            {Texts.card3.title}
                        </AccordionToggleButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body classname="body-faq">{Texts.card4.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="4"> 
                            {Texts.card4.title} 
                            </AccordionToggleButton>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body classname="body-faq">{Texts.card5.content}</Card.Body>
                            </Accordion.Collapse>
                 </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="5"> 
                            {Texts.card5.title} 
                            </AccordionToggleButton>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body classname="body-faq">{Texts.card6.content}</Card.Body>
                            </Accordion.Collapse>
                 </Card>
                <Card>
                    <Card.Header>
                        < AccordionToggleButton eventKey="6">
                            {Texts.card6.title}
                        </AccordionToggleButton>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body classname="body-faq">{Texts.card7.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <img src={imgFaq} className="imgFaq" />
        </div >
    )
}
export default FaqComponent
