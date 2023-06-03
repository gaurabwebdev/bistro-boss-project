import React from "react";

const SectionTitle = ({ subHeading, Heading, color }) => {
  return (
    <div className="text-center my-10 md:w-3/12 mx-auto">
      <p className="text-2xl italic text-yellow-500">{subHeading}</p>
      <h3
        className={`my-5 text-3xl font-semibold border-y-2 ${
          color ? "border-gray-100 text-white" : ""
        } py-3 uppercase`}
      >
        {Heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
