import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Card, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Banner.css'


const Banner = () => {
    // const bannerBg = {
    //     background: `url(${bg})`,
        
    // }

    return (
      <div className="banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-content-start d-flex flex-column align-items-start form-banner my-5 p-5 rounded">
              <h1 className="h1-tag text-start">THE WIND IS</h1>
              <h1 className="h1-tag text-start">NOT EVEN CLOSE TO US</h1>
              <p className="text-white text-start">
                We sale Brand new and reconditioned Car. Most of our cars are
                imported from Japan, England and Europe. For reconditioned car,
                we import low mileage and top performance car for our customer.
              </p>
              <NavLink className="" to="/about">
                <Button className="about-btn ">About Us</Button>
              </NavLink>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Banner;