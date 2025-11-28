import React from 'react';

const Aboutus = () => {
  return (
    <section className="bg-gray-200 py-20 px-4 md:px-16 text-blue-950">
      <h2 className="text-6xl font-bold mb-10 text-blue-950 inline-block border-b-4 pb-5 border-blue-950">About</h2>
      
      <div className="grid md:grid-cols-3 gap-10 text-blue-950">
        {/* Left Column: Description */}
        <div className="col-span-1">
          <p className="mb-4 font-semibold text-xl">
            We offer professional services including Interior Decoration, Architectural design and planning, Rennovation and 
            Remodelling service .
          </p>
          <p className='font-semibold text-xl'>
            We provide the center details of best experience possible for our clients.
          </p>
        </div>

        {/* Center Column: Stats */}
        <div className="col-span-1 space-y-10">
          <div>
            <h3 className="text-5xl font-bold">735</h3>
            <p className="text-gray-500">Completed deals</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">19</h3>
            <p className="text-gray-500">Years of experience</p>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="col-span-1 space-y-10">
          <div>
            <h3 className="text-5xl font-bold">950+</h3>
            <p className="text-gray-500">Satisfied customers</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">295</h3>
            <p className="text-gray-500">Cities around Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
