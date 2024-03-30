import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slideshow = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slide1.jpg")}
          alt="slide 1"
        />
        <Carousel.Caption>
          <h3>Welcome to Journey Genius</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slide2.jpeg")}
          alt="slide 2"
        />

        <Carousel.Caption>
          <h3>Explore More, Travel Easy!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../images/slide3.jpeg")}
          alt="slide 3"
        />

        <Carousel.Caption>
          <h3>Discover. Book. Go!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
