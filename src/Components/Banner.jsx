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
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        className="rounded-full"
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="text-[10vh] transform -translate-y-24 absolute left-5 "
        style={{
          width: "30px",
          height: "40px",
          color: "white",
          position: "absolute",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          zIndex: 10,
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
          {/* Image 1 with text */}
          <div style={{ position: "relative", width: "100%", height: "45vh" }}>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180246/bg-1_hvp1xl.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1>Your Text Here</h1>
              <p>Additional description if needed</p>
            </div>
          </div>
        </div>
        <div>
          {/* Image 2 with text */}
          <div style={{ position: "relative", width: "100%", height: "45vh" }}>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180402/bg-2_1_gi8bdg.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "left",
              }}
            >
              <h1>Your Text Here</h1>
              <p>Additional description if needed</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* Image 3 with text */}
          <div style={{ position: "relative", width: "100%", height: "45vh" }}>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180334/bg-2_qxlblp.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1>Your Text Here</h1>
              <p>Additional description if needed</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
