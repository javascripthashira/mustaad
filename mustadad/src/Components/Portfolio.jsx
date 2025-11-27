import React from 'react';

const Portfolio = () => {
  return (
    <div className="text-gray-900 py-10 px-4 md:px-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img 
            src="/bg3.jpg" 
            alt="Portfolio preview" 
            className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className='w-full text-blue-950 p-6 bg-gray-100 rounded-2xl'>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
            Make Your <br/> Home A Place <br/> You Love 
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eaque obcaecati rem ratione, odio enim dignissimos dicta.
            Ab ut nulla fugiat? Labore sapiente laborum eveniet porro.
            Est saepe maxime alias aut. Minima, suscipit iste distinctio
            nostrum dolorum aperiam tempora vero veritatis soluta 
            exercitationem hic repellat dolorem accusantium ducimus 
            non saepe ipsam.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Portfolio;
