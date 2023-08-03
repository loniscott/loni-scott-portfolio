import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav, Container} from 'react-bootstrap';
import logo from '../icons/favicon.png';
import { Link } from 'react-scroll';



const Navigation = () => {
    
    return (
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand>
                        Loni Scott
                    </Navbar.Brand>
    
                    <Nav className="ml-auto flex-row-3">
                        <Link to="home" smooth={true} spy={true} activeClass="active" style={{cursor: "pointer", padding: 5}}>
                            Home 
                        </Link>
                        <Link to="about" smooth={true} spy={true} activeClass="active" style={{cursor: "pointer", padding: 5}}>
                            About
                        </Link>
                        <Link to="portfolio" smooth={true} spy={true} activeClass="active" style={{cursor: "pointer", padding: 5}}>
                            Work
                        </Link>
                        <Link to="contact" smooth={true} spy={true} activeClass="active" style={{cursor: "pointer",  padding: 5}}>
                            Contact
                        </Link>
                    </Nav>

                </Container>
            </Navbar>
    )
};

export default Navigation;

