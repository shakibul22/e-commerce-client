import React from 'react'

function ProductDetails() {
  return (
    <div>
        <div className="breadcumb_area">
            <div className="container">
                <div className="flex flex-row   ">
                    <div className="flex flex-col">
                        <ol className="breadcrumb flex flex-row">
                            <li className="breadcrumb-item"><a href="#">Home/</a></li>
                            <li className="breadcrumb-item"><a href="#">Dresses/</a></li>
                            <li className="breadcrumb-item active">Long Dress</li>
                        </ol>
                        <a href="#" className="backToHome d-block"><i className="fa fa-angle-double-left"></i> Back to Category</a>
                    </div>
                </div>
                <section className="">
          
                <div className="flex flex-col lg:flex-row">

                    <div className="flex flex-col ">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                            <ol className="carousel-indicators">
    <li className="" data-target="#product_details_slider" data-slide-to="0" style={{backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg)'}}>
    </li>
    <li data-target="#product_details_slider" data-slide-to="1" style={{backgroundImage: 'url(https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg)'}} className="">
    </li>
    <li data-target="#product_details_slider" data-slide-to="2" style={{backgroundImage: 'url(img/product-img/product-3.jpg)'}} className="active">
    </li>
    <li data-target="#product_details_slider" data-slide-to="3" style={{backgroundImage: 'url(img/product-img/product-4.jpg)'}} className="">
    </li>
</ol>


                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <a className="gallery_img" href="">
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg" alt="First slide"/>
                                    </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a className="gallery_img" href="">
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-3_ge8nam.jpg" alt="Second slide"/>
                                    </a>
                                    </div>
                                    <div className="carousel-item active">
                                        <a className="gallery_img" href="img/product-img/product-3.jpg">
                                        <img className="d-block w-100" src="img/product-img/product-3.jpg" alt="Third slide"/>
                                    </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a className="gallery_img" href="img/product-img/product-4.jpg">
                                        <img className="d-block w-100" src="img/product-img/product-4.jpg" alt="Fourth slide"/>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col col-md-6">
                        <div className="single_product_desc">

                            <h4 className="title"><a href="#">Long Yellow Dress</a></h4>

                            <h4 className="price">$ 39.99</h4>

                            <p className="available">Available: <span className="text-muted">In Stock</span></p>

                            <div className="single_product_ratings mb-15">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </div>

                            <div className="widget size mb-50">
                                <h6 className="widget-title">Size</h6>
                                <div className="widget-desc">
                                    <ul>
                                        <li><a href="#">32</a></li>
                                        <li><a href="#">34</a></li>
                                        <li><a href="#">36</a></li>
                                        <li><a href="#">38</a></li>
                                        <li><a href="#">40</a></li>
                                        <li><a href="#">42</a></li>
                                    </ul>
                                </div>
                            </div>

                        
                            <form className="cart clearfix mb-50 d-flex" method="post">
                                <div className="quantity">
                                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
                                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1"/>
                                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                                <button type="submit" name="addtocart" value="5" className="btn cart-submit d-block">Add to cart</button>
                            </form>

                            <div id="accordion" role="tablist">
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne">
                                        <h6 className="mb-0">
                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Information</a>
                                        </h6>
                                    </div>

                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                            <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres</p>
                                            <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo">
                                        <h6 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Cart Details</a>
                                        </h6>
                                    </div>
                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos nemo, nulla quaerat. Quibusdam non, eos, voluptatem reprehenderit hic nam! Laboriosam, sapiente! Praesentium.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magnam laborum eaque.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree">
                                        <h6 className="mb-0">
                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">shipping &amp; Returns</a>
                                        </h6>
                                    </div>
                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae, tempore maxime rerum iste dolorem mollitia perferendis distinctio. Quibusdam laboriosam rerum distinctio. Repudiandae fugit odit, sequi id!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui maxime consequatur laudantium temporibus ad et. A optio inventore deleniti ipsa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
       
        </section>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails