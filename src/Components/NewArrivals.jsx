import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
function TabComponent({ label, isActive, onClick }) {
    return (
      <a
        role="tab"
        className={`tab ${isActive ? "tab-active [--tab-bg:red] [--tab-border-color:red] text-white" : ""}`}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

const ProductGalleryItem = ({ image, name, price }) => (
  <div className=" mb-8 sm:mb-0">
    <div className="single_gallery_item wow fadeInUpBig">
      <div className="product-img">
        <img className="w-[20vh] h-[55vh]" src={image} alt={name} />
        <div className="product-quicview">
          <a href="#" data-toggle="modal" className="flex justify-center items-center" data-target="#quickview"><AiOutlinePlus /> </a>
        </div>
      </div>
      <div className="product-description  mt-4">
        <p className="text-gray-700">{price}</p>
        <p className="font-bold">{name}</p>
        <a href="#" className=" text-red-400   py-2 rounded-full inline-block mt-6">ADD TO CART</a>
      </div>
    </div>
  </div>
);

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: "ALL",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$39.99" },
        { name: "Product 4", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$49.99" },
        { name: "Product 5", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$59.99" },
        { name: "Product 6", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$69.99" },
      ],
    },
    {
      label: "WOMAN",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "image3.jpg", price: "$39.99" },
        { name: "Product 4", image: "image4.jpg", price: "$49.99" },
        { name: "Product 5", image: "image5.jpg", price: "$59.99" },
        { name: "Product 6", image: "image6.jpg", price: "$69.99" },
      ],
    },
    {
      label: "MAN",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "image3.jpg", price: "$39.99" },
        { name: "Product 4", image: "image4.jpg", price: "$49.99" },
        { name: "Product 5", image: "image5.jpg", price: "$59.99" },
        { name: "Product 6", image: "image6.jpg", price: "$69.99" },
      ],
    },
    {
      label: "ACCESSORIES",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "image3.jpg", price: "$39.99" },
        { name: "Product 4", image: "image4.jpg", price: "$49.99" },
        { name: "Product 5", image: "image5.jpg", price: "$59.99" },
        { name: "Product 6", image: "image6.jpg", price: "$69.99" },
      ],
    },
    {
      label: "SHOES",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "image3.jpg", price: "$39.99" },
        { name: "Product 4", image: "image4.jpg", price: "$49.99" },
        { name: "Product 5", image: "image5.jpg", price: "$59.99" },
        { name: "Product 6", image: "image6.jpg", price: "$69.99" },
      ],
    },
    {
      label: "KIDS",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$19.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "$29.99" },
        { name: "Product 3", image: "image3.jpg", price: "$39.99" },
        { name: "Product 4", image: "image4.jpg", price: "$49.99" },
        { name: "Product 5", image: "image5.jpg", price: "$59.99" },
        { name: "Product 6", image: "image6.jpg", price: "$69.99" },
      ],
    },
    // Include similar data for other tabs
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="new_arrivals_area">
      <div className="container mx-auto">
        <div className="section_heading text-center">
          <h2>New Arrivals</h2>
        </div>

        <div>
          <div role="tablist" className="tabs tabs-lifted  max-w-2xl mx-auto mb-24">
            {tabsData.map((tab, index) => (
              <TabComponent
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto ">
            {tabsData[activeTab].products.map((product, index) => (
              <ProductGalleryItem key={index} image={product.image} name={product.name} price={product.price} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
