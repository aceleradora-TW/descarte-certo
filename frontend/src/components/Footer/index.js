import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  './FooterStyle.css'
import Contact from './texts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function FooterComponent(){
    return (  
            <div id ="Contato" className="footerStyle" fixed="bottom" >
                <Row className="row-style">
                    <Col className="footerStyle-texts">
                        <Col>{Contact.data.contact}</Col>
                        <Col>{Contact.data.telephone}</Col>
                    </Col>
                    <Col>
                        <Col className="social-media-icons" >
                            <a className="icon-style" target="_blank" rel="noopener noreferrer" href="whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+5551998517154+"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a className="icon-style" target="_blank" rel="noopener noreferrer" href="mailto:5marias.orcamento@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a className="icon-style" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/5marias.sustentaveis"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="icon-style" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_5marias_/"><FontAwesomeIcon icon={faInstagram} /></a>
                        </Col>
                    </Col>  
                </Row>
                <Row>
                    <p className="copyright">Copyright © by Aceleradora Ágil</p>
                </Row>
            </div>
        )
}
export default FooterComponent
