import React from "react";
import { MdMenu } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import {
  MdFastForward,
  MdOutlineFacebook,
  MdViewList,
  MdWhatsapp,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header_area">
   

      <div className="navbar lg:px-[320px] font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="flex flex-row gap-3">
              <MdFastForward className="text-2xl" />
              <MdOutlineFacebook className="text-2xl" />
              <MdWhatsapp className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black font-bold mt-3 z-[1] p-2   rounded-box w-52"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <details>
                  <summary>PAGES</summary>
                  <ul className="p-2 w-[250px]">
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                    <Link to="/productDetails">Product Details</Link>
                    </li>
                    <li>
                    <Link to="/checkout">Check-Out</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>DRESSES</a>
              </li>
              <li>
                <a>SHOES</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <details>
                <summary>PAGES</summary>
                <ul className="p-2 w-[250px]">
                <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                    <Link to="/productDetails">Product Details</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Check-Out</Link>
                    </li>
                </ul>
              </details>
            </li>
            <li>
              <a>DRESSES</a>
            </li>
            <li>
              <a>SHOES</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
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
