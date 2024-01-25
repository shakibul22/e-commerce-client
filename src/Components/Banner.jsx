import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
    appendDots: (dots) => (
      <div className="rounded-full"
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // Inside the settings object:
    customPaging: (i) => (
      <div className="text-6xl"
        style={{
          width: "30px",
          color: "blue",
          position: "fixed",
          left: "10px",
          top: `${i * 40}px`, // Adjust the spacing between dots
          display: "flex",
          justifyContent: "start",
          alignItems: "center", // Align vertically
          zIndex: 10, // Set the z-index
        }}
      >
       .
      </div>
    ),
      }    

  return (
    <div className="h-[25vh]">
      <Slider {...settings}>
        <div>
          <h1>1</h1>
    <img src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg" alt="" />
            </div>
        <div><h1>2</h1>
        <img src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg" alt="" />
        </div>
        <div>
        <img src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg" alt="" />
        </div>
        <div>
        <img src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg" alt="" />
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
