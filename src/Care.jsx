import React from "react";

function Care() {
  return (
    <section className="bg-[#FAF6EF] py-20 px-8">

      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">


        <div className="w-[500px] bg-sky-300 rounded-[250px] flex items-end justify-center">
          <img
            src={"https://media.istockphoto.com/id/1944480290/photo/portrait-of-border-collie-looking-at-the-camera-on-a-turquoise-blue-background.jpg?s=612x612&w=0&k=20&c=qBDHMQitaVjbi0zbjmA3OFkT7XfMHbB6H5q45YulJ8c="}
            alt="Dog and Cat"
            className="w-500 rounded-[250px] "
          />
        </div>


        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight mb-10">
            HOW TO TAKE CARE <br />
            OF YOUR PET
          </h1>


          <div className="flex gap-4 mb-8">
            <div className="w-5 h-4 bg-green-500 rounded-full mt-3"></div>

            <div>
              <h2 className="text-3xl font-bold">REGULAR EXERCISE</h2>
              <p className="text-xl mt-2">
                Ensure your pet gets daily exercise to maintain a healthy
                weight and prevent behavioral issues.
              </p>
            </div>
          </div>


          <div className="flex gap-4 mb-8">
            <div className="w-5 h-4 bg-orange-500 rounded-full mt-3"></div>

            <div>
              <h2 className="text-3xl font-bold">PROPER NUTRITION</h2>
              <p className="text-xl mt-2">
                Feed your pet a balanced diet suited to their needs for
                overall well-being.
              </p>
            </div>
          </div>


          <div className="flex gap-4">
            <div className="w-5 h-4 bg-sky-500 rounded-full mt-3"></div>

            <div>
              <h2 className="text-3xl font-bold">ROUTINE VET VISITS</h2>
              <p className="text-xl mt-2">
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