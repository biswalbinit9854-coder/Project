import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="bg-[#FAF6EF] text-center py-20 px-5"
    >
      <div>
        <h1 className='text-6xl font-bold leading-tight '> CARING FOR YOUR
          <br />
          PETS LIKE YOUR OWN </h1>
        <p className='text-2xl mt-9'> Quality veterinary services for dogs,cats,rabbits and more.</p>
        <button className='mt-8 bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full text-xl cursor-pointer transition-all duration-300 ease-in-out
                hover:scale-110'>Book an Appointment</button>
      </div>
    </section>
  );
}

export default Home;
