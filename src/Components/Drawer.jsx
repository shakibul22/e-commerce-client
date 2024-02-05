import React from "react";
import { FaCartPlus, FaExpand, FaExpandAlt, FaHome, FaShoppingBag, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

function Drawer({ onClose }) {
  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
  };

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
          <Link to="/shop" onClick={handleLinkClick}>
          <FaHome/><span className="text-lg font-medium hover:text-cyan-500">Home</span> 
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={handleLinkClick}>
          <FaShoppingBag/><span className="text-lg font-medium hover:text-cyan-500">Shop</span> 
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={handleLinkClick}>
          <FaCartPlus/><span className="text-lg font-medium hover:text-cyan-500">Cart</span> 
          </Link>
        </li>
        <li>
          <Link to="/productDetails" onClick={handleLinkClick}>
          <FaExpand/><span className="text-lg font-medium hover:text-cyan-500">Product Details</span> 
          </Link>
        </li>
        <li>
          <Link to="/checkout" onClick={handleLinkClick}>
          <FaWallet/><span className="text-lg font-medium hover:text-cyan-500">Check-Out</span> 
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
