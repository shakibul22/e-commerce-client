import React from 'react'


function SecondNavbar() {
  return (
    <div className="top_header_area">
    <div className="container h-screen">
      <div className=" px-5">
        <div className="flex flex-row justify-between items-center">
          <div className="top_logo lg:ml-[40%] ">
            <h1 className="text-xl">Dotpot iT</h1>
          </div>
          <div className="header-cart-menu  ml-auto">
            <div className="cart flex  flex-row items-center">
              <a
                href="#"
                target="_blank"
                className="relative flex flex-row  items-center gap-1"
              >
                <span className="cart_quantity bg-red-500 text-white rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  2
                </span>
                <MdShoppingCartCheckout className="text-2xl" />
              </a>
               <p> Your Bag $20</p>
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content ">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="drawer-button "
                  >
                    <MdMenu />{" "}
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu  p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <a>Women's Fashion</a>
                    </li>
                    <li>
                      <a>10$</a>
                    </li>
                    <li className="total">
                      <span className="pull-right">Total: $20.00</span>
                      <a href="cart.html" className="btn btn-sm btn-cart">
                        Cart
                      </a>
                      <a
                        href="checkout-1.html"
                        className="btn btn-sm btn-checkout"
                      >
                        Checkout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecondNavbar