import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Slider Images
import SlideOne from "../../../assets/home/slide1.jpg";
import SlideTwo from "../../../assets/home/slide2.jpg";
import SlideThree from "../../../assets/home/slide3.jpg";
import SlideFour from "../../../assets/home/slide4.jpg";
import SlideFive from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const CategorySlider = () => {
  return (
    <>
      <SectionTitle
        Heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      />
      <div className="my-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SlideOne} alt="slide-image" />
            <h3 className="text-3xl text-center -mt-20 text-gray-500">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideTwo} alt="slide-image" />
            <h3 className="text-3xl text-center -mt-20 text-gray-500">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideThree} alt="slide-image" />
            <h3 className="text-3xl text-center -mt-20 text-gray-500">Soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideFour} alt="slide-image" />
            <h3 className="text-3xl text-center -mt-20 text-gray-500">
              Deserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideFive} alt="slide-image" />
            <h3 className="text-3xl text-center -mt-20 text-gray-500">Salad</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CategorySlider;
