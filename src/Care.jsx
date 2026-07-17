import React from "react";

function Care() {
  return (
    <section className="bg-[#FAF6EF] py-12 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">


        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[500px] bg-sky-300 rounded-[250px] overflow-hidden flex items-end justify-center">
            <img
              src="https://media.istockphoto.com/id/1944480290/photo/portrait-of-border-collie-looking-at-the-camera-on-a-turquoise-blue-background.jpg?s=612x612&w=0&k=20&c=qBDHMQitaVjbi0zbjmA3OFkT7XfMHbB6H5q45YulJ8c="
              alt="Dog and Cat"
              className="w-full h-auto rounded-[250px]"
            />
          </div>
        </div>


        <div className="w-full lg:w-1/2 max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-center lg:text-left">
            HOW TO TAKE CARE <br />
            OF YOUR PET
          </h1>


          <div className="flex gap-4 mb-8">
            <div className="w-4 h-4 bg-green-500 rounded-full mt-3 shrink-0"></div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                REGULAR EXERCISE
              </h2>

              <p className="text-base sm:text-lg md:text-xl mt-2 text-gray-700">
                Ensure your pet gets daily exercise to maintain a healthy
                weight and prevent behavioral issues.
              </p>
            </div>
          </div>


          <div className="flex gap-4 mb-8">
            <div className="w-4 h-4 bg-orange-500 rounded-full mt-3 shrink-0"></div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                PROPER NUTRITION
              </h2>

              <p className="text-base sm:text-lg md:text-xl mt-2 text-gray-700">
                Feed your pet a balanced diet suited to their needs for
                overall well-being.
              </p>
            </div>
          </div>


          <div className="flex gap-4">
            <div className="w-4 h-4 bg-sky-500 rounded-full mt-3 shrink-0"></div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                ROUTINE VET VISITS
              </h2>

              <p className="text-base sm:text-lg md:text-xl mt-2 text-gray-700">
                Schedule regular check-ups to keep vaccinations up to date
                and catch health issues early.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Care;