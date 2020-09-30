import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import NavigationStyles from "./NavBarStyle.css"
import Logotipo from '../images/logo-5marias.png'


function NavBarComponent(){
        return (
            <Navbar className= "NavBar" bg="light"  expand="lg"  sticky="top"  >
                <img src={Logotipo} width="200px"></img>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mx-auto nb-cont">
                            <Nav.Link className="nb" href="#Contato" >Contato</Nav.Link >
                            <Nav.Link className="nb" href="#Depoimentos" >Depoimento</Nav.Link>
                            <Nav.Link className="nb" href="#FAQ">FAQ</Nav.Link>
                            <Nav.Link className="nb" href="#Orcamento">Orçamento</Nav.Link>
                            </Nav>
                         
                    </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBarComponent
