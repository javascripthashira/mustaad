import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1f2a60] text-white pt-20 pb-10 px-6 sm:px-12 lg:px-20 overflow-hidden">

      {/* CURVED MIDDLE SHAPE */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1b2554"
          d="M0,192L120,176C240,160,480,128,720,144C960,160,1200,224,1320,256L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Mustaad</h2>
          <p className="text-gray-300">
            We transform spaces into elegant environments through thoughtful,
            modern and aesthetic interior design.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" /> mustaad@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" /> +234 903 000 0000
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5" /> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Your email"
              className="px-4 py-2 w-full text-black outline-none"
            />
            <button className="bg-gray-700 px-4 py-2 hover:bg-yellow-300 hover:text-black transition-all">
              <ArrowRight />
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-12 pt-6 border-t border-gray-500 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Mustaad — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
