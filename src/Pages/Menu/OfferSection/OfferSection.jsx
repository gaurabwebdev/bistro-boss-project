import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Home/MenuSection/MenuItem";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import { Link } from "react-router-dom";

const OfferSection = () => {
  const [menu] = useMenu("offered");

  return (
    <div>
      <SectionTitle subHeading={"---Don't miss---"} Heading={"TODAY'S OFFER"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
        {menu &&
          menu.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
      <div className="flex justify-center mb-5">
        <Link to={"/shop"}>
          <button className="px-8 py-5 border-b-2 hover:bg-gray-600 hover:text-white  duration-150 rounded border-gray-500 uppercase text-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferSection;
