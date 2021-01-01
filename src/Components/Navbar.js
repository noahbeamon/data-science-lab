import React from 'react'
import '../App.css';
import * as ReactBootstrap from "react-bootstrap"; 
import {
    //BrowserRouter as Router,
    Link,
} from 'react-router-dom'; 

function Navbar() {
  return (
    <div className="App">
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <ReactBootstrap.Navbar.Brand href="/"><strong style={{ color: '#2e3d82' }}>Heman Shakeri Lab</strong></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <Link to="/" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={1} href="#home">Home</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Projects" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={2} href="#reports">Projects</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Publications" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={3} href="#publications">Publications</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Researchersandassistants" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={4} href="#protocolsandstudies">Researchers and Assistants</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Faq" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={5} href="#faq">FAQ</ReactBootstrap.Nav.Link>
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;