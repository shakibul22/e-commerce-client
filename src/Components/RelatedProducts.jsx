import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlinePlus } from 'react-icons/ai';

function RelatedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows:false
  };

  const products = [
    // Add your product data here
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
      price: '$39.90',
      description: 'Jeans midi cocktail dress',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1 className="text-center text-2xl py-6">Related Products</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="product-img">
              <img src={product.imageSrc} alt="" />
              <div className="product-quicview">
                <a href="#" data-toggle="modal" data-target="#quickview">
                  <div className="product-quicview">
                    <a
                      href="#"
                      data-toggle="modal"
                      className="flex justify-center items-center"
                      data-target="#quickview"
                    >
                      <AiOutlinePlus />{' '}
                    </a>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-description">
              <h4 className="product-price">{product.price}</h4>
              <p>{product.description}</p>
            
              <a href="#" className="add-to-cart-btn">
                ADD TO CART
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RelatedProducts;
