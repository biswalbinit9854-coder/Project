import React from "react";


function Patients() {
  return (
    <section id="patients"
      className="bg-[#FAF6EF] py-20">

      <h1 className="text-5xl font-bold text-center">
        OUR PATIENTS
      </h1>

      <p className="text-center text-2xl mt-5 mb-16">
        We provide expert care for all your beloved pets.
      </p>

      <div className="grid grid-cols-3 gap-12">

        <div className="text-center">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnI5KhOeQeYGjPHB-cIPfrNAJ7oNfb7mkk4RhoUHXlufhsHrBxRW5i_2za&s=10"}
            className="w-60 h-60 rounded-full border mx-auto  transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            DOGS
          </h2>
        </div>

        <div className="text-center">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCe58lsUOaiLGwtPG-FbDCjjw4n5UrMwIhD21YbgI7C8QxWmknmjb0rk&s=10"}
            className="w-60 h-60 rounded-full border mx-auto  transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            CATS
          </h2>
        </div>

        <div className="text-center">
          <img
            src={"https://headsupfortails.com/cdn/shop/articles/Hamster_10.jpg?v=1645258342"}
            className="w-60 h-60 rounded-full border mx-auto  transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            HAMSTER
          </h2>
        </div>

        <div className="text-center">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZhbKEiLmUCRa_r5_PG2sfZyN6KGE6cFB42yF8s-2Sza-GDDZThhyjpc&s=10"}
            className="w-60 h-60 rounded-full border mx-auto  transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            RABBITS
          </h2>
        </div>

        <div className="text-center">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PDzOo1j099Y0AdYeoQS1_ceEIpUWgvnlfQYLJMeRLZaONFZEJJd4leY&s=10"}
            className="w-60 h-60 rounded-full border mx-auto transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            TURTLES
          </h2>
        </div>

        <div className="text-center">
          <img
            src={"https://cdn.pixabay.com/photo/2023/06/04/23/47/rufus-8041082_1280.jpg"}
            className="w-60 h-60 rounded-full border mx-auto  transition-all duration-300 ease-in-out
                hover:scale-110"
          />
          <h2 className="text-3xl font-bold mt-5">
            BIRDS
          </h2>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <button className='mt-8 bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full text-xl cursor-pointer transition-all duration-300 ease-in-out
                hover:scale-110'> Book an appointment </button>
      </div>

    </section>
  );
}



export default Patients;