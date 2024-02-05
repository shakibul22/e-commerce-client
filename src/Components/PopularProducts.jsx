
import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import Slider from "react-slick";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "New Blue with Golden Color Half Silk Jamdani Motif Saree",
      image: "https://images.pexels.com/photos/6382266/pexels-photo-6382266.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: "New Blue with Golden Color Half Silk Jamdani Motif Saree",
      image: "https://images.pexels.com/photos/15016643/pexels-photo-15016643/free-photo-of-smiling-woman-standing-in-traditional-dress.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: "Purple with Golden Color New Halfsilk Saree with Running Blouse Piece",
      image: "https://images.pexels.com/photos/6382266/pexels-photo-6382266.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: "New Blue with Golden Color Half Silk Jamdani Motif Saree",
      image: "https://images.pexels.com/photos/15016643/pexels-photo-15016643/free-photo-of-smiling-woman-standing-in-traditional-dress.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: "Purple with Golden Color New Halfsilk Saree with Running Blouse Piece",
      image: "https://images.pexels.com/photos/15016643/pexels-photo-15016643/free-photo-of-smiling-woman-standing-in-traditional-dress.jpeg",
      rating: 4.5,
      price: 15,
    },
    {
      id: 1,
      name: "New Blue with Golden Color Half Silk Jamdani Motif Saree",
      image: "https://images.pexels.com/photos/6382266/pexels-photo-6382266.jpeg",
      rating: 4.5,
      price: 15,
    },
   
  ];
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, 
    slidesToShow: 3, // Default number of cards to show on larger screens
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show only 1 card on small screens (e.g., mobile)
          slidesToScroll: 2, // Scroll 2 cards at a time on small screens
          arrows: false, // Hide arrows on small screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust for smaller screens like tablets
          slidesToScroll: 3, // Scroll 3 cards at a time on medium screens
          arrows: false, // Hide arrows on medium screens
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
    <div className="w-full lg:max-w-7xl mx-auto px-2">
      <div className="flex flex-row justify-between mb-3">
        <h2>Propular Products</h2>
        <button>Show All</button>
      </div>
      <div>
        <Slider {...settings}>
          {products.map((product) => (
            
                  <div key={product.id}  className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-1">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-cover bg-center h-[200px] lg:h-[350px]  p-4" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="flex justify-end">
                  <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-2">
                <p className="uppercase tracking-wide sm:t  text-xs lg:text-lg w-[100%] h-20 mb-1 overflow-hidden font-bold text-gray-700">{product.name}</p>
                <p className="text-3xl text-gray-900">৳{product.price}</p>
                <p className="text-gray-700 text-md">742 Stock</p>
              </div>
              <div className="flex p-4 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                 
                  <p  className="overflow-hidden text-xs lg:text-lg"><span className="text-gray-900 text-xs font-bold overflow-hidden"></span> Checkout</p>
                </div>
                <div className="flex-1 inline-flex items-center">
              
                  <p className="overflow-hidden text-xs lg:text-lg"><span className="text-gray-900 font-bold "></span> Add To Cart</p>
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

export default PopularProducts;