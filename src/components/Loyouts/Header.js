import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="logo">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="nav-Link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-Link">About</Nav.Link>
                            <Nav.Link as={Link} to="/menu" className="nav-Link">Our Menu</Nav.Link>
                            <Nav.Link as={Link} to="/shop" className="nav-Link">Shop</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="nav-Link">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-Link">Contact</Nav.Link>

                            <Nav.Link as={Link} to="/">
                                <div className="cart">
                                    <i className="bi bi-bag"></i>
                                    <em className="roundpoint">2</em>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
