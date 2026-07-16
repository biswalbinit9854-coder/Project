import React from 'react';
import { CiStethoscope } from "react-icons/ci";
import { AiTwotoneAlert } from "react-icons/ai";
import { MdOutlineVaccines } from "react-icons/md";
import { TbDental } from "react-icons/tb";

function Services() {
  return (
    <section id="services"
      className='bg-[#FAF6EF] py-20 px-10'>
      <h1 className='text-5xl font-bold text-center' >OUR SERIVICES</h1>
      <p className='text-center text-2xl mt-4 mb-16'>Comprehensive veterinary care for pets of all kinds</p>

      <div className='text-center'>
        <div className='w-28 h-28 bg-green-500 rounded-full flex items-center justify-center mx-auto text-5xl '>
          <CiStethoscope />
        </div>
        <h2 className='text-3xl mt-6 font-bold'>ROUTINE CHECK-UPS</h2>
        <p className='text-lg mt-4'>Regular check-ups to ensure your pets health and catch issues early.</p>
      </div>

      <div className='text-center'>
        <div className='w-28 h-28 bg-orange-500 rounded-full flex items-center justify-center mx-auto text-5xl '>
          <AiTwotoneAlert />
        </div>
        <h3 className='font-bold text-3xl mt-6'>EMERGENCY CARE</h3>
        <p className='text-lg mt-4'>Immediate care for urgent situations to provide quick relif. </p>
      </div>

      <div className='text-center'>
        <div className='text-5xl w-28 h-28 bg-blue-500 flex items-center justify-center rounded-full mx-auto'>
          <MdOutlineVaccines />
        </div>
        <h4 className='font-bold text-3xl mt-6'> VACCINATIONS</h4>
        <p className='text-lg mt-4'> Vaccines to protect your pet from diseases and keep them healthy.</p>
      </div>

      <div className='text-center'>
        <div className='text-5xl rounded-full mx-auto bg-yellow-500 w-28 h-28 flex items-center justify-center '>
          <TbDental />
        </div>
        <h5 className='font-bold text-3xl mt-6'>DENTAL CARE</h5>
        <p className='text-lg mt-4'>Immediate care for urgent situations to provide quick relif.</p>
        <button className='mt-8 bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full text-xl cursor-pointer'> Book an appointment </button>
      </div>
    </section>
  );
}

export default Services;
