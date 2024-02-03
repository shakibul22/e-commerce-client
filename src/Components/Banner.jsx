import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Add this line to hide the arrow signs
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
        className="text-[10vh] transform -translate-y-24 absolute left-5"
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
    <div className="min-h-[75vh]">
      <Slider {...settings}>
        <div>
          <div
            className="text-start left-4 lg:left-48 flex flex-col justify-between gap-2 lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            data-aos="fade-right"
          >
            <p className="font-sm lg:font-semibold">Only today we offer free shopping</p>
            <h1 className="  text-lg lg:text-7xl  font-extrabold">New Collection</h1>
            <button className="btn btn-outline btn-info w-[40%] lg:w-[50%]">Check-out</button>
          </div>
          <img
            src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg"
            alt=""
            style={{ width: "100%", height: "75vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            className="text-start left-16 lg:left-48 flex flex-col justify-between gap-2 lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            data-aos="fade-right"
          >
            <p>Only today we offer free shopping</p>
            <h1 className="  text-xl lg:text-7xl font-extrabold">Summer Collection</h1>
            <button className="btn btn-outline btn-info w-[50%]">Check-out</button>
          </div>
          <img
            src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg"
            alt=""
            style={{ width: "100%", height: "75vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            className="text-start left-16 lg:left-48 flex flex-col justify-between gap-2 lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            data-aos="fade-right"
          >
            <p>Only today we offer free shopping</p>
            <h1 className="  text-xl lg:text-7xl font-extrabold">Summer Collection</h1>
            <button className="btn btn-outline btn-info w-[50%]">Check-out</button>
          </div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180246/bg-1_hvp1xl.jpg"
            alt=""
            style={{ width: "100%", height: "75vh", objectFit: "cover" }}
          />
        </div>
        <div>
        <div
            className="text-start left-16 lg:left-48 flex flex-col justify-between gap-2 lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            data-aos="fade-right"
          >
              <p>Only today we offer free shopping</p>
            <h1 className="text-white text-xl lg:text-7xl font-extrabold">Women Collection</h1>
            <button className="btn btn-outline btn-info w-[50%]">Check-out</button>
          </div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180402/bg-2_1_gi8bdg.jpg"
            alt=""
            style={{ width: "100%", height: "75vh", objectFit: "cover" }}
          />
        </div>
        <div>
        <div
            className="text-start left-16 lg:left-48 flex flex-col justify-between gap-2 lg:gap-5 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            data-aos="fade-right"
          >
              <p>Only today we offer free shopping</p>
            <h1 className="text-white text-xl lg:text-7xl font-extrabold">Fashion Collection</h1>
            <button className="btn btn-outline btn-success w-[50%]">Shop Now</button>
          </div>
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180334/bg-2_qxlblp.jpg"
            alt=""
            style={{ width: "100%", height: "75vh", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
