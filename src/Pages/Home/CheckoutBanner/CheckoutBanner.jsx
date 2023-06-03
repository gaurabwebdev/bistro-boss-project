import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const CheckoutBanner = () => {
  return (
    <div className=" bg-[url('./src/assets/home/featured.jpg')] bg-cover bg-center bg-fixed">
      <div className="w-full h-full backdrop-brightness-50 px-16 py-20">
        <SectionTitle
          subHeading={"---Check it out---"}
          Heading={"FROM OUR MENU"}
          color={"#fdfdfd"}
        />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-16">
          <div>
            <img
              className="w-2/3 mx-auto"
              src="./src/assets/home/featured.jpg"
              alt=""
            />
          </div>
          <div className="text-white">
            <h4 className="text-xl font-semibold ">
              March 20, 2023 <br />
              <span className="mb-5">WHERE CAN I GET SOME?</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div>
              <button className="px-8 py-5 border-b-2 hover:bg-gray-600   duration-150 rounded border-gray-100 uppercase text-lg mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBanner;
