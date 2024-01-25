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
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set the auto-play speed in milliseconds (e.g., 3000ms = 3 seconds)
  
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
      <div className="text-[10vh] transform -translate-y-24 absolute left-5 "
        style={{
          width: "30px",
          height:"40px",
          color: "white",
          position: "absolute",
          // Adjust the spacing between dots
          display: "flex",
          justifyContent: "start",
          alignItems: "center", // Align vertically
          zIndex: 10, // Set the z-index
        }}
      >
       .
      </div>
    ),
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180246/bg-1_hvp1xl.jpg"
            alt=""
            style={{ width: "100%", height: "45vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180402/bg-2_1_gi8bdg.jpg"
            alt=""
            style={{ width: "100%", height: "45vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180334/bg-2_qxlblp.jpg"
            alt=""
            style={{ width: "100%", height: "45vh", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
