import React from "react";
import Testimonials from "../../Components/Testimonials";
import Discount from "../../Components/Discount";
import TopCategory from "../../Components/TopCategory";
import NewArrivals from "../../Components/NewArrivals";
import Banner from "../../Components/Banner";

function Home() {
  return (
    <div>
      <Banner />
      <TopCategory />
      <NewArrivals />
      <Discount />
      <Testimonials />
    </div>
  );
}

export default Home;
