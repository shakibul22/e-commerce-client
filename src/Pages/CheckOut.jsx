import React from 'react'

function CheckOut() {
  return (
    <div className="px-2 lg:px-[420px] py-6 lg:py-32">
  
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-5">

            <div className="flex flex-col w-full">
                <div className="checkout_details_area mt-50 ">

                    <div className="cart-page-heading">
                        <h5>Billing Address</h5>
                        <p>Enter your cupone code</p>
                    </div>

                    <form action="#" method="post" className='container'>
                        <div className="flex flex-col w-full ">
                            <div className='flex flex-col lg:flex-row gap-5 '>
                            <div className=" mb-3 w-full">
                                <label for="first_name">First Name <span>*</span></label>
                                <input type="text" className="form-control w-full" id="first_name" value="" required=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="last_name">Last Name <span>*</span></label>
                                <input type="text" className="form-control w-full" id="last_name" value="" required=""/>
                            </div>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="company">Company Name</label>
                                <input type="text" className="form-control w-full" id="company" value=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="country">Country <span>*</span></label>
                                <select className="custom-select flex flex-row gap-2 w-full" id="country">
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ger">Germany</option>
                                <option value="fra">France</option>
                                <option value="ind">India</option>
                                <option value="aus">Australia</option>
                                <option value="bra">Brazil</option>
                                <option value="cana">Canada</option>
                            </select>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="street_address">Address <span>*</span></label>
                                <input type="text" className="form-control w-full mb-3 " id="street_address" value=""/>
                                <input type="text" className="form-control w-full " id="street_address2" value=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="postcode">Postcode <span>*</span></label>
                                <input type="text" className="form-control w-full" id="postcode" value=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="city">Town/City <span>*</span></label>
                                <input type="text" className="form-control w-full" id="city" value=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="state">Province <span>*</span></label>
                                <input type="text" className="form-control w-full" id="state" value=""/>
                            </div>
                            <div className=" mb-3 w-full">
                                <label for="phone_number">Phone No <span>*</span></label>
                                <input type="number" className="form-control w-full" id="phone_number" min="0" value=""/>
                            </div>
                            <div className=" mb-4">
                                <label for="email_address">Email Address <span>*</span></label>
                                <input type="email" className="form-control w-full" id="email_address" value=""/>
                            </div>

                            <div className="">
                                <div className="custom-control custom-checkbox flex flex-row gap-2 mb-2">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" for="customCheck1">Terms and conitions</label>
                                </div>
                                <div className="custom-control custom-checkbox flex flex-row gap-2 mb-2">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                    <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                </div>
                                <div className="custom-control custom-checkbox flex flex-row gap-2">
                                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                    <label className="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="  w-full">
                <div className="order-details-confirmation">

                    <div className="cart-page-heading">
                        <h5>Your Order</h5>
                        <p>The Details</p>
                    </div>

                    <ul className="order-details-form mb-4">
                        <li><span>Product</span> <span>Total</span></li>
                        <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                        <li><span>Subtotal</span> <span>$59.90</span></li>
                        <li><span>Shipping</span> <span>Free</span></li>
                        <li><span>Total</span> <span>$59.90</span></li>
                    </ul>


                    <div id="accordion" role="tablist" className="mb-4">
                        <div className="card">
                            <div className="card-header" role="tab" id="headingOne">
                                <h6 className="mb-0">
                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i className="fa fa-circle-o mr-3"></i>Paypal</a>
                                </h6>
                            </div>

                            <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="headingTwo">
                                <h6 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-circle-o mr-3"></i>cash on delievery</a>
                                </h6>
                            </div>
                            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="headingThree">
                                <h6 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-circle-o mr-3"></i>credit card</a>
                                </h6>
                            </div>
                            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="headingFour">
                                <h6 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><i className="fa fa-circle-o mr-3"></i>direct bank transfer</a>
                                </h6>
                            </div>
                            <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="btn karl-checkout-btn">Place Order</a>
                </div>
            </div>

        </div>
   
</div>
  )
}

export default CheckOut