import React from "react";

function Patients() {
  return (
    <section id="patients" className="bg-[#FAF6EF] py-12 md:py-20 px-4">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        OUR PATIENTS
      </h1>

      <p className="text-center text-lg sm:text-xl md:text-2xl mt-5 mb-12 md:mb-16">
        We provide expert care for all your beloved pets.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnI5KhOeQeYGjPHB-cIPfrNAJ7oNfb7mkk4RhoUHXlufhsHrBxRW5i_2za&s=10"
            alt="Dogs"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">DOGS</h2>
        </div>


        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCe58lsUOaiLGwtPG-FbDCjjw4n5UrMwIhD21YbgI7C8QxWmknmjb0rk&s=10"
            alt="Cats"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">CATS</h2>
        </div>


        <div className="text-center">
          <img
            src="https://headsupfortails.com/cdn/shop/articles/Hamster_10.jpg?v=1645258342"
            alt="Hamster"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">HAMSTER</h2>
        </div>


        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZhbKEiLmUCRa_r5_PG2sfZyN6KGE6cFB42yF8s-2Sza-GDDZThhyjpc&s=10"
            alt="Rabbits"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">RABBITS</h2>
        </div>


        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDzOo1j099Y0AdYeoQS1_ceEIpUWgvnlfQYLJMeRLZaONFZEJJd4leY&s=10"
            alt="Turtles"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">TURTLES</h2>
        </div>


        <div className="text-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/04/23/47/rufus-8041082_1280.jpg"
            alt="Birds"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full border mx-auto object-cover transition-all duration-300 hover:scale-105"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5">BIRDS</h2>
        </div>

      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg md:text-xl cursor-pointer transition-all duration-300 hover:scale-105">
          Book an Appointment
        </button>
      </div>

    </section>
  );
}

export default Patients;