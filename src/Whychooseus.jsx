import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

function WhyChooseUs() {
  return (
    <section className="bg-[#FAF6EF] py-12 md:py-20 px-4">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        WHY CHOOSE US?
      </h1>

      <p className="text-lg sm:text-xl mt-5 mb-10 text-center">
        Exceptional care, advanced technology, and unbeatable value.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        <div className="bg-sky-500 text-white p-6 rounded-xl text-xl md:text-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
          <CiStethoscope className="text-3xl" />
          <span>EXPERT CARE</span>
        </div>


        <div className="bg-orange-500 text-white p-6 rounded-xl text-xl md:text-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
          <IoIosLaptop className="text-3xl" />
          <span>TOP EQUIPMENT</span>
        </div>


        <div className="bg-green-500 text-white p-6 rounded-xl text-xl md:text-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
          <GiReceiveMoney className="text-3xl" />
          <span>AFFORDABLE</span>
        </div>


        <div className="bg-purple-500 text-white p-6 rounded-xl text-xl md:text-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105">
          <IoHeart className="text-3xl" />
          <span>COMPASSIONATE CARE</span>
        </div>


        <div className="bg-yellow-500 text-white p-6 rounded-xl text-xl md:text-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
          <FaClock className="text-3xl" />
          <span>FAST SERVICE</span>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;