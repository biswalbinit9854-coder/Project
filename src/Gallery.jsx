import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="bg-[#FAF6EF] py-12 md:py-20 px-4">

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        GALLERY
      </h1>

      <div className="flex flex-wrap justify-center gap-6">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOP270FjZ4I9taxTx84oKQEXbw_MynpoD1zuVCuwAl0ku_0veex-Uqo&s=10"
          alt="Gallery 1"
          className="w-full sm:w-72 md:w-64 lg:w-56 xl:w-52 h-80 md:h-96 rounded-3xl object-cover hover:scale-105 transition-all duration-300"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvlFsegyRi4X4qZF1Ojk9XUj8uIYTpOu31V92It_tTw&s=10"
          alt="Gallery 2"
          className="w-full sm:w-72 md:w-64 lg:w-56 xl:w-52 h-80 md:h-96 rounded-3xl object-cover hover:scale-105 transition-all duration-300"
        />

        <img
          src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/consultation_page/Experienced%2C+multi-speciality+vets+(2).webp"
          alt="Gallery 3"
          className="w-full sm:w-72 md:w-64 lg:w-56 xl:w-52 h-80 md:h-96 rounded-3xl object-cover hover:scale-105 transition-all duration-300"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj32wpE8u4CDrpEE946ByhQlndBD03wiJlivpxt-O3umQO9Ik9s6E9XEw-&s=10"
          alt="Gallery 4"
          className="w-full sm:w-72 md:w-64 lg:w-56 xl:w-52 h-80 md:h-96 rounded-3xl object-cover hover:scale-105 transition-all duration-300"
        />

        <img
          src="https://img.magnific.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg"
          alt="Gallery 5"
          className="w-full sm:w-72 md:w-64 lg:w-56 xl:w-52 h-80 md:h-96 rounded-3xl object-cover hover:scale-105 transition-all duration-300"
        />

      </div>

    </section>
  );
}

export default Gallery;