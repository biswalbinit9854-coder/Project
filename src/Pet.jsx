import React from "react";

function Pets() {
  return (
    <section className="bg-[#FAF6EF] py-16">
      <div className="flex justify-center gap-10">


        <div className="bg-purple-500 rounded-t-full w-64 h-96 flex items-end justify-center">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Eu-ST-3KDr0gjvSHJBuc7pX3vnuAFMn5zgstoIj65ZxIm8n2q_J9uB8G&s=10"} alt="Cat" className="w-82 rounded-t-full" />
        </div>


        <div className="bg-sky-300 rounded-t-full w-72 h-[460px] flex items-end justify-center">
          <img src={"https://thumbs.dreamstime.com/b/portrait-month-old-golden-retriever-male-puppy-dog-seamless-blue-background-young-soft-fluffy-fur-front-239661885.jpg"} alt="Dog" className="w-250 rounded-t-full" />
        </div>


        <div className="bg-yellow-300 rounded-t-full w-64 h-96 flex items-end justify-center">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTetC8eFJXhHt4kJqxIhGOt_wwMZPlinfvHzhFDo6qrlTfLUYV4WT0OA&s=10"} alt="Rabbit" className="w-65 rounded-t-full" />
        </div>

      </div>
    </section>
  );
}

export default Pets;