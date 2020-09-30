import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import footerStyle from './FooterStyle.css'
import {FacebookIcon} from '../images/IconsComponents.js' 
import {InstagramIcon} from '../images/IconsComponents.js'
import {WhatsAppIcon} from '../images/IconsComponents.js' 
import {EMailIcon} from '../images/IconsComponents.js'  


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
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <WhatsAppIcon></WhatsAppIcon>
                <EMailIcon></EMailIcon>
            </Col>
        </Row>
                
    </div>
        )
}
export default FooterComponent
