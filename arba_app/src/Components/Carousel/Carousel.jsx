import React, { Component } from "react";
import Slider from "react-slick";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "200px",
      slidesToShow:2,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        }
      ]
    };
    return (
      <div style={{ width: '95%', margin: 'auto' ,paddingTop:"10px",paddingBottom:"20px"}}>
        <Slider {...settings}>
          <div>
            <img style={{ width: '85%', height: '300px' }} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
          </div>
          <div>
            <img style={{ width: '85%', height: '300px' }} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
          </div>
          <div>
            <img style={{ width: '85%', height: '300px' }} src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}