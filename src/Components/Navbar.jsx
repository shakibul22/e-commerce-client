import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Drawer from "./Drawer";
import { IoClose } from "react-icons/io5";
import NavCart from "./NavCart";
import NavSearch from "./NavSearch";
import { Link, NavLink } from "react-router-dom";
import NavCategory from "./NavCategory";
import { AiOutlineNotification } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="navbar flex flex-row justify-between items-center sm:gap-2 md:gap-3 lg:gap-5 fixed z-40 bg-info px-2 lg:px-[150px] py-3">
        <div className="navbar-start lg:flex hidden lg:justify-between gap-3">
          <img
            src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1707059272/logop-removebg-preview_j1rwwf.png"
            alt=""
            className="h-20 w-34"
          />
            <div
                      className="text-gray-700  px-4 py-2 hidden lg:block text-lg active "
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      {" "}
                      <NavLink to="/">Home</NavLink>

                    </div>
     
        <div className="navbar hidden lg:flex justify-between gap-8">
          <NavCategory />
         
        </div>

       
        </div>
        <div className="drawer text-sm lg:hidden overflow-hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggleDrawer}
          />
          <div className="drawer-content ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn rounded-full btn-info drawer-button"
            >
              {isDrawerOpen ? (
                <IoClose className="text-3xl" />
              ) : (
                <RiMenuUnfoldFill className="text-3xl" />
              )}
            </label>
          </div>
          {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
        </div>
        <NavSearch />

     
  <div className="navbar-end hidden lg:flex justify-between lg:flex-row">
   
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
       <AiOutlineNotification className="h-5 w-5"/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div className="dropdown dropdown-end hidden lg:block">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
         <FaShoppingCart className="h-5 w-5"/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>

    </div>

        <div className="navbar-end hidden lg:flex justify-between lg:flex-row">
          <a className="">SignUp</a>
        </div>
      
  </div>
  <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/orderTracker">Order Track</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
