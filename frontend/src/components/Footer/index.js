import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import footerStyle from './FooterStyle.css'
import {Nav} from 'react-bootstrap'
import FaceIcon from '../images/icon-face.png'
import InstaIcon from '../images/icon-insta.png'
import WhatsIcon from '../images/icon-whats.png'
import MailIcon from '../images/icon-mail.png'



function FooterComponent(){
        return (
            <div id ="anchorContact"className="footerStyle" fixed="bottom">
                <Row>
                <Col>
                    <Col>Contato:</Col>
                    <Col className="footerStyle-texts">Telefone: (51) 99851 - 7154</Col>
                </Col>
                <Col>
                    <Col>Redes Sociais:</Col>
                    <Col className="social-media-icons" >
                        <a  target="_blank" href="https://www.facebook.com/5marias.sustentaveis"><img src={FaceIcon} width="50px"></img></a>
                        <a target="_blank" href="https://www.instagram.com/_5marias_/"><img src={InstaIcon} width="50px"></img></a>
                        <a  target="_blank" href="whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+5551998517154+"><img src={WhatsIcon} width="50px"></img></a>
                        <a target="_blank" href="mailto:sustentaveis@gmail.com "><img src={MailIcon} width="50px"></img></a>
                    </Col>
                </Col>  
                </Row>
            </div>
        )
}
export default FooterComponent
