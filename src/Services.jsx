import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { AiTwotoneAlert } from "react-icons/ai";
import { MdOutlineVaccines } from "react-icons/md";
import { TbDental } from "react-icons/tb";

function Services() {
  return (
    <section
      id="services"
      className="bg-[#FAF6EF] py-12 md:py-20 px-4 md:px-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        OUR SERVICES
      </h1>

      <p className="text-center text-lg sm:text-xl md:text-2xl mt-4 mb-12 md:mb-16">
        Comprehensive veterinary care for pets of all kinds.
      </p>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


        <div className="text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-green-500 rounded-full flex items-center justify-center mx-auto text-4xl md:text-5xl">
            <CiStethoscope />
          </div>

          <h2 className="text-2xl md:text-3xl mt-6 font-bold">
            ROUTINE CHECK-UPS
          </h2>

          <p className="text-base md:text-lg mt-4">
            Regular check-ups to ensure your pet's health and catch issues
            early.
          </p>
        </div>


        <div className="text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto text-4xl md:text-5xl">
            <AiTwotoneAlert />
          </div>

          <h2 className="text-2xl md:text-3xl mt-6 font-bold">
            EMERGENCY CARE
          </h2>

          <p className="text-base md:text-lg mt-4">
            Immediate care for urgent situations to provide quick relief.
          </p>
        </div>


        <div className="text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-4xl md:text-5xl">
            <MdOutlineVaccines />
          </div>

          <h2 className="text-2xl md:text-3xl mt-6 font-bold">
            VACCINATIONS
          </h2>

          <p className="text-base md:text-lg mt-4">
            Vaccines to protect your pet from diseases and keep them healthy.
          </p>
        </div>


        <div className="text-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-yellow-500 rounded-full flex items-center justify-center mx-auto text-4xl md:text-5xl">
            <TbDental />
          </div>

          <h2 className="text-2xl md:text-3xl mt-6 font-bold">
            DENTAL CARE
          </h2>

          <p className="text-base md:text-lg mt-4">
            Professional dental care to keep your pet's teeth and gums healthy.
          </p>
        </div>

      </div>


      <div className="flex justify-center mt-12">
        <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105">
          Book an Appointment
        </button>
      </div>
    </section>
  );
}

export default Services;