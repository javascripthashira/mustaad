import React from 'react';

const services = [
  { title: 'Interior Deisgn ', subtitle: '1,316 offers', image: '/Car4.jpeg' },
  { title: 'Architectural Design & Planning', subtitle: '2,785 offers', image: '/Car3.jpeg' },
  { title: 'Space Planning & 3D Visualization', subtitle: '918 offers', image: '/Car1.jpeg' },
  { title: 'Renovation & Remodeling Services', subtitle: '740 offers', image: '/Car2.jpeg' },
];

const Services = () => {
  return (
    <div className='px-5 rounded-2xl py-5 '>
    <section className="py-16 rounded px-5 md:px-16">
      <h2 className="text-3xl font-semibold mb-10  text-blue-950 inline-block border-b-4 pb-5 border-blue-950">Our services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-64 h-64 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Services;
