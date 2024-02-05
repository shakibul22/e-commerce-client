import React, { useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Drawer from "./Drawer";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import NavCart from "./NavCart";
import NavSearch from "./NavSearch";
import { Link } from "react-router-dom";
function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return <>
     <div className="navbar fixed z-40 bg-info px-2 lg:px-[150px] py-3">
      <div className="navbar-start hidden lg:block">
        <img src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1707059272/logop-removebg-preview_j1rwwf.png" alt="" className="h-20 w-30" />

      </div>
      <div className="navbar-center hidden lg:flex justify-between gap-8">
    <ul className="menu menu-horizontal px-1">
      <li className="mr-8"><Link to='/'>Home</Link></li>
      <li className="mr-8">
        <details>
          <summary>Categories</summary>
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
     
    </ul>
  </div>
  
     <div className="drawer lg:hidden overflow-hidden">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn rounded-full btn-info drawer-button">
          {isDrawerOpen ?  <IoClose className="text-3xl" /> :   <RiMenuUnfoldFill className="text-3xl"/>}
        </label>
      </div>
      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </div>
 <NavSearch/>

    <NavCart/>
  
  <div className="navbar-end hidden lg:block ml-8">
    <a className="">SignUp</a>
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
  </>;
}

export default Navbar;

