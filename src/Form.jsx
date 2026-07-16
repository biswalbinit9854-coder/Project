import React, { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function handleSubmit() {
        const userData = {
            name,
            email,
            message,
        };


        localStorage.setItem("contactData", JSON.stringify(userData));

        alert("Data Saved Successfully!");


        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section className="bg-[#FAF6EF] py-16 px-8">
            <div className="max-w-6xl mx-auto flex justify-between items-center gap-12">


                <div>
                    <div className="w-60 h-60 bg-green-500 rounded-full flex justify-center items-center">
                        <img
                            src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500"
                            alt="Bird"
                            className="w-65 h-65 rounded-full object-cover"
                        />
                    </div>
                </div>


                <div className="w-[450px]">

                    <h1 className="text-6xl font-bold mb-10">
                        STILL HAVE
                        <br />
                        QUESTIONS?
                        <br />
                        GET IN TOUCH.
                    </h1>


                    <div className="flex gap-4">


                        <div className="flex flex-col">
                            <label className="mb-2 font-medium">Name</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border p-3 rounded-lg w-52"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>


                        <div className="flex flex-col">
                            <label className="mb-2 font-medium">Email</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border p-3 rounded-lg w-52"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                    </div>


                    <div className="mt-5 flex flex-col">
                        <label className="mb-2 font-medium">Message</label>

                        <textarea
                            placeholder="Your message..."
                            className="border p-3 rounded-lg w-full h-40 resize-none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>


                    <button
                        onClick={handleSubmit}
                        className="bg-sky-400 hover:bg-sky-500 text-white w-full py-3 rounded-full mt-6 text-xl cursor-pointer transition duration-300"
                    >
                        Submit
                    </button>

                </div>


                <div>
                    <div className="w-60 h-60 bg-purple-400 rounded-full flex justify-center items-end">
                        <img
                            src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500"
                            alt="Rabbit"
                            className="w-65 h-65 rounded-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;