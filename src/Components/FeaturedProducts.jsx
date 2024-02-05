import React from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { LuEye } from "react-icons/lu";
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: " Jamdani Motif Saree",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: " Jamdani Motif Saree",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: " Halfsilk Saree ",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: " Jamdani Motif Saree",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: " Halfsilk Saree ",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: " Jamdani Motif Saree",
      image:
        "https://images.pexels.com/photos/18973715/pexels-photo-18973715/free-photo-of-young-woman-in-a-traditional-pink-saree-dress-posing-outside.jpeg",
      rating: 4.5,
      price: 15,
    },
  ];
  const settings = {
    className: "center ",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3, // Default number of cards to show on larger screens
    swipeToSlide: true,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, 
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show only 1 card on small screens (e.g., mobile)
          slidesToScroll: 2, // Scroll 2 cards at a time on small screens
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens like tablets
          slidesToScroll: 2, // Scroll 3 cards at a time on medium screens
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for medium screens
          slidesToScroll: 3, // Scroll 3 cards at a time on medium screens
        },
      },
    ],
  };

  return (
    <div className="w-full lg:max-w-7xl mx-auto mb-12 px-2">
      <div className="flex flex-row justify-between  mb-2">
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <button className="btn text-sm btn-info  text-white">Show All</button>
      </div>
   
      <div>
  <Slider {...settings}>
    {products.map((product) => (
      <div key={product.id} className="relative h-[65vh]  rounded-md">
        <div className="flex justify-between absolute top-2 left-0 z-10 right-0 lg:right-12 p-1 lg:p-3">
          <p className="bg-red-600 text-white rounded px-3 lg:px-5 left-0 py-1">-10%</p>
          <FaRegHeart className="cursor-pointer text-white text-2xl" />
        </div>

        <div className="w-full max-w-sm  overflow-hidden  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="/productDetails">
            <div className="relative group">
            <img
  className="mb-2 rounded-lg w-full h-40 lg:p-2 lg:h-[450px] object-cover transition-transform transform hover:scale-105"
  src={product.image}
  alt={product.name}
/>
              <LuEye className="hidden group-hover:block text-white   text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
          </Link>
                <div className="px-2 pb-5">
                  <a href="#">
                    <h5 className="h-10 overflow-hidden lg:text-xl font-semibold tracking-tight text-sm text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    ৳{product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-[#009DE4] hover:bg-[#009DE4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg btn-sm lg:btn text-sm px-2 lg:px-5 py-1 lg:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#009DE4] dark:focus:ring-[#009DE4]"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
