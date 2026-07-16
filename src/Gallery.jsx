import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="bg-[#FAF6EF] py-20">


      <h1 className="text-6xl font-bold text-center mb-14">
        GALLERY
      </h1>


      <div className="flex justify-center gap-6 flex-wrap">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBOP270FjZ4I9taxTx84oKQEXbw_MynpoD1zuVCuwAl0ku_0veex-Uqo&s=10"}
          alt=""
          className="w-64 h-96 rounded-3xl object-cover"
        />

        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvlFsegyRi4X4qZF1Ojk9XUj8uIYTpOu31V92It_tTw&s=10"}
          alt=""
          className="w-64 h-96 rounded-3xl object-cover"
        />

        <img
          src={"https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/consultation_page/Experienced%2C+multi-speciality+vets+(2).webp"}
          alt=""
          className="w-64 h-96 rounded-3xl object-cover"
        />

        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj32wpE8u4CDrpEE946ByhQlndBD03wiJlivpxt-O3umQO9Ik9s6E9XEw-&s=10"}
          alt=""
          className="w-64 h-96 rounded-3xl object-cover"
        />

        <img
          src={"https://img.magnific.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100178.jpg"}
          alt=""
          className="w-64 h-96 rounded-3xl object-cover"
        />

      </div>
      <div>


      </div>

    </section>
  );
}

export default Gallery;
