

export default function Cart() {
  return (
    <div className="cart_area px-2 lg:px-[420px] my-14">

        <div className="row">
            <div className="col-12">
                <div className="cart-table ">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=" flex flex-col lg:flex-row  items-center gap-2">
                                    <a href="#"><img className="w-20 h-auto" src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-9_wifsng.jpg" alt="Product"/></a>
                                    <h6>Yellow Cocktail Dress</h6>
                                </td>
                                <td className="price"><span>$49.88</span></td>
                                <td className="qty">
                                    <div className="quantity">
                                       +1-
                                    </div>
                                </td>
                                <td className="total_price"><span>$49.88</span></td>
                            </tr>
                            <tr>
                                <td className=" flex flex-col lg:flex-row  items-center gap-2">
                                    <a href="#"><img className="w-20 h-auto" src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-9_wifsng.jpg" alt="Product"/></a>
                                    <h6>Yellow Cocktail Dress</h6>
                                </td>
                                <td className="price"><span>$49.88</span></td>
                                <td className="qty">
                                <div className="quantity">
                                       +1-
                                    </div>
                                </td>
                                <td className="total_price"><span>$49.88</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="cart-footer flex flex-col lg:flex-row justify-between mt-30">
                    <div className="back-to-shop w-50">
                        <a href="shop-grid-left-sidebar.html">Continue shooping</a>
                    </div>
                    <div className="update-checkout w-50 text-right">
                        <a href="#">clear cart</a>
                        <a href="#">Update cart</a>
                    </div>
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row">
                <div className="coupon-code-area mt-70">
                    <div className="cart-page-heading">
                        <h5>Cupon code</h5>
                        <p>Enter your cupone code</p>
                    </div>
                    <form action="#">
                        <input className=" border py-3 px-9" type="search" name="search" placeholder="#569ab15"/>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="shipping-method-area mt-70">
                    <div className="cart-page-heading">
                        <h5>Shipping method</h5>
                        <p>Select the one you want</p>
                    </div>

                    <div className="custom-control custom-radio flex flex-row gap-2 mb-30">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label flex flex-row  items-center justify-between gap-16 lg:gap-32" ><span>Next day delivery</span><span>$4.99</span></label>
                    </div>

                    <div className="custom-control custom-radio flex flex-row gap-2 mb-30">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label flex flex-row  items-center justify-between gap-16 lg:gap-32" ><span>Standard delivery</span><span>$1.99</span></label>
                    </div>

                    <div className="custom-control custom-radio flex flex-row gap-2">
                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label flex flex-row  items-center justify-between gap-16 lg:gap-32" ><span>Personal Pickup</span><span>Free</span></label>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="cart-total-area mt-70">
                    <div className="cart-page-heading">
                        <h5>Cart total</h5>
                        <p>Final info</p>
                    </div>

                    <ul className="cart-total-chart">
                        <li className="flex flex-row justify-between gap-16 lg:gap-32"><span>Subtotal</span> <span>$59.90</span></li>
                        <li className="flex flex-row justify-between gap-16 lg:gap-32"><span>Shipping</span> <span>Free</span></li>
                        <li className="flex flex-row justify-between gap-16 lg:gap-32"><span><strong>Total</strong></span> <span><strong>$59.90</strong></span></li>
                    </ul>
                    <a href="checkout.html" className="btn karl-checkout-btn">Proceed to checkout</a>
                </div>
            </div>
        </div>
    
</div>
  )
}
