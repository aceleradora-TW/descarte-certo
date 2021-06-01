import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  './FooterStyle.css'
import FaceIcon from '../images/icon-face.png'
import InstaIcon from '../images/icon-insta.png'
import WhatsIcon from '../images/icon-whats.png'
import MailIcon from '../images/icon-mail.png'
import Contact from './texts.json'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
                            <a className="icon-style" target="_blank" href="whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+5551998517154+"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a className="icon-style" target="_blank" href="mailto:5marias.orcamento@gmail.com"><img src={MailIcon} width="50px"></img></a>
                            <a className="icon-style" target="_blank" href="https://www.facebook.com/5marias.sustentaveis"><img src={FaceIcon} width="50px"></img></a>
                            <a className="icon-style" target="_blank" href="https://www.instagram.com/_5marias_/"><img src={InstaIcon} width="50px"></img></a>
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
