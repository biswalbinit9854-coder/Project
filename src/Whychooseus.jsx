import React from "react";
import { CiStethoscope } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

function WhyChooseUs() {
  return (
    <section className="bg-[#FAF6EF] py-20 text-center">

      <h1 className="text-5xl font-bold">
        WHY CHOOSE US?
      </h1>

      <p className="text-xl mt-5 mb-10">
        Exceptional care, advanced technology, and unbeatable value.
      </p>

      <div className="flex flex-col items-center gap-5">

        <div className="bg-sky-500 text-white px-10 py-4 rounded-lg text-2xl font-bold flex items-center justify-center gap-2">
          <CiStethoscope />  EXPERT CARE
        </div>

        <div className="bg-orange-500 text-white px-10 py-4 rounded-lg text-2xl font-bold flex items-center justify-center gap-2">
          <IoIosLaptop /> TOP EQUIPMENT
        </div>

        <div className="bg-green-500 text-white px-10 py-4 rounded-lg text-2xl font-bold flex items-center justify-center gap-2">
          <GiReceiveMoney /> AFFORDABLE
        </div>

        <div className="bg-purple-500 text-white px-10 py-4 rounded-lg text-2xl font-bold flex items-center justify-center gap-2">
          <IoHeart /> COMPASSIONATE CARE
        </div>

        <div className="bg-yellow-500 text-white px-10 py-4 rounded-lg text-2xl font-bold flex items-center justify-center gap-2">
          <FaClock /> FAST SERVICE
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;