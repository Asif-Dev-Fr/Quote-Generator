import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavComponent = ({ isLogged, checkLoginStatus }) => {
  // Methods :
  const signOut = () => {
    // Delete all localStorage.clear();
    localStorage.removeItem("login");
    checkLoginStatus();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
            Quote Generator
          </Link>
        </Navbar.Brand>

        {isLogged && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={signOut}>Sign out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavComponent;
