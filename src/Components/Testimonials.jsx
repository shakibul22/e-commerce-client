import React from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const content = [
  {
    title: "Testimonial 1",
    description: "Description for Testimonial 1.",
    button: "Read More",
    image: "url-to-image-1.jpg",
  },
  {
    title: "Testimonial 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex veniam, nisi voluptatem aliquid qui odio illo reiciendis tenetur ipsam officia neque, est ducimus non doloremque adipisci amet dolores nobis!",
    button: "Read More",
    image: "url-to-image-2.jpg",
  },
  {
    title: "Testimonial 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex veniam, nisi voluptatem aliquid qui odio illo reiciendis tenetur ipsam officia neque, est ducimus non doloremque adipisci amet dolores nobis!",
    button: "Read More",
    image: "url-to-image-2.jpg",
  },
  {
    title: "Testimonial 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex veniam, nisi voluptatem aliquid qui odio illo reiciendis tenetur ipsam officia neque, est ducimus non doloremque adipisci amet dolores nobis!",
    button: "Read More",
    image: "url-to-image-2.jpg",
  },

  {
    title: "Testimonial 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex veniam, nisi voluptatem aliquid qui odio illo reiciendis tenetur ipsam officia neque, est ducimus non doloremque adipisci amet dolores nobis!",
    button: "Read More",
    image: "url-to-image-2.jpg",
  },
  // Add more testimonial items as needed
];

function Testimonials() {
  return (
    <section >
     

        <Swiper
        
          pagination={{
            dynamicBullets: true,
            
            clickable: true,
            horizontalClass:'swiper-pagination-vertical'
          }}
          modules={[Pagination]}
        >
          {content.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="flex flex-col">

                <button >{item.button}</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    </section>
  );
}

export default Testimonials;
