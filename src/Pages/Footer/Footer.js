import React from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const facebook = <FontAwesomeIcon icon={faFacebook} size="2x" />;
  const twitter = <FontAwesomeIcon icon={faTwitter} size="2x" />;
  const instgaram = <FontAwesomeIcon icon={faInstagram} size="2x" />;
  return (
    <div>
      <div className="footer-bg overflow-hidden text-white fw-light p-5">
        <h1 className="fs-1 text-center pb-3 text-warning">CAR House</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold">Buying & Selling</li>
                <li>Find a Car</li>
                <li>Listing by City</li>
                <li>Car Payment Calculation</li>
                <li>Compare Side-by-side</li>
                <li>Fraud Awarness</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold">Explore Our Brand</li>
                <li>Dealer Inspire</li>
                <li>FUEL</li>
                <li>Auto.com</li>
                <li>NewCars.com</li>
                <li>Pickuptrucks.com</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold">About Our Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Affiliate </li>
                <li>Site Map</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="fw-bold">
                  Get special offers and more from Car House
                </li>
              </ul>
              <Form.Control type="email" placeholder="Enter Your Email" />
                          <Button className="m-3">Subscribe</Button>
                          <p>Connect With Us</p>
              <div>
                <a className="px-2 text-white" href="https://www.facebook.com/">
                  {facebook}
                </a>
                <a className="px-2 text-white" href="https://www.facebook.com/">
                  {instgaram}
                </a>
                <a className="px-2 text-white" href="https://www.facebook.com/">
                  {twitter}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          className="text-white bg-dark p-5 mb-0
                text-center"
        >
          Copyright © 2020. All Rights Reserved. Car House
        </p>
      </div>
    </div>
  );
};

export default Footer;
