import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import RelatedProducts from "../Components/RelatedProducts";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Discount from "../Components/Discount";
import { Reviews } from "../Components/Reviews";
function ProductDetails() {
  const [rating, setRating] = useState(0);

  const handleClick = (newRating) => {
    setRating(newRating === rating ? 0 : newRating);
  };

  const images = [
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
    "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg",
  ];

  return (
    <div>
      <div className="px-2 lg:px-[420px] py-6 lg:py-32">
        <div className="flex flex-row   ">
          <div className="flex flex-col">
            <ol className="breadcrumb flex flex-row">
              <li className="breadcrumb-item">
                <a href="#">Home/</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Dresses/</a>
              </li>
              <li className="breadcrumb-item active">Long Dress</li>
            </ol>
            <a href="#" className="backToHome d-block">
              <i className="fa fa-angle-double-left"></i> Back to Category
            </a>
          </div>
        </div>

        <section className="">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row  justify-between gap-5">
              <div className="w-full lg:w-[55vh] h-auto ">
                <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
                  {Array.isArray(images) &&
                    images.map((image, index) => (
                      <div key={index}>
                        <img
                          className="  "
                          src={image}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="single_product_desc w-full">
                <h4 className="title">
                  <a href="#">Long Yellow Dress</a>
                </h4>

                <h4 className="price">৳ 39.99</h4>

                <p className="available">
                  Available: <span className="text-muted">In Stock</span>
                </p>

                <div className="flex pb-4">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <FaRegStar
                      key={index}
                      className={`text-2xl text-yellow-500 cursor-pointer ${
                        index <= rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      onClick={() => handleClick(index)}
                    />
                  ))}
                </div>

                <div className="widget size mb-5 lg:mb-50">
                  <h6 className="widget-title mb-2">Size</h6>
                  <div className="widget-desc ">
                    <ul>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">32</a>
                      </li>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">34</a>
                      </li>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">36</a>
                      </li>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">38</a>
                      </li>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">40</a>
                      </li>
                      <li className="mx-1 lg:mx-2">
                        <a href="#">42</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <form
                  className="cart clearfix mb-5 lg:mb-50 d-flex"
                  method="post"
                >
                  <div className="flex items-center">
                    <button
                      className="bg-btnbg text-white px-4 py-2 mx-1 lg:mx-2 rounded-l"
                      onClick="updateQuantity(-1)"
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="number"
                      className="border px-4 py-1 text-center rounded"
                      id="qty"
                      step="1"
                      min="1"
                      max="12"
                      name="quantity"
                      value="1"
                      readOnly
                    />
                    <button
                      className="bg-btnbg text-white px-4 py-2 mx-1 lg:mx-2 rounded-r "
                      onClick="updateQuantity(1)"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <button
                    type="submit"
                    name="addtocart"
                    value="5"
                    className="bg-btnbg px-3 py-2 mt-2 rounded-sm text-white ml-9 lg:ml-14"
                  >
                    Add to cart
                  </button>
                </form>

                <div>
                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo">
                      <h6 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Cart Details
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body text-justify">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo quis in veritatis officia inventore,
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia magnam laborum eaque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reviews />

        <RelatedProducts />
      </div>
    </div>
  );
}

export default ProductDetails;
