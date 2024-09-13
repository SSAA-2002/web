import React from "react";

import { Carousel } from "react-bootstrap";
import slide2 from "../assets/img/slide2.jpg";

function About() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <h1 className="text-center mt-5">About</h1>
        <p className="text-center mt-5">
        "Welcome to Visa Lounge, your trusted destination for visa, attestation,
        passport, and insurance services. With a focus on delivering seamless
        travel solutions, we simplify the complexities of international
        documentation. Our dedicated team of experts provides personalized
        attention and meticulous support, ensuring a hassle-free experience.
        From visa applications to document legalization and passport services,
        we handle it all with efficiency and reliability. Additionally, we offer
        comprehensive travel insurance coverage for your peace of mind. With
        strong partnerships and up-to-date knowledge of regulations, we ensure
        accurate and prompt service. Choose Visa Lounge for a smooth and secure
        journey, backed by years of industry expertise."
        </p>
      </div>
      <div className="col-lg-6 col-md-12">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
