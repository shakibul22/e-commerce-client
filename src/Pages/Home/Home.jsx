import React from "react";
import Testimonials from "../../Components/Testimonials";
import Discount from "../../Components/Discount";
import TopCategory from "../../Components/TopCategory";
import NewArrivals from "../../Components/NewArrivals";
import Banner from "../../Components/Banner";
import FlashSale from "../../Components/FlashSale";
import FeaturedProducts from "../../Components/FeaturedProducts";
import PopularProducts from "../../Components/PopularProducts";

function Home() {
  return (
    <div>
      <Banner />
      <TopCategory   />
      <NewArrivals />
      <FlashSale/>
      <FeaturedProducts/>
      <PopularProducts/>
      <Discount />
      <Testimonials />
    </div>
  );
}

export default Home;
