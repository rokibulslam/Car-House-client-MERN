import React from 'react';
import customer from '../../../images/customer.png'
import './Article.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStore,
  faStar,
  faShoppingBag,
  faCartPlus,
  faTasks,
  faUser,
  
  faCar,
  faExchangeAlt
} from "@fortawesome/free-solid-svg-icons";
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";

const Article = () => {
    return (
      <div className="article-bg py-5">
        <div className=" container d-flex justify-content-center mb-5 rounded">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid rounded" src={customer} alt="" />
            </div>
            <div className="col-md-6 fw-light pt-5 text-start ps-5">
              <h1 className="fw-bolder"> The Way It Should Be</h1>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faHome}
                    size="2x"
                  />
                  <h3>Do more from home</h3>
                </div>
                <p>Curbside pickup and delivery options available</p>
              </div>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faCar}
                    size="2x"
                  />
                  <h3>Test drives for real life</h3>
                </div>
                <p>24-hour take home test drives</p>
              </div>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faExchangeAlt}
                    size="2x"
                  />
                  <h3>Love it or return it</h3>
                </div>
                <p>30-day money back (up to 1500 mi.)</p>
              </div>
              <div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    style={{ paddingRight: "10px" }}
                    icon={faSuperpowers}
                    size="2x"
                  />
                  <h3>All major systems covered</h3>
                </div>
                <p>For 90 days or 4,000 miles (whichever comes first)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Article;