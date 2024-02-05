// Import React and useState
import React, { useState } from "react";
// Import AiOutlinePlus icon
import { AiOutlinePlus } from "react-icons/ai";

// TabComponent component
function TabComponent({ label, isActive, onClick }) {
  return (
    <a
      role="tab"
      className={`tab ${isActive ? "tab-active [--tab-bg:#009DE4] [--tab-border-color:#009DE4] text-white" : ""}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

// ProductGalleryItem component
const ProductGalleryItem = ({ image, name, price }) => (
  <div className="mb-2 sm:mb-0">
    <div className="single_gallery_item shadow-xl">
      <div className="product-img p-2">
        <img className="w-full lg:w-[20vh] h-[400px] lg:h-[55vh] " src={image} alt={name} />
        <div className="product-quicview">
          <a href="#" data-toggle="modal" className="flex justify-center items-center" data-target="#quickview">
            <AiOutlinePlus />
          </a>
        </div>
      </div>
      <div className="product-description p-2 mt-4">
        <p className="">{price}</p>
        <p className="font-bold ">{name}</p>
        <a href="#" className="text-btnbg py-2 rounded-full inline-block mt-3">
          ADD TO CART
        </a>
      </div>
    </div>
  </div>
);

// NewArrivals component
const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: "ALL",
      products: [
        { name: "Product 3", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg", price: "৳39.99" },
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg", price: "৳19.99" },
        { name: "Product 6", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg", price: "৳69.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "৳29.99" },
        { name: "Product 5", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-5_cl96ka.jpg", price: "৳59.99" },
        { name: "Product 4", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-6_oo3hya.jpg", price: "৳49.99" },
      ],
    },
    {
      label: "WOMAN",
      products: [
        { name: "Product 3", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg", price: "৳39.99" },
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg", price: "৳19.99" },
        { name: "Product 6", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-2_im20vg.jpg", price: "৳69.99" },
        { name: "Product 2", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "৳29.99" },
        { name: "Product 5", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-5_cl96ka.jpg", price: "৳59.99" },
      ],
    },
    {
      label: "MAN",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-6_oo3hya.jpg", price: "৳19.99" },
       
      ],
    },
    {
      label: "ACCESSORIES",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "৳19.99" },
    
      ],
    },
    {
      label: "SHOES",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "৳19.99" },
       
      ],
    },
    {
      label: "KIDS",
      products: [
        { name: "Product 1", image: "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg", price: "৳19.99" },
     
      ],
    },
    // Include similar data for other tabs
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="new_arrivals_area mt-16">
      <div className="container mx-auto">
        <div className="section_heading text-center">
          <h2>New Arrivals</h2>
        </div>

        <div>
          <div role="tablist" className="tabs tabs-lifted flex flex-wrap  lg:flex-row justify-center  mb-16">
            {tabsData.map((tab, index) => (
              <TabComponent
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3 max-w-7xl mx-auto">
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