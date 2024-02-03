import React from 'react';

function TopCategory() {
  return (
    <div>
      <section className="top_catagory_area flex flex-col lg:flex-row ">
        <div className="single_catagory_area d-flex align-items-center bg-bgColor" style={{backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104258/chosma_gt7onn.jpg)'}}>
          <div className="catagory-content">
            <h6>On Accessories</h6>
            <h2>Sale 30%</h2>
            <a href="#" className="btn btn-outline ">SHOP NOW</a>
          </div>
        </div>
        <div className="single_catagory_area d-flex align-items-center bg-img" style={{backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706104266/cutegirl_jow5dj.jpg)'}}>
          <div className="catagory-content">
            <h6>In Bags excepting the new collection</h6>
            <h2>Designer bags</h2>
            <a href="#" className="btn btn-outline ">SHOP NOW</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopCategory;
