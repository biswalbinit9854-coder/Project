import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function FAQ() {
  const [open, setOpen] = useState(0);

  const faq = [
    {
      question: "What are your operating hours?",
      answer:
        "You can easily schedule an appointment by calling us or using our online booking system on our website.",
    },
    {
      question: "Do you offer emergency veterinary services?",
      answer:
        "Yes, we provide emergency veterinary services for urgent pet care.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "Call us or book an appointment through our website.",
    },
    {
      question: "What types of pets do you treat?",
      answer:
        "We treat dogs, cats, rabbits, birds, and other small animals.",
    },
    {
      question: "Do you provide vaccinations and preventive care?",
      answer:
        "Yes, we offer vaccinations, health check-ups, and preventive care.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#FAF6EF] py-12 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">


        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-12 leading-tight">
          FREQUENTLY ASKED <br />
          QUESTIONS
        </h1>


        {faq.map((item, index) => (
          <div
            key={index}
            className="border border-black rounded-xl p-4 sm:p-5 md:p-6 mb-4 md:mb-5"
          >

            <div
              className="flex justify-between items-center gap-4 cursor-pointer"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                {item.question}
              </h2>

              {open === index ? (
                <IoChevronUp
                  className="text-xl sm:text-2xl md:text-3xl flex-shrink-0"
                />
              ) : (
                <IoChevronDown
                  className="text-xl sm:text-2xl md:text-3xl flex-shrink-0"
                />
              )}
            </div>


            {open === index && (
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;