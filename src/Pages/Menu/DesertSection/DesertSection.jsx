import React from "react";
import Cover from "../../../Components/Shared/Cover/Cover";
import desertCover from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/UseMenu/UseMenu";
import MenuItem from "../../Home/MenuSection/MenuItem";
import { Link } from "react-router-dom";

const DesertSection = () => {
  // ${desertContent.coverTitle}
  const [menu] = useMenu("dessert");
  const desertContent = {
    img: desertCover,
    coverTitle: "desserts",
    coverText:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <div>
      <Cover coverContent={desertContent} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 px-8 py-10">
        {menu &&
          menu
            .slice(0, 6)
            .map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
      <div className="flex justify-center mb-5">
        <Link to={`/shop/${desertContent.coverTitle}`}>
          <button className="px-8 py-5 border-b-2 hover:bg-gray-600 hover:text-white  duration-150 rounded border-gray-500 uppercase text-lg">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DesertSection;
