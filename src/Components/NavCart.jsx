import React from 'react'
import {  FaShoppingCart } from "react-icons/fa";
import {AiOutlineNotification } from "react-icons/ai";
function NavCart() {
  return (
    <div>
        <div className="hidden lg:flex justify-between gap-3 ml-20 "> 
  <div className="navbar-end">
   
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
       <AiOutlineNotification className="h-5 w-5"/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
  <div className="dropdown dropdown-end">
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
  </div>
    </div>
  )
}

export default NavCart