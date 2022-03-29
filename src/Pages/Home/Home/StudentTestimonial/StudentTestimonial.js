import React, { Component } from "react";
import './StudentTestimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import client1 from '../../../../images/koushik2-removebg-preview (3).png'
import client2 from '../../../../images/zahid3.jpg'
import client3 from '../../../../images/raihan2.png'
import client4 from '../../../../images/jahid.jpeg'

export default class StudentTestimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 800,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="client-main py-5">
          <div className="container">
          <div>
        <h6 className="text-center">Testimonials</h6>
        <h2 className="pb-5 text-center">Student Community Feedback</h2>
        <Slider {...settings}>
          <div>
            <div className="card client-card" style={{width: "18rem"}}>
            <img  src={client1} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Raihan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="card client-card" style={{width: "18rem"}}>
            <img src={client2} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Zahid</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="card client-card" style={{width: "18rem"}}>
            <img src={client3} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Koushik</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="card client-card" style={{width: "18rem"}}>
            <img src={client4} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Zahid</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="card client-card" style={{width: "18rem"}}>
            <img src={client1} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Raihan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
          <div>
          <div className="card client-card" style={{width: "18rem"}}>
            <img src={client2} className="card-img-top w-50 mx-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Zahid</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
          </div>
        </Slider>
      </div>
          </div>
      </div>
    );
  }
}