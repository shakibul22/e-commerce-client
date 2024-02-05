import React from "react";
import { Link } from "react-router-dom";

function Drawer({ onClose }) {
  return (
    <div className="drawer-side  z-50 mt-16 overflow-y-auto min-h-screen">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={onClose}
      ></label>
      <div className="flex justify-end p-2">
        {/* Additional content if needed */}
      </div>
      <ul className="menu p-4 w-80 min-h-full bg-[#d7dee6] text-white">
        {/* Sidebar content here */}
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
    </div>
  );
}

export default Drawer;
