import React from "react";
import { SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Slide = ({ item }) => {
  const { details, name, rating } = item;
  return (
    <div className="max-w-2xl  mx-auto p-12">
      <div className="flex justify-center mb-8">
        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
      </div>
      <div className="">
        <p>{details}</p>
        <h2 className="text-xl font-semibold my-4 text-yellow-600">{name}</h2>
      </div>
    </div>
  );
};

export default Slide;
