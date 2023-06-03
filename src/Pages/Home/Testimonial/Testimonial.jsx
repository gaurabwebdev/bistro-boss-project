import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="p-16">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        Heading={"TESTIMONIALS"}
      />
      <div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
