import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    
    return (
        <>
            <Navbar  expand="lg">
            <Navbar.Brand href="#home"><Image width='90' height='45' src={require('../travel-guru-master/logo-white.png')}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>
        </>
        
    );
};

export default Header;