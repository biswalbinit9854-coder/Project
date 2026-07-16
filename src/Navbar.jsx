import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full">
      <div className="flex justify-between items-center">


        <h1 className="text-3xl font-bold">
          Bennett's Vet
        </h1>


        <ul className="flex gap-6 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
          </li>

          <li>
            <a href="#patients" className="hover:text-blue-500">
              Patients
            </a>
          </li>

          <li>
            <a href="#testimonial" className="hover:text-blue-500">
              Testimonial
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-blue-500">
              Gallery
            </a>
          </li>


          <li>
            <a href="#faq" className="hover:text-blue-500">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex justify-center text-center">
          <button className='bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full text-xl cursor-pointer'> Book an appointment </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;