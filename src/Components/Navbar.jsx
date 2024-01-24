import React from 'react';
import { MdMenu } from 'react-icons/md';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { MdFastForward, MdOutlineFacebook, MdViewList, MdWhatsapp } from 'react-icons/md'

function Navbar() {
  return (
    <header className="header_area">
      <div className="top_header_area">
        <div className="container h-screen">
          <div className="flex items-center justify-end">

            <div className="">
              <div className="flex flex-row justify-between items-center">
                <div className="top_logo">
                  <h1>Dotpot iT</h1>
                </div>
                <div className="header-cart-menu flex items-center ml-auto">
                  <div className="cart">
                    <a href="#" id="header-cart-btn" target="_blank" className="relative">
                      <span className="cart_quantity bg-red-500 text-white rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">2</span>
                      <i className="ti-bag text-2xl"></i> Your Bag $20
                    </a>
                    <ul className="cart-list">
                      <li>
                        <a href="#" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt="" /></a>
                        <div className="cart-item-desc">
                          <h6><a href="#">Women's Fashion</a></h6>
                          <p>1x - <span className="price">$10</span></p>
                        </div>
                        <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                      </li>
                      {/* Add more list items as needed */}
                      <li className="total">
                        <span className="pull-right">Total: $20.00</span>
                        <a href="cart.html" className="btn btn-sm btn-cart">Cart</a>
                        <a href="checkout-1.html" className="btn btn-sm btn-checkout">Checkout</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-right-side-menu ml-15">
                    <a href="#" id="sideMenuBtn"><i className="ti-menu" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="navbar lg:px-[320px] font-bold ">
  <div className="navbar-start">
    <div className="dropdown">
      <div className='flex flex-row gap-3'>
        <MdFastForward className='text-2xl'/>
        <MdOutlineFacebook className='text-2xl'/>
        <MdWhatsapp className='text-2xl'/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-black font-bold mt-3 z-[1] p-2   rounded-box w-52">
      <li><a>HOME</a></li>
      <li>
        <details>
          <summary>PAGES</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>DRESSES</a></li>
      <li><a>SHOES</a></li>
      <li><a>CONTACT</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>HOME</a></li>
      <li>
        <details>
          <summary>PAGES</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>DRESSES</a></li>
      <li><a>SHOES</a></li>
      <li><a>CONTACT</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="p-3 bg-[#ff084e] text-white">+0880193463748</a>
  </div>
</div>
    </header>
  );
}

export default Navbar;
