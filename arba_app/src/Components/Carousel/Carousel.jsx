import React, { Component } from "react";
import Slider from "react-slick";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 1,
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
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{ width: '95%', margin: 'auto' ,paddingTop:"10px",paddingBottom:"20px"}}>
        <Slider {...settings}>
          <div>
            <img style={{ width: '90%', height: '300px' }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          </div>
          <div>
            <img style={{ width: '90%', height: '300px' }} src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" alt="" />
          </div>
          <div>
            <img style={{ width: '90%', height: '300px' }} src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}