import React from "react";
import Testimonials from "../../Components/Testimonials";
import Discount from "../../Components/Discount";
import TopCategory from "../../Components/TopCategory";
import NewArrivals from "../../Components/NewArrivals";
import Banner from "../../Components/Banner";
import Cart from "../Cart";

function Home() {
  return (
    <div>
      <Banner />
      <TopCategory />
      <NewArrivals />
      <Discount />
      <Testimonials />
      <Cart />
    </div>
  );
}

export default Home;
