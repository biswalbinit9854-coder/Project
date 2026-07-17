import React from "react";

function Pets() {
  return (
    <section className="bg-[#FAF6EF] py-12 md:py-16 px-4">

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-end gap-8 lg:gap-10">


        <div className="bg-purple-500 rounded-t-full w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96 flex items-end justify-center overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Eu-ST-3KDr0gjvSHJBuc7pX3vnuAFMn5zgstoIj65ZxIm8n2q_J9uB8G&s=10"
            alt="Cat"
            className="w-full h-full object-cover rounded-t-full transition-all duration-300 hover:scale-105"
          />
        </div>


        <div className="bg-sky-300 rounded-t-full w-56 h-80 sm:w-64 sm:h-[400px] lg:w-72 lg:h-[460px] flex items-end justify-center overflow-hidden">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-month-old-golden-retriever-male-puppy-dog-seamless-blue-background-young-soft-fluffy-fur-front-239661885.jpg"
            alt="Dog"
            className="w-full h-full object-cover rounded-t-full transition-all duration-300 hover:scale-105"
          />
        </div>


        <div className="bg-yellow-300 rounded-t-full w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96 flex items-end justify-center overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTetC8eFJXhHt4kJqxIhGOt_wwMZPlinfvHzhFDo6qrlTfLUYV4WT0OA&s=10"
            alt="Rabbit"
            className="w-full h-full object-cover rounded-t-full transition-all duration-300 hover:scale-105"
          />
        </div>

      </div>

    </section>
  );
}

export default Pets;