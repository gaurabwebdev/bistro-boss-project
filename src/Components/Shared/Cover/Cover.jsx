import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ coverContent }) => {
  const { img, coverTitle, coverText } = coverContent;
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`hero h-[600px]`}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" w-[400px] lg:w-[768px] p-10  lg:py-20 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
            <p className="mb-5 max-w-md">{coverText}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
