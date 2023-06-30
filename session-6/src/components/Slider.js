import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel className="d-flex align-items-center">
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://img.freepik.com/free-psd/3d-rendering-shopping-concept_23-2149877646.jpg?t=st=1686181380~exp=1686181980~hmac=4466b0ad7a37a240b3aa40cbb8cb998171a63fc72754de496084819a90f17f8d"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://img.freepik.com/free-psd/3d-rendering-shopping-concept_23-2149877658.jpg?t=st=1686181380~exp=1686181980~hmac=eb8b0837209fb4c1495a53c5fb6907e7f5e573bdf0cfa1e1c2e2ea7449739bfe"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="https://img.freepik.com/free-psd/3d-rendering-shopping-concept_23-2149877652.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
