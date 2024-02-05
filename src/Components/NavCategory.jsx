import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavCategory() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  const handleDropdownClick = (event) => {
    // Prevent closing when clicking on links inside the dropdown
    event.stopPropagation();
  };

  return (
    <div>
      <ul className="menu menu-horizontal px-1">
        <li className="mr-8">
          <details
            open={isDropdownOpen}
            onClick={handleToggleDropdown}
            onClickCapture={handleDropdownClick} // Handle click inside the dropdown
          >
            <summary className='font-medium text-lg'>Categories</summary>
            <div
              ref={dropdownRef}
              className="absolute right-0 z-10 mt-2 w-[35vh] origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <li
                  className="px-4 py-2 text-sm hover:text-cyan-600"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <Link
                    className='hover:text-cyan-800 font-medium'
                    to="/shop"
                    onClick={handleLinkClick}
                  >
                    Shop
                  </Link>
                </li>
                <li
                  className="px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  <Link
                    className='hover:text-cyan-800 font-medium'
                    to="/cart"
                    onClick={handleLinkClick}
                  >
                    Cart
                  </Link>
                </li>
                <li
                  className="px-4 py-2 text-sm hover:text-cyan-600"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  <Link
                    className='hover:text-cyan-800 font-medium'
                    to="/productDetails"
                    onClick={handleLinkClick}
                  >
                    Product Details
                  </Link>
                </li>
                <li
                  className="px-4 py-2 text-sm hover:text-cyan-600"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  <Link
                    className='hover:text-cyan-800 font-medium'
                    to="/checkout"
                    onClick={handleLinkClick}
                  >
                    Check-Out
                  </Link>
                </li>
              </div>
            </div>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default NavCategory;
