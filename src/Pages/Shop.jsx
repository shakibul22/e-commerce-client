import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Filter from "../Components/Filter";

function Shop() {

    const productData = [
        {
          id: 1,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        {
          id: 2,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        {
          id: 3,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        {
          id: 4,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        {
          id: 5,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        {
          id: 6,
          imageSrc: 'https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg',
          price: '$39.90',
          description: 'Jeans midi cocktail dress',
        },
        // Add more products as needed
      ];
  return (
    <div>
      <section className=" px-2 lg:px-[420px] py-6 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-11">
          <div className="flex flex-row justify-between  gap-2">
           <Filter/>
          </div>

        


          <div className="">
      <div className="shop_grid_product_area">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-4">
          {/* Map over the productData array to generate product cards */}
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between gap-2 single_gallery_item wow fadeInUpBig"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUpBig",
              }}
            >
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
                {/* Add other components as needed */}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination section */}
        <div
          className="flex flex-col justify-between gap-2 single_gallery_item wow fadeInUpBig"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUpBig",
          }}
        >
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-sm flex flex-row">
              <li className="page-item active">
                <a className="page-link" href="#">
                  01
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  02
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  03
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
