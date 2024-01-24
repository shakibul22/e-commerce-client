import React from 'react'
import { MdFastForward, MdOutlineFacebook, MdViewList, MdWhatsapp } from 'react-icons/md'

function SecondNavbar() {
  return (
    <div className="navbar px-[320px] font-bold ">
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
  )
}

export default SecondNavbar