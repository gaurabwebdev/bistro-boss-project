import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderImage1 from "../../../assets/home/01.jpg";
import SliderImage2 from "../../../assets/home/02.jpg";
import SliderImage3 from "../../../assets/home/03.png";
import SliderImage4 from "../../../assets/home/04.jpg";
import SliderImage5 from "../../../assets/home/05.png";

const HeroCarousel = () => {
  return (
    <Carousel className="text-center">
      <div>
        <img src={SliderImage1} />
      </div>
      <div>
        <img src={SliderImage2} />
      </div>
      <div>
        <img src={SliderImage3} />
      </div>
      <div>
        <img src={SliderImage4} />
      </div>
      <div>
        <img src={SliderImage5} />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
