import React from 'react'
import { Navbar, Nav} from "react-bootstrap"
import { HashLink as Link } from "react-router-hash-link"
import "./NavBarStyle.css"
import Logotipo from '../images/logo-5marias.png'
import NavId from './texts.json'

function NavBarComponent() {
    return (
        <Navbar className="NavBar" bg="light" expand="lg" sticky="top"  >
            <Link to="#Home"><img src={Logotipo} alt="Logo tipo das 5 Marias" width="200px"></img></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto mx-auto nb-cont">
                    <Link className="nav-link" to="#Contato">{NavId.id.contact}</Link >
                    <Link className="nav-link" to="#Beneficios" >{NavId.id.benefits}</Link>
                    <Link className="nav-link" to="#Depoimentos">{NavId.id.depositions}</Link>
                    <Link className="nav-link" to="#Duvidas">{NavId.id.duvidas}</Link>
                    <Link className="nav-link" to="#Orcamento">{NavId.id.budget}</Link>
                </Nav>             
            </Navbar.Collapse>
            
        </Navbar>
    )
}
export default NavBarComponent
