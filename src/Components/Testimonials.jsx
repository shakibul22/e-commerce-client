import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const testimonialsArray = [
    {
      quote:
        "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
      name: "Michelle Williams",
      location: "Client, Los Angeles",
      thumbnailSrc:
        "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/qaa5w9eswcq3ghi1tran.png",
    },
    {
      quote:
        "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
      name: "Michelle Williams",
      location: "Client, Los Angeles",
      thumbnailSrc:
        "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/qaa5w9eswcq3ghi1tran.png",
    },
    {
      quote:
        "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis.",
      name: "Michelle Williams",
      location: "Client, Los Angeles",
      thumbnailSrc:
        "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1705939533/qaa5w9eswcq3ghi1tran.png",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="px-2 md:px-[100px] lg:px-[180px] xl:px-[520px]">
      <div className="text-5xl text-center py-6 pt-16">
        <h1>Testimonials</h1>
        <div  className=" flex justify-center pt-4 pb-4 text-[#FF084E] "><FaQuoteLeft /></div>
        
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
      >
        {testimonialsArray.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div>
              <div>
                <div className="text-xl text-center pb-3">
                  <p>{testimonial.quote}</p>
                </div>
                <div className=" flex flex-row items-center gap-3 justify-center ">
                  <div className="avatar">
                    <div className="w-16 rounded-full ">
                      <img src={testimonial.thumbnailSrc} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg">{testimonial.name}</p>
                    <p className="text-lg">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default Testimonials;



