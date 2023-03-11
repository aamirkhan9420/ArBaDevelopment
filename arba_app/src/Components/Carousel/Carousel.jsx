import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62e142fbed5a8"
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
  );
}

export {ControlledCarousel };