import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className='px-[520px]'>
       <h1 className='text-4xl text-center py-9 pt-16'>Testmonials</h1>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
      >
        <SwiperSlide>
          <div>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180246/bg-1_hvp1xl.jpg"
              alt=""
              style={{ width: "100%", height: "45vh", objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180402/bg-2_1_gi8bdg.jpg"
              alt=""
              style={{ width: "100%", height: "45vh", objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706180334/bg-2_qxlblp.jpg"
              alt=""
              style={{ width: "100%", height: "45vh", objectFit: "cover" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
