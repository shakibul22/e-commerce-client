import React from 'react'
import { MdMenu } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
function Navbar() {
  return (
    <div className="navbar  py-4 px-2 md:px-[20px] lg:px-[320px]">
   
   <div className="flex-1">
  <a className="btn btn-ghost text-xl ml-[500px] tracking-widest underline"> K A R L</a> <br />
  
  <h7 className='tracking-widest'>Fashion</h7>
</div>


   
    <div className="flex-none">
        <div className='flex flex-row justify-between gap-2 items-center mr-2 text-xl'>
            <MdShoppingCartCheckout/>
            <p>cart</p>
        </div>
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-outline bg-black rounded-full  text-white text-2xl drawer-button"><MdMenu/></label>
   
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <div className='flex flex-row justify-between'>
    <h3>Categories</h3>
    
    </div>

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
     
    </div>
  </div>
  )
}

export default Navbar