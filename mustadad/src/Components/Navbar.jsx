import React, { useState } from "react";

const Navbar = ({ className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`text-white p-5 flex justify-between items-center w-full ${className}`}>

     {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-lg font-semibold">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PROJECT</span>
        <span>CONTACT US</span>
      </div>
     
      {/* LOGO */}
      <div className="text-2xl font-bold flex items-center gap-3">
        <img src="logo.png" className="w-30 h-20" />
      
      </div>

      

      {/* MOBILE HAMBURGER */}
      <button 
        onClick={() => setOpen(!open)} 
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="absolute top-20 right-5 bg-[#1f2a60] text-white p-5 rounded-xl shadow-xl flex flex-col gap-4 md:hidden animate-fadeIn">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>PROJECT</span>
          <span>CONTACT US</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
