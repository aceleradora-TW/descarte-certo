import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import footerStyle from './FooterStyle.css'
import {Nav} from 'react-bootstrap'


function FooterComponent(){
        return (
 
    <div className="footerStyle" fixed="bottom">
        <Row>
            <Col >Contato:</Col>
            <Col>Redes Sociais:</Col>
        </Row>
        <Row>
            <Col>Telefone: (51) 99851 - 7154</Col>
            <Col classNmae="icons">
                <Nav.Link> <Image className="img" src=""/></Nav.Link>
                <Nav.Link> <Image className="img" src=""/></Nav.Link>
                <Nav.Link> <Image src=""/></Nav.Link>
                <Nav.Link> <Image className="img" src=""/></Nav.Link>
            </Col>
        </Row>
                
    </div>
        )
}
export default FooterComponent
