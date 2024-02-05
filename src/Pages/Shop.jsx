import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

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
            <div className="shop_sidebar_area">
              <div className="widget catagory mb-50">
                <div className="nav-side-menu">
                  <h6 className="mb-0">Catagories</h6>
                  <div className="menu-list">
                    <ul
                      id="menu-content2"
                      className="menu-content collapse out"
                    >
                      <li data-toggle="collapse" data-target="#women2">
                        <a href="#">Woman wear</a>
                        <ul className="sub-menu collapse show" id="women2">
                          <li>
                            <a href="#">Midi Dresses</a>
                          </li>
                          <li>
                            <a href="#">Maxi Dresses</a>
                          </li>
                          <li>
                            <a href="#">Prom Dresses</a>
                          </li>
                          <li>
                            <a href="#">Little Black Dresses</a>
                          </li>
                          <li>
                            <a href="#">Mini Dresses</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#man2"
                        className="collapsed"
                      >
                        <a href="#">Man Wear</a>
                        <ul className="sub-menu collapse" id="man2">
                          <li>
                            <a href="#">Man Dresses</a>
                          </li>
                          <li>
                            <a href="#">Man Black Dresses</a>
                          </li>
                          <li>
                            <a href="#">Man Mini Dresses</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#kids2"
                        className="collapsed"
                      >
                        <a href="#">Children</a>
                        <ul className="sub-menu collapse" id="kids2">
                          <li>
                            <a href="#">Children Dresses</a>
                          </li>
                          <li>
                            <a href="#">Mini Dresses</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#bags2"
                        className="collapsed"
                      >
                        <a href="#">Bags Purses</a>
                        <ul className="sub-menu collapse" id="bags2">
                          <li>
                            <a href="#">Bags</a>
                          </li>
                          <li>
                            <a href="#">Purses</a>
                          </li>
                        </ul>{" "}
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#eyewear2"
                        className="collapsed"
                      >
                        <a href="#">Eyewear</a>
                        <ul className="sub-menu collapse" id="eyewear2">
                          <li>
                            <a href="#">Eyewear Style 1</a>
                          </li>
                          <li>
                            <a href="#">Eyewear Style 2</a>
                          </li>
                          <li>
                            <a href="#">Eyewear Style 3</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        data-toggle="collapse"
                        data-target="#footwear2"
                        className="collapsed"
                      >
                        <a href="#">Footwear</a>
                        <ul className="sub-menu collapse" id="footwear2">
                          <li>
                            <a href="#">Footwear 1</a>
                          </li>
                          <li>
                            <a href="#">Footwear 2</a>
                          </li>
                          <li>
                            <a href="#">Footwear 3</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Filter by Price</h6>
                <input type="range" min={0} max="100" value="40" className="range range-secondary" />
              </div>

              <div className="widget color mb-70">
                <h6 className="widget-title mb-30">Filter by Color</h6>
                <div className="widget-desc">
                  <ul className="flex flex-row justify-between gap-2">
                    <li className="gray">
                      <a href="#">
                        <span>(3)</span>
                      </a>
                    </li>
                    <li className="red">
                      <a href="#">
                        <span>(25)</span>
                      </a>
                    </li>
                    <li className="yellow">
                      <a href="#">
                        <span>(112)</span>
                      </a>
                    </li>
                    <li className="green">
                      <a href="#">
                        <span>(72)</span>
                      </a>
                    </li>
                    <li className="teal">
                      <a href="#">
                        <span>(9)</span>
                      </a>
                    </li>
                    <li className="cyan">
                      <a href="#">
                        <span>(29)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="widget size mb-50">
                <h6 className="widget-title mb-30">Filter by Size</h6>
                <div className="widget-desc">
                  <ul className="flex flex-row justify-between gap-3">
                    <li>
                      <a href="#">XS</a>
                    </li>
                    <li>
                      <a href="#">S</a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">L</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                    <li>
                      <a href="#">XXL</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="widget recommended">
                <h6 className="widget-title mb-30">Recommended</h6>

                <div className="widget-desc">
                  <div className="single-recommended-product flex flex-row mb-30">
                    <div className="single-recommended-thumb mr-3">
                      <img
                        src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                        alt=""
                      />
                    </div>
                    <div className="single-recommended-desc">
                      <h6>Men’s T-shirt</h6>
                      <p>$ 39.99</p>
                    </div>
                  </div>
                  <div className="single-recommended-product flex flex-row mb-30">
                    <div className="single-recommended-thumb mr-3">
                      <img
                        src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                        alt=""
                      />
                    </div>
                    <div className="single-recommended-desc">
                      <h6>Blue mini top</h6>
                      <p>$ 19.99</p>
                    </div>
                  </div>
                  <div className="single-recommended-product flex flex-row">
                    <div className="single-recommended-thumb mr-3">
                      <img
                        src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                        alt=""
                      />
                    </div>
                    <div className="single-recommended-desc">
                      <h6>Women’s T-shirt</h6>
                      <p>$ 39.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
