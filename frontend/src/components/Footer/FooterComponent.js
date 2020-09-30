import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import footerStyle from './FooterStyle.css'
import {FacebookIcon} from '../images/IconsComponents.js' 
import {InstagramIcon} from '../images/IconsComponents.js'
import {WhatsAppIcon} from '../images/IconsComponents.js' 
import {EMailIcon} from '../images/IconsComponents.js'  
import { Nav } from 'react-bootstrap'


function FooterComponent(){
        return (
 
    <div className="footerStyle" fixed="bottom">
        <Row>
            <Col >Contato:</Col>
            <Col>Redes Sociais:</Col>
        </Row>
        <Row>
            <Col className="footerStyle-texts">Telefone: (51) 99851 - 7154</Col>
            
            <Col className="social-media-icons" >
                <Nav.Link  target="_blank" href="https://www.facebook.com/5marias.sustentaveis"><FacebookIcon></FacebookIcon></Nav.Link>
                <Nav.Link  target="_blank" href="https://www.instagram.com/_5marias_/"><InstagramIcon></InstagramIcon></Nav.Link>
                <Nav.Link  target="_blank" href="whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+5551998517154+"><WhatsAppIcon></WhatsAppIcon></Nav.Link>
                <Nav.Link  target="_blank" href="mailto:s.sustentaveis@gmail.com "><EMailIcon></EMailIcon></Nav.Link>
            </Col>
        </Row>
                
    </div>
        )
}
export default FooterComponent
