import React from 'react';
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';

function Header() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: 'url("https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706021757/bg-1_tibpek.jpg")' }}>
      <Navbar />
      <SecondNavbar/>
    </div>
  );
}

export default Header;
