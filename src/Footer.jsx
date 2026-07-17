import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import {
    IoCallOutline,
    IoMailOutline,
    IoLocationOutline,
} from "react-icons/io5";

function Footer() {
    return (
        <footer className="bg-[#FAF6EF] border-t py-12 md:py-16">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Bennett's Vet
                    </h2>

                    <p className="flex items-center gap-3 mb-4 text-sm md:text-base">
                        <IoCallOutline />
                        +91 9337619936
                    </p>

                    <p className="flex items-center gap-3 mb-4 text-sm md:text-base break-all">
                        <IoMailOutline />
                        biswalbinit9854@gmail.com
                    </p>

                    <p className="flex items-center gap-3 mb-6 text-sm md:text-base">
                        <IoLocationOutline />
                        Bhubaneswar, Odisha
                    </p>

                    <div className="flex gap-5 text-2xl md:text-3xl">
                        <FaFacebook className="hover:scale-110 transition duration-300 cursor-pointer" />
                        <FaInstagram className="hover:scale-110 transition duration-300 cursor-pointer" />
                        <FaYoutube className="hover:scale-110 transition duration-300 cursor-pointer" />
                    </div>
                </div>


                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Menu
                    </h2>

                    <p className="mb-3 hover:text-orange-500 cursor-pointer transition">Services</p>
                    <p className="mb-3 hover:text-orange-500 cursor-pointer transition">Patients</p>
                    <p className="mb-3 hover:text-orange-500 cursor-pointer transition">Testimonial</p>
                    <p className="mb-3 hover:text-orange-500 cursor-pointer transition">Gallery</p>
                    <p className="hover:text-orange-500 cursor-pointer transition">FAQ</p>
                </div>


                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Working Hours
                    </h2>

                    <p className="mb-3 text-sm md:text-base">Monday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3 text-sm md:text-base">Tuesday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3 text-sm md:text-base">Wednesday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3 text-sm md:text-base">Thursday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3 text-sm md:text-base">Friday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3 text-sm md:text-base">Saturday : 10:00 AM - 4:00 PM</p>
                    <p className="text-sm md:text-base">Sunday : Closed</p>
                </div>

            </div>

            <p className="text-center text-sm md:text-base text-gray-600 mt-12 md:mt-16 border-t pt-6 px-4">
                © 2026 Bennett's Vet.by tailwindcss & React
            </p>

        </footer>
    );
}

export default Footer;