import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <div className="w-full px-6 md:px-10 py-16">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 md:w-1/2">
          Creating Stories in <br /> Every Space
        </h1>

        <p className="text-gray-500 md:w-1/3 text-base md:text-sm leading-relaxed">
          Customer satisfaction is our top priority. We are always ready
          to listen and respond to any questions or input you have.
        </p>
      </div>

      {/* PROJECT LIST */}
      <section className="mt-14 space-y-10">

        {/* ITEM TEMPLATE */}
        {[
          {
            title: "A Space That Reflects You: Personalized Interior Design",
            date: "12 JAN 2023",
            img: "Car1.jpeg"
          },
          {
            title: "Decor That Talks: Creating Spaces That Feel Alive",
            date: "08 FEB 2023",
            img: "Car1.jpeg"
          }
        ].map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col md:flex-row
              md:items-center md:justify-between 
              gap-5
              pb-8 border-b border-gray-200
            "
          >
            
            <img
              src={item.img}
              className="w-full sm:w-48 h-48 object-cover rounded-xl"
            />

            <h3 className="text-lg font-medium text-gray-900 md:w-1/3">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400">{item.date}</p>

            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <ArrowRight size={18} className="text-gray-700" />
            </div>
          </div>
        ))}

      </section>
    </div>
  );
};

export default Projects;
