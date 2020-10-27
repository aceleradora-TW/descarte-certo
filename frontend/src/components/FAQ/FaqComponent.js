import React from 'react'
import { Accordion, Card, Button } from "react-bootstrap";
import Icone from '../images/icon-faq-novo.png'
import imgFaq from '../images/img-faq.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FaqStyle.css'
import Texts from './texts.json'
import { string } from 'prop-types';

function FaqComponent() {
    return (

        <div className="div col-6">
            <h1 id="anchorFAQ" className="title">{Texts.faq.title}</h1>
            <Accordion >
                {/* Card 1 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="0">
                            {Texts.card1.title} <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>{Texts.card1.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 2 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="1">
                            {Texts.card2.title} <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>{Texts.card2.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 3 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="2">
                            {Texts.card3.title}  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>{Texts.card3.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 4 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="3">
                            {Texts.card4.title}  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>{Texts.card4.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 5 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="4">
                            {Texts.card5.title}  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>{Texts.card5.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 6 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="5">
                            {Texts.card6.title}  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>{Texts.card6.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 7 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="6">
                            {Texts.card7.title}  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>{Texts.card7.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <img src={imgFaq} className="imgFaq" />
        </div >


    )
}
export default FaqComponent



