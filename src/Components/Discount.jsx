import React from 'react';

function Discount() {
  return (
    <div>
      <section className="offer_area height-700 section_padding_100 bg-img" style={{ backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706097602/discount_mhbw0g.jpg)' }}>
        <div className="container h-100">
          <div className="row h-100 flex items-end justify-end">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="offer-content-area wow fadeInUp" data-wow-delay="1s">
                <h2>White t-shirt <span className="karl-level">Hot</span></h2>
                <p>* Free shipping until 25 Dec 2017</p>
                <div className="offer-product-price">
                  <h3><span className="regular-price">$25.90</span> $15.90</h3>
                </div>
                <a href="#" className="btn btn-outline text-white mt-30">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discount;
