import React from "react";

function Testimonials() {
  return (
    <section id="testimonial" className="bg-[#F8F3EC] py-16">


      <h1 className="text-5xl font-bold text-center mb-12">
        WHAT OUR CLIENTS <br /> SAY ABOUT US
      </h1>


      <div className="flex justify-center gap-8 flex-wrap">


        <div className="bg-white w-80 p-6 rounded-2xl shadow">

          <div className="flex items-center gap-4">
            <img
              src={"https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU="}
              alt="Img"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-2xl font-bold">PETER</h2>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          </div>

          <p className="mt-5 text-gray-700">
            Excellent service! My dog is now healthy and happy thanks to the
            wonderful team. They took the time to explain everything and made
            us feel at ease.
          </p>

        </div>


        <div className="bg-white w-80 p-6 rounded-2xl shadow">

          <div className="flex items-center gap-4">
            <img
              src={"https://img.magnific.com/free-photo/cheerful-good-looking-young-woman-wearing-white-shirt-with-blonde-hair-smiling-pleasantly-while-receiving-some-positive-news-pretty-girl-looking-with-joyful-smile_176420-13579.jpg?semt=ais_hybrid&w=740&q=80"}
              alt="IMG"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-2xl font-bold">ALLY</h2>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          </div>

          <p className="mt-5 text-gray-700">
            The veterinarians are incredibly kind and dedicated. They treated
            my dog like their own and provided the best care possible.
          </p>

        </div>


        <div className="bg-white w-80 p-6 rounded-2xl shadow">

          <div className="flex items-center gap-4">
            <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7rtr015grveqHuDY3O3m7Y6jj8gl04aossWWpFAbfPA&s=10"}
              alt="Img"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-2xl font-bold">RICHARD</h2>
              <p className="text-yellow-500">★★★★★</p>
            </div>
          </div>

          <p className="mt-5 text-gray-700">
            They responded quickly when my cat was unwell. Thanks to their
            expertise, they saved her life. I couldn't be more thankful.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;