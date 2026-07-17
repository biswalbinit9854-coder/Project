import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <h1 className="text-2xl md:text-3xl font-bold hover:scale-105 transition duration-300">
          Bennett's Vet
        </h1>


        <ul className="hidden lg:flex gap-6 text-lg">
          <li><a href="#home" className="hover:text-sky-500">Home</a></li>
          <li><a href="#services" className="hover:text-sky-500">Services</a></li>
          <li><a href="#patients" className="hover:text-sky-500">Patients</a></li>
          <li><a href="#testimonial" className="hover:text-sky-500">Testimonial</a></li>
          <li><a href="#gallery" className="hover:text-sky-500">Gallery</a></li>
          <li><a href="#faq" className="hover:text-sky-500">FAQ</a></li>
        </ul>


        <button className="hidden lg:block bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full transition duration-300 hover:scale-105">
          Book Appointment
        </button>


        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>


      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#patients" onClick={() => setMenuOpen(false)}>Patients</a></li>
            <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>

            <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full transition duration-300">
              Book Appointment
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;