import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import footerStyle from './FooterStyle.css'

function FooterComponent(){
        return (
 
    <div className="footerStyle" fixed="bottom">
        <Row>
            <Col >Contato:</Col>
            <Col>Redes Sociais:</Col>
        </Row>
        <Row>
            <Col>Telefone: (51) 99851 - 7154</Col>
            <Col>
                <Image src=""/>Facebook
                <Image src=""/>Intagram
                <Image src=""/>Email
                <Image src=""/>WhatsApp
            </Col>
        </Row>
                
    </div>
        )
}
export default FooterComponent
