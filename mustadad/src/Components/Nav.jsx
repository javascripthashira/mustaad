import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white w-full px-6 py-4 flex items-center justify-between z-10 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/logo1.png" alt="Logo" className="h-10" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Nav Links - Desktop */}
      <ul className="hidden md:flex gap-6 text-lg font-bold">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
      </ul>

      {/* Buttons - Desktop */}
      <div className="hidden md:flex gap-3">
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-2xl">Sign In</button>
        <button className="border border-white text-white font-bold px-4 py-2 rounded-2xl">Contact Us</button>
      </div>

      {/* Dropdown Menu - Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-transparent text-white mt-2 flex flex-col gap-4 p-4 backdrop-blur">
          <ul className="flex flex-col gap-3 text-base font-semibold">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-2xl">Sign In</button>
            <button className="border border-white text-white font-bold px-4 py-2 rounded-2xl">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
