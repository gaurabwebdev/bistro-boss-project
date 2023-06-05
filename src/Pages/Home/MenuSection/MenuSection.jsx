import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../../Hooks/UseMenu/UseMenu";

const MenuSection = () => {
  const [, menu] = useMenu();
  const currentMenu = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle
        subHeading={"---Check it out---"}
        Heading={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
        {currentMenu &&
          currentMenu.map((item) => <MenuItem key={item._id} item={item} />)}
      </div>
      <div className="flex justify-center mb-5">
        <button className="px-8 py-5 border-b-2 hover:bg-gray-600 hover:text-white  duration-150 rounded border-gray-500 uppercase text-lg">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
