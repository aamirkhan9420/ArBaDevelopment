import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      className: "center",
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyload:true,
      initialSlide: 4,
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
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{width:"95%",margin:"auto",height:"400px",paddingTop:10}}>
      
        <Slider {...settings}>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img style={{height:"400px", margin:"auto" ,width:"80%"}}  src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
             
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
            
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
         
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="" />
            
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" />
            
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="" />
            
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="" />
            
          </div>
          <div style={{height:"100%",margin:"auto",border:"1px solid blue" ,width:"31.66px"}}>
            <img  style={{height:"400px", margin:"auto"  ,width:"80%"}} src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />
            
          </div>
        </Slider>
      </div>
    );
  }
}