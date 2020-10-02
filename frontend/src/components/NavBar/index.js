import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import NavigationStyles from "./NavBarStyle.css"
import Logotipo from '../images/logo-5marias.png'
import { HashLink as Link } from 'react-router-hash-link';



function NavBarComponent(){
        return (
            <Navbar className= "NavBar" bg="light"  expand="lg"  sticky="top"  >
                <img src={Logotipo} width="200px"></img>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto mx-auto nb-cont">
                            <Nav.Link className="nb" href="#anchorContact" >Contato</Nav.Link >
                            <Nav.Link className="nb" href="#anchorBenefits" >Benefícios</Nav.Link>
                            <Nav.Link className="nb" href="#anchorTestimonies">Depoimento</Nav.Link>
                            <Nav.Link className="nb" href="#anchorFAQ">FAQ</Nav.Link>
                            <Nav.Link className="nb" href="#anchorBudget">Orçamento</Nav.Link>
                     </Nav>   
                    </Navbar.Collapse>
            </Navbar>
        )
}
export default NavBarComponent
