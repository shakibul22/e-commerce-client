import React from "react";
import Testimonials from "../../Components/Testimonials";
import Discount from "../../Components/Discount";
import TopCategory from "../../Components/TopCategory";
import NewArrivals from "../../Components/NewArrivals";
import Banner from "../../Components/Banner";
import BestSellingProduct from "../../Components/BestSellingProduct";
import SayHello from "../../Components/SayHello";
import PopupModal from "../../Components/PopupModal";

function Home() {

  return (
    <div>
      <PopupModal />
      <Banner />
      <TopCategory />
      <NewArrivals />
      <BestSellingProduct />
      <Discount />
      <SayHello  />
    

      <Testimonials />
    </div>
  );
}

export default Home;
