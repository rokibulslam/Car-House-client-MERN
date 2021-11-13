import React from 'react';
import customer from '../../../images/customer.png'
import './Article.css'
const Article = () => {
    return (
      <div className="article-bg text-white container d-flex justify-content-center mb-5 rounded">
        <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={customer} alt="" />
          </div>
          <div className="col-md-6 fw-light pt-5 text-start ps-5">
            <h1 className="fw-bolder text-white"> The Way It Should Be</h1>
            <div >
              <h3>Do more from home</h3>
              <p>Curbside pickup and delivery options available</p>
            </div>
            <div>
              <h3>Test drives for real life</h3>
              <p>24-hour take home test drives</p>
            </div>
            <div>
              <h3>Love it or return it</h3>
              <p>30-day money back (up to 1500 mi.)</p>
            </div>
            <div>
              <h3>All major systems covered</h3>
              <p>For 90 days or 4,000 miles (whichever comes first)</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Article;