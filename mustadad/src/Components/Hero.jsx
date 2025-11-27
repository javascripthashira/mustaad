import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Hero = () => {
  const images = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[650px] w-full overflow-hidden bg-gray-100">

      {/* NAVBAR */}
      <Navbar className="absolute top-0 left-0 w-full z-50" />

      {/* BACKGROUND SHAPE — hidden on phones */}
      <svg
        className="absolute inset-y-0 left-0 h-full w-3/4 z-10 block"
        viewBox="0 0 500 1000"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,0 
            L330,0 
            C360,250 400,750 380,1000 
            L0,1000 
            Z
          "
          fill="#1f2a60"
        />
      </svg>

      {/* CONTENT */}
      <div className="
        absolute inset-0 z-20 
        flex flex-col-reverse md:flex-row 
        items-center justify-between 
        px-6 sm:px-12 lg:px-20
        gap-10 md:gap-0
      ">

        {/* LEFT TEXT */}
        <div className="text-white max-w-lg space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-md">
            Transforming Spaces Into  
            <span className="block mt-1 text-gray-400">Elegant Experiences</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200">
            We design functional, beautiful interiors that reflect your lifestyle 
            and elevate everyday living with modern aesthetics.
          </p>

          <button className="mt-2 px-6 py-3 bg-gray-600 text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all">
            Get Started
          </button>
        </div>

        {/* RIGHT — AUTOPLAY CAROUSEL */}
        <div className="w-full md:w-[45%] sm:mt-28 flex justify-center">
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl shadow-2xl">
            <div
              className="
                h-full w-full bg-cover bg-center 
                transition-all duration-[1200ms] ease-in-out
              "
              style={{
                backgroundImage: `url(${images[currentIndex]})`
              }}
            ></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
