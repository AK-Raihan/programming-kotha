import React from 'react';
import logo from '../../../images/logo.png'

import post1 from '../../../images/course_image5.jpg'
import post2 from '../../../images/course_image6.jpg'

const Footer = () => {
    return (
        <div >
            <div className='bg-dark text-white pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a className="navbar-brand" href="/">
                                <div className="logo">
                                    <img className='img-fluid' src={logo} alt="" />
                                </div>
                        </a>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        
                    </div>
                    <div className="col-lg-3">
                        <h2>About School</h2>
                        <ul>
                            <li>General Information</li>
                            <li>Who We are</li>
                            <li>Our Teachers</li>
                            <li>School History</li>
                            <li>Specialize Programme</li>
                            <li>Language Training</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h2>Recent Post</h2>
                        <div className="post d-flex ">
                            <div className="img d-flex">
                            <img className=' me-4  w-50' src={post2} alt="" />
                            <p>nov 19, 2021</p>
                            </div>
                        </div>
                        <div className="post d-flex mt-2">
                            <div className="img  d-flex">
                            <img className=' w-50 me-4' src={post1} alt="" />
                            <p>Dec 19, 2021</p>
                            </div>
  
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <h2>Keep In Touch</h2>
                        <p>Our school is the perfect environment for language studies.</p>
                        <ul className=" list-unstyled">
                            <li className="text-white"><i className="fas fa-map-marker-alt "></i> BHA gate oposite position,22</li>
                            <li ><i className="fas fa-phone-volume"></i> +24 123-456-7878</li>
                            <li ><i className="far fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bootom text-center py-3">
                  <p >© 2021 Kids door – All Rights Reserved</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;