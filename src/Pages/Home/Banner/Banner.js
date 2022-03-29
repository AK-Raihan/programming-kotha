import React from 'react';
import banner from '../../../images/banner.png';
import "./Banner.css"

const Banner = () => {
    return (
        <div style={{ 
          backgroundImage: `url("${banner}")` ,
          backgroundRepeat:"no-repeat",
          padding:"120px 0"
        }}>
          <div className="container ">
              <div className="row">
                  <div className="col-lg-6">
                  <div className="banner-text">
                      <h6>The Leader in Online Learning</h6>
                      <h2>Master the Skills to <br /> Drive your Career.</h2>
                      <p>Free online courses from the world’s leading experts. <br /> Join 17 million learners today.</p>
                      <input className='banner-input' placeholder='search here' type="text" />
                      <button className='btn banner-btn'>Start Learning</button>
                      <div className='mt-3 banner-list-item'>
                          <ul>
                              <li>Access more then 100K online courses.</li>
                              <li>Learn with experts from world-leading universities</li>
                              <li>Learn the high-impact skills that top companies want</li>
                          </ul>
                      </div>
                  </div>

                  </div>
                  <div className="col-lg-6"></div>
              </div>
              
          </div>
        </div>
      );
};

export default Banner;