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
        <footer className="bg-[#FAF6EF] border-t py-16">

            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20">


                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Bennett's Vet
                    </h2>

                    <p className="flex items-center gap-3 mb-4">
                        <IoCallOutline />
                        +91 9337619936
                    </p>

                    <p className="flex items-center gap-3 mb-4">
                        <IoMailOutline />
                        biswalbinit9854@gmail.com
                    </p>

                    <p className="flex items-center gap-3 mb-6">
                        <IoLocationOutline />
                        Bhubaneswar,Odisha
                    </p>

                    <div className="flex gap-5 text-3xl">
                        <FaFacebook  className=" transition-all duration-300 ease-in-out
                hover:scale-110"/>
                        <FaInstagram className=" transition-all duration-300 ease-in-out
                hover:scale-110" />
                        <FaYoutube className=" transition-all duration-300 ease-in-out
                hover:scale-110"/>
                    </div>

                </div>


                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Menu
                    </h2>

                    <p className="mb-3">Services</p>
                    <p className="mb-3">Patients</p>
                    <p className="mb-3">Testimonial</p>
                    <p className="mb-3">Gallery</p>
                    <p>FAQ</p>

                </div>


                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Working Hours
                    </h2>

                    <p className="mb-3">Monday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3">Tuesday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3">Wednesday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3">Thursday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3">Friday : 9:00 AM - 6:00 PM</p>
                    <p className="mb-3">Saturday : 10:00 AM - 4:00 PM</p>
                    <p>Sunday : Closed</p>

                </div>

            </div>

            <p className="text-center mt-16">
                © 2026 Bennett's Vet By react & tailwind css.
            </p>

        </footer>
    );
}

export default Footer;