import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import useAuth from "../../../Hooks/useAuth";
import './Navigation.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { user, logout } = useAuth()

  return (
    <div>
      <Navbar
        className="nav-color sticky-top overflow-hidden navbar "
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="fw-bolder text-black align-items-center d-flex justify-content-center">
            <FontAwesomeIcon
              style={{ paddingRight: "10px" }}
              icon={faCar}
              size="2x"
            />
            CarHouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={HashLink}
                className="text-decoration-none fw-normal text-black"
                to="/home#home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                className="text-decoration-none fw-normal px-2 text-black"
                to="/showroom"
              >
                Our Vehicles
              </Nav.Link>
              {user?.email && (
                <Nav.Link
                  as={HashLink}
                  className="text-decoration-none fw-normal px-2  text-black"
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>
              )}

              <Nav.Link
                as={HashLink}
                className="text-decoration-none px-2  fw-normal text-black"
                to="/about"
              >
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-center align-items-center">
              {user.email ? (
                <button className="button text-white p-2" onClick={logout}>
                  Sign Out
                </button>
              ) : (
                <Nav.Link
                  as={HashLink}
                  className="button text-white mt-1 mx-2"
                  to="/login"
                >
                  Sign in
                </Nav.Link>
              )}
              {user?.email ? (
                <p className="mb-0 ps-3 "> {user.displayName}</p>
              ) : (
                <Nav.Link
                  as={HashLink}
                  className="button text-white mt-1"
                  to="/register"
                >
                  Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
