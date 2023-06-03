import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Slide from "./Slide";

const TestimonialSlider = () => {
  const [reviewItems, setReviewItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviewItems(data));
  }, []);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-center"
      >
        {reviewItems &&
          reviewItems.map((item) => (
            <SwiperSlide key={item._id}>
              <Slide item={item}></Slide>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
