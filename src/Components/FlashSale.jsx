import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Import Link from React Router

const initialProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      discount: 10,
      stock: 20,
      brand: 'Brand A',
      image: 'https://images.pexels.com/photos/19278983/pexels-photo-19278983/free-photo-of-portrait-of-woman-wearing-red-sari.jpeg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'Product 2',
      price: 75,
      discount: 15,
      stock: 15,
      brand: 'Brand B',
      image: 'https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg', // Replace with actual image URL
    },
    // Add more products as needed
  ];

function FlashSale() {
    const [products, setProducts] = useState(initialProducts);
    const [showAll, setShowAll] = useState(false);
  
    const toggleShowMore = () => {
      setShowAll(!showAll);
    };
  
    return (
      <div className="p-4 w-full lg:max-w-7xl mx-auto py-12 my-6">
        <div className="flex flex-row justify-between mb-4">
          <h2 className="text-2xl font-bold mb-2">Flash Sale!</h2>
          <div>
            {products.length > 3 && (
              <button
                className="mt-4 bg-[#009DE4] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={toggleShowMore}
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        </div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation
            
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1928: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            rewind={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.slice(0, showAll ? products.length : 5).map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="mb-4  rounded-md cursor-pointer hover:shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mb-2 rounded-md w-full h-40  lg:h-[400px] object-cover"
                    />
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600">Price: ৳{product.price}</p>
                    <p className="text-gray-600">Discount: {product.discount}%</p>
                    <p className="text-gray-600">Stock: {product.stock}</p>
                    <p className="text-gray-600">Brand: {product.brand}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    );
  }
  
  export default FlashSale;