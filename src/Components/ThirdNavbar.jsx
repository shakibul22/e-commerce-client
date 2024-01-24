import React from 'react'

function ThirdNavbar() {
  return (
    <section className="top-discount-area flex flex-col md:flex-row lg:flex-row align-items-center">
   
    <div className="single-discount-area">
        <h5>Free Shipping &amp; Returns</h5>
        <h6><a href="#">BUY NOW</a></h6>
    </div>
   
    <div className="single-discount-area">
        <h5>20% Discount for all dresses</h5>
        <h6>USE CODE: Colorlib</h6>
    </div>
  
    <div className="single-discount-area">
        <h5>20% Discount for students</h5>
        <h6>USE CODE: Colorlib</h6>
    </div>
</section>
  )
}

export default ThirdNavbar