import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Box h={400} border={"1px solid red"}>

    
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="First slide"
          style={{height:"400px"}}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="Second slide"
          style={{height:"400px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt="Third slide"
          style={{height:"400px"}}
        />

      
      </Carousel.Item>
    </Carousel> 
     </Box>
  );

}

export {ControlledCarousel };