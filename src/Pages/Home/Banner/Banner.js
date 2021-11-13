import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Banner.css'


const Banner = () => {
    // const bannerBg = {
    //     background: `url(${bg})`,
        
    // }

    return (
      <div className="banner p-5">
        <div className="container">
          <h1 className="p-5 text-white fw-light">
            Bangladesh’s largest wholesale platform for used cars
          </h1>
          <div className="row">
            <div className="col-md-6">
              <Card style={{ width: "30rem", height: "15rem" }}>
                <Card.Body className="d-flex flex-column p-5">
                  <Card.Title className="text-success">
                    Love Your Car Guaranteelearn more about love your car
                    guarantee. content opens in popup.
                  </Card.Title>
                  <Card.Subtitle className="my-2 text-muted ">
                    24-hr test drives 30-day returns
                  </Card.Subtitle>
                  <NavLink className="" to="/showroom">
                    <Button className="btn-danger">
                      Find Your Favourite Car
                    </Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 fs-4 ps-5 text-white">
              <h2 className="bg-danger py-1 mb-5">Buy cars</h2>
              <div className="bg-secondary py-3">
                <p>3,000+ cars added daily</p>
                <p>30,000+ cars in stock</p>
                <p>Reliable documentation of car condition</p>
              </div>
              <NavLink to="/about">
                <Button className="btn btn-warning mt-2">About Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;