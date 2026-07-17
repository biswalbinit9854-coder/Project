import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="bg-[#FAF6EF] text-center py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          CARING FOR YOUR
          <br />
          PETS LIKE YOUR OWN
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-9">
          Quality veterinary services for dogs, cats, rabbits and more.
        </p>

        <button
          className="mt-8 bg-sky-400 hover:bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg md:text-xl cursor-pointer transition-all duration-300 hover:scale-105"
        >
          Book an Appointment
        </button>

      </div>
    </section>
  );
}

export default Home;