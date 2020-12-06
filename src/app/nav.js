import React from 'react';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';


const style = {
    marginLeft: "30px"
}
export default function Navigation () {
    return (
        <Container fluid>
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" id="navBar">
            <Navbar.Brand id="btnLink" href="#">HOME</Navbar.Brand>
            <Navbar.Toggle id="menuButton"aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link id="btnLink" href="#aboutMeId" style={style}>ABOUT ME</Nav.Link>
                <Nav.Link id="btnLink" href="#skillsId" style={style}>SKILLS</Nav.Link>
                <Nav.Link id="btnLink" href="#projectId" style={style}>PROJECTS</Nav.Link>
                <Nav.Link id="btnLink" href="#testimonialId" style={style}>TESTIMONIALS</Nav.Link>
                <Nav.Link id="btnLink" href="#contactMeId" style={style}>CONTACT ME</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
        </Container>
    )
}



