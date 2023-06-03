import React from "react";

const Banner = () => {
  return (
    <div className=" bg-[url('./src/assets/home/chef-service.jpg')] my-5">
      <div className="backdrop-brightness-50 w-full h-full p-20">
        <div className="bg-gray-200 p-8 rounded">
          <h1 className="text-4xl text-center uppercase">Bistro Boss</h1>
          <p className="text-xl text-center md:w-2/3 mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
