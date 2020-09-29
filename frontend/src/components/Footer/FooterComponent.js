import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import footerStyle from './FooterStyle.css'
import {Nav} from 'react-bootstrap'
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
            <Col className="footerStyle-n">Telefone: (51) 99851 - 7154</Col>
            
            <Col className="d-flex " >
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
