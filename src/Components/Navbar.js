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
            <Link to="/People" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={2} href="#protocolsandstudies">People</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Projects" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={3} href="#reports">Projects</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Publications" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={4} href="#publications">Publications</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Teachingandlectures" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={5} href="#publications">Teaching/Lectures</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Blog" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={6} href="#blog">Blog</ReactBootstrap.Nav.Link>
            </Link>
            <Link to="/Contact" style={{textDecoration: "none"}}>
            <ReactBootstrap.Nav.Link eventKey={7} href="#contact">Contact</ReactBootstrap.Nav.Link>
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Navbar;